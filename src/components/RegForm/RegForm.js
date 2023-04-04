import { Formik } from 'formik';

import { useDispatch } from 'react-redux';

import authValidationSchema from 'utils/authValidationSchema';
import formStyles from 'utils/formStyles';

import orderIcon from '../../images/icons/order-food-pana.svg';

import AuthFormInput from 'components/AuthFormInput';
import Password from './Password';

import { register, login } from 'redux/authOperations';

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
    dispatch(register(values))
      .then(() => dispatch(login(values)))
      .catch(error => console.log(error));
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={authValidationSchema}
      onSubmit={onSubmit}
    >
      {({ handleSubmit, getFieldProps, touched, errors }) => {
        return (
          <Wrapper>
            <SignUpLogo src={orderIcon} alt="Sign up gear"></SignUpLogo>

            <div>
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
                  <div style={{ ...formStyles.message.error }}>
                    {errors.name}
                  </div>
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
                  <div style={{ ...formStyles.message.error }}>
                    {errors.email}
                  </div>
                )}

                <Password />

                <FormBtn type="submit">Sign up</FormBtn>
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
