import { selectUserEmail } from 'redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { selectorSwicherTheme } from 'redux/selectors';
import { subscribeUser } from 'redux/authOperations';
import { useFormik } from 'formik';
import * as yup from 'yup';
import notiflix from 'notiflix';

import {
  FormFooter,
  FormFooterInput,
  FormFooterBtn,
  Error,
  InputWrapper,
  ErrorLogoStyled,
  SuccessLogoStyled,
  EmailIconStyled,
  ResetFormInput,
} from './FooterForm.styled';

export const FooterForm = () => {
  const dispatch = useDispatch();
  const userEmail = useSelector(selectUserEmail);
  const theme = useSelector(selectorSwicherTheme);

  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .matches(emailRegex, 'Invalid email address')
      .required('Email is required'),
  });

  const formik = useFormik({
    initialValues: {
      email: userEmail || '',
    },
    validationSchema,
    onSubmit: values => {
      dispatch(subscribeUser({ email: values.email }))
        .then(rejected => {
          if (rejected.payload === 'Request failed with status code 404') {
            return notiflix.Notify.warning('It`s not your Email');
          }
          if (rejected.payload === 'Request failed with status code 400') {
            return notiflix.Notify.warning('User is already Subscribed');
          }
          notiflix.Notify.success('Subscribed successfully');
        })
        .catch(error => {
          console.log(error);
          notiflix.Notify.failure('Error subscribing');
        });
    },
    validate: values => {
      const errors = {};
      if (!values.email) {
        errors.email = 'Required';
      } else if (!emailRegex.test(values.email)) {
        errors.email = 'Invalid email address';
      }
      return errors;
    },
  });

  const onClickResetButton = () => {
    formik.resetForm();
  };

  return (
    <FormFooter onSubmit={formik.handleSubmit}>
      <InputWrapper>
        <FormFooterInput
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email address"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.email}
          touched={formik.touched.email}
          required
          themeName={theme}
        />
        <EmailIconStyled errorformik={formik.errors.email} />
        {!formik.isValid ? (
          <ResetFormInput type="button" onClick={onClickResetButton}>
            <ErrorLogoStyled />
          </ResetFormInput>
        ) : (
          <SuccessLogoStyled />
        )}
        {formik.errors.email ? <Error>{formik.errors.email}</Error> : null}
      </InputWrapper>

      <FormFooterBtn type="submit" disabled={!formik.isValid}>
        Subscribe
      </FormFooterBtn>
    </FormFooter>
  );
};
