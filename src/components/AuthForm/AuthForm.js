import { Formik } from 'formik';
import validationSchema from './validationSchema';

import orderIcon from '../../images/icons/order-food-pana.svg';

import {
  SignUpLogo,
  Form,
  FormTitle,
  FormValue,
  FormBtn,
} from './AuthForm.styled';

const AuthForm = () => {
  const onSubmit = values => {
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {formik => (
        <>
          <SignUpLogo src={orderIcon} alt="Sign up logo"></SignUpLogo>
          <Form onSubmit={formik.handleSubmit}>
            <FormTitle>Registration</FormTitle>

            <FormValue
              name="name"
              type="text"
              placeholder="Name"
              {...formik.getFieldProps('name')}
              value={formik.values.name}
            />

            {formik.touched.name && formik.errors.name ? (
              <div>{formik.errors.name}</div>
            ) : null}

            <FormValue
              name="email"
              type="email"
              placeholder="Email"
              {...formik.getFieldProps('email')}
              value={formik.values.email}
            />

            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null}

            <FormValue
              name="password"
              type="password"
              placeholder="Password"
              {...formik.getFieldProps('password')}
              value={formik.values.password}
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

export default AuthForm;
