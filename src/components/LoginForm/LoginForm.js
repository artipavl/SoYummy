import { Formik } from 'formik';
import authValidationSchema from 'utils/authValidationSchema';

import orderIcon from '../../images/icons/order-food-pana.svg';

import AuthFormInput from 'components/AuthFormInput';

import {
  Wrapper,
  SignUpLogo,
  Form,
  FormTitle,
  FormBtn,
  FormNavLink,
} from '../../utils/CombinedFormStyles.styled';

const LoginForm = () => {
  const onSubmit = values => {
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      authValidationSchema={authValidationSchema}
      onSubmit={onSubmit}
    >
      {formik => (
        <Wrapper>
          <SignUpLogo src={orderIcon} alt="Sign up logo"></SignUpLogo>

          <Form onSubmit={formik.handleSubmit}>
            <FormTitle>Sign In</FormTitle>

            <AuthFormInput
              name="email"
              type="email"
              placeholder="Email"
              {...formik.getFieldProps('email')}
            />

            <AuthFormInput
              name="password"
              type="password"
              placeholder="Password"
              {...formik.getFieldProps('password')}
            />

            {formik.touched.password && formik.errors.password ? (
              <div>{formik.errors.password}</div>
            ) : null}
            <FormBtn type="submit">Sign up</FormBtn>
          </Form>

          <FormNavLink to="/register">Registration</FormNavLink>
        </Wrapper>
      )}
    </Formik>
  );
};

export default LoginForm;
