import { Formik } from 'formik';

import { useDispatch, useSelector } from 'react-redux';

import { registerValidationSchema } from 'utils/authValidationSchema';
import formStyles from 'utils/formStyles';

import orderIcon from '../../images/icons/order-food-pana.svg';

import AuthFormInput from 'components/AuthFormInput';
import Password from './Password';

import ButtonLoader from 'components/ButtonLoader';

import { selectAuthIsLoading } from 'redux/selectors';

import { register, login } from 'redux/authOperations';

import { FormValueContainer } from './CombinedFormStyles.styled';

import { Name, Email } from './CombinedFormStyles.styled';

import {
  Wrapper,
  SignUpLogo,
  Form,
  FormTitle,
  FormBtn,
  FormNavLink,
} from './CombinedFormStyles.styled';

const RegForm = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAuthIsLoading);

  const onSubmit = values => {
    dispatch(register(values))
      .then(() => dispatch(login(values)))
      .catch(error => error);
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={registerValidationSchema}
      onSubmit={onSubmit}
    >
      {({ handleSubmit, getFieldProps, touched, errors, value }) => {
        return (
          <Wrapper>
            <SignUpLogo src={orderIcon} alt="Sign up gear"></SignUpLogo>

            <div>
              <Form onSubmit={handleSubmit}>
                <FormTitle>Registration</FormTitle>

                <FormValueContainer
                  error={errors.name}
                  touched={touched.name}
                  value={value}
                >
                  <AuthFormInput
                    error={errors.name}
                    touched={touched.name}
                    name="name"
                    type="text"
                    placeholder="Name"
                    {...getFieldProps('name')}
                  />
                  <Name stroke="red" />
                </FormValueContainer>

                {errors.name && touched.name && (
                  <div style={{ ...formStyles.message.error }}>
                    {errors.name}
                  </div>
                )}

                <FormValueContainer
                  error={errors.email}
                  touched={touched.email}
                  value={value}
                >
                  <AuthFormInput
                    error={errors.email}
                    touched={touched.email}
                    name="email"
                    type="email"
                    placeholder="Email"
                    {...getFieldProps('email')}
                  />
                  <Email />
                </FormValueContainer>

                {errors.email && touched.email && (
                  <div style={{ ...formStyles.message.error }}>
                    {errors.email}
                  </div>
                )}

                <Password />

                <FormBtn type="submit">
                  {isLoading ? <ButtonLoader /> : 'Sign up'}
                </FormBtn>
              </Form>
              <FormNavLink to="/signin">Sign In</FormNavLink>
            </div>
          </Wrapper>
        );
      }}
    </Formik>
  );
};

export default RegForm;
