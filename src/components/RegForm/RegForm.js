import { Formik } from 'formik';

import { ErrorMessage } from 'formik';

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
      {({ handleSubmit, getFieldProps, touched, errors }) => {
        return (
          <Wrapper>
            <SignUpLogo src={orderIcon} alt="Sign up gear"></SignUpLogo>

            <div>
              <Form onSubmit={handleSubmit}>
                <FormTitle>Registration</FormTitle>

                <FormValueContainer error={errors.name} touched={touched.name}>
                  <AuthFormInput
                    error={errors.name}
                    touched={touched.name}
                    name="name"
                    type="text"
                    placeholder="Name"
                    {...getFieldProps('name')}
                  />
                  <Name
                    style={{
                      stroke: errors.name
                        ? '#E74A3B'
                        : touched.name
                        ? '#3CBC81'
                        : '#FFFFFF',
                    }}
                  />
                </FormValueContainer>

                <ErrorMessage name="name" style={{ marginTop: '0' }}>
                  {msg => (
                    <div style={{ ...formStyles.message.error }}>{msg}</div>
                  )}
                </ErrorMessage>

                <FormValueContainer
                  error={errors.email}
                  touched={touched.email}
                >
                  <AuthFormInput
                    error={errors.email}
                    touched={touched.email}
                    name="email"
                    type="email"
                    placeholder="Email"
                    {...getFieldProps('email')}
                  />
                  <Email
                    style={{
                      stroke: errors.email
                        ? '#E74A3B'
                        : touched.email
                        ? '#3CBC81'
                        : '#FFFFFF',
                    }}
                  />
                </FormValueContainer>

                <ErrorMessage name="email" style={{ marginTop: '0' }}>
                  {msg => (
                    <div style={{ ...formStyles.message.error }}>{msg}</div>
                  )}
                </ErrorMessage>

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
