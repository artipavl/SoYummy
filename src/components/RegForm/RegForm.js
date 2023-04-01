import { Formik } from 'formik';

import authValidationSchema from 'utils/authValidationSchema';
import formMessageStyles from 'utils/formMessageStyles';

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

const RegForm = () => {
  const onSubmit = values => {
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={authValidationSchema}
      onSubmit={onSubmit}
    >
      {({ handleSubmit, getFieldProps, touched, errors }) => (
        <Wrapper>
          <SignUpLogo src={orderIcon} alt="Sign up logo"></SignUpLogo>

          <Form onSubmit={handleSubmit} isRegForm>
            <FormTitle>Registration</FormTitle>

            <AuthFormInput
              name="name"
              type="text"
              placeholder="Name"
              {...getFieldProps('name')}
            />
            {errors.name && touched.name && (
              <div style={{ ...formMessageStyles.message.warning }}>
                {errors.name}
              </div>
            )}

            <AuthFormInput
              name="email"
              type="email"
              placeholder="Email"
              {...getFieldProps('email')}
            />
            {errors.email && touched.email && (
              <div style={{ ...formMessageStyles.message.warning }}>
                {errors.email}
              </div>
            )}

            <AuthFormInput
              name="password"
              type="password"
              placeholder="Password"
              {...getFieldProps('password')}
            />
            {errors.password && touched.password && (
              <div style={{ ...formMessageStyles.message.warning }}>
                {errors.password}
              </div>
            )}

            <FormBtn type="submit">Sign up</FormBtn>
          </Form>

          <FormNavLink to="/signin">Sign In</FormNavLink>
        </Wrapper>
      )}
    </Formik>
  );
};

export default RegForm;
