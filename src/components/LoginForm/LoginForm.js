import { Formik } from 'formik';

import { loginValidationSchema } from 'utils/authValidationSchema';
import formStyles from 'utils/formStyles';

import orderIcon from '../../images/icons/order-food-pana.svg';

import AuthFormInput from 'components/AuthFormInput';
import Password from 'components/RegForm/Password';

import { useDispatch } from 'react-redux';

import { login } from 'redux/authOperations';

import {
  Wrapper,
  SignUpLogo,
  Form,
  FormTitle,
  FormBtn,
  FormNavLink,
} from '../../utils/CombinedFormStyles.styled';

const LoginForm = () => {
  const dispatch = useDispatch();

  const onSubmit = values => {
    dispatch(login(values));
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
                  <div style={{ ...formStyles.message.warning }}>
                    {errors.email}
                  </div>
                )}

                <Password />

                <FormBtn type="submit">Sign In</FormBtn>
              </Form>

              <FormNavLink to="/register">Registration</FormNavLink>
            </div>
          </Wrapper>
        );
      }}
    </Formik>
  );
};

export default LoginForm;
