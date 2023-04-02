import { Formik } from 'formik';

import authValidationSchema from 'utils/authValidationSchema';
import formStyles from 'utils/formStyles';

import orderIcon from '../../images/icons/order-food-pana.svg';

import AuthFormInput from 'components/AuthFormInput';

import { useDispatch } from 'react-redux';

import { register } from 'redux/authOperations';

import {
  Wrapper,
  SignUpLogo,
  Form,
  FormTitle,
  FormBtn,
  FormNavLink,
} from '../../utils/CombinedFormStyles.styled';

const RegForm = () => {
  const dispatch = useDispatch();

  const onSubmit = values => {
    dispatch(register(values));
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

          <Form onSubmit={handleSubmit}>
            <FormTitle>Registration</FormTitle>

            <AuthFormInput
              error={errors.name}
              touched={touched.name}
              name="name"
              type="text"
              placeholder="Name"
              {...getFieldProps('name')}
            />
            {errors.name && touched.name && (
              <div style={{ ...formStyles.message.warning }}>{errors.name}</div>
            )}

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

            <AuthFormInput
              error={errors.password}
              touched={touched.password}
              name="password"
              type="password"
              placeholder="Password"
              {...getFieldProps('password')}
            />
            {errors.password && touched.password && (
              <div style={{ ...formStyles.message.warning }}>
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
