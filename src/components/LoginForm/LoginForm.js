import { Formik } from 'formik';

import { loginValidationSchema } from 'utils/authValidationSchema';
import formStyles from 'utils/formStyles';

import orderIcon from '../../images/icons/order-food-pana.svg';

import AuthFormInput from 'components/AuthFormInput';
import Password from 'components/RegForm/Password';

import { useDispatch, useSelector } from 'react-redux';

import { login, fetchAchievements } from 'redux/authOperations';
import { selectAuthIsLoading } from 'redux/selectors';

import ButtonLoader from 'components/ButtonLoader';

import {
  Wrapper,
  SignUpLogo,
  Form,
  FormTitle,
  FormBtn,
  FormNavLink,
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
          <Wrapper>
            <SignUpLogo src={orderIcon} alt="Sign in gear"></SignUpLogo>

            <div>
              <Form onSubmit={handleSubmit}>
                <FormTitle>Sign In</FormTitle>

                <AuthFormInput
                  error={errors.email}
                  touched={touched.email}
                  name="email"
                  type="email"
                  placeholder="Email"
                  {...getFieldProps('email')}
                />
                {errors.email && touched.email && (
                  <div style={{ ...formStyles.message.error }}>
                    {errors.email}
                  </div>
                )}

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
        );
      }}
    </Formik>
  );
};

export default LoginForm;
