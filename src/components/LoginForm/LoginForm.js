import { ErrorMessage, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { login, fetchAchievements } from 'redux/authOperations';
import { selectAuthIsLoading } from 'redux/selectors';

import { loginValidationSchema } from 'utils/authValidationSchema';
import formStyles from 'utils/formStyles';

import AuthFormInput from 'components/AuthFormInput';
import Password from 'components/RegForm/Password';
import ButtonLoader from 'components/ButtonLoader';

import orderIcon from '../../images/icons/order-food-pana.svg';

import {
  PageWrapper,
  Wrapper,
  SignUpLogo,
  Form,
  FormTitle,
  FormBtn,
  FormNavLink,
  FormValueContainer,
  Email,
} from '../RegForm/CombinedFormStyles.styled';

const LoginForm = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(selectAuthIsLoading);

  const onSubmit = values => {
    dispatch(login(values)).then(() => dispatch(fetchAchievements()));
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={loginValidationSchema}
      onSubmit={onSubmit}
    >
      {({ handleSubmit, getFieldProps, touched, errors }) => {
        return (
          <PageWrapper>
            <Wrapper>
              <SignUpLogo src={orderIcon} alt="Sign in gear"></SignUpLogo>

              <div>
                <Form onSubmit={handleSubmit}>
                  <FormTitle>Sign In</FormTitle>

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
                    {isLoading ? <ButtonLoader /> : 'Sign In'}
                  </FormBtn>
                </Form>

                <FormNavLink to="/register">Registration</FormNavLink>
                <FormNavLink to="https://so-yummy-api.onrender.com/api/users/google">
                  Sign in with Google
                </FormNavLink>
              </div>
            </Wrapper>
          </PageWrapper>
        );
      }}
    </Formik>
  );
};

export default LoginForm;
