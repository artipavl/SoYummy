import { Formik } from 'formik';
import authValidationSchema from 'utils/authValidationSchema';

import orderIcon from '../../images/icons/order-food-pana.svg';

import AuthFormInput from 'components/AuthFormInput';

import {
  SignUpLogo,
  Form,
  FormTitle,
  FormBtn,
} from '../../utils/CombinedFormStyles.styled';

const RegForm = () => {
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
        <>
          <SignUpLogo src={orderIcon} alt="Sign up logo"></SignUpLogo>
          <Form onSubmit={formik.handleSubmit} isRegForm>
            <FormTitle>Registration</FormTitle>

            <AuthFormInput
              name="name"
              type="text"
              placeholder="Name"
              {...formik.getFieldProps('name')}
            />

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
        </>
      )}
    </Formik>
  );
};

export default RegForm;
