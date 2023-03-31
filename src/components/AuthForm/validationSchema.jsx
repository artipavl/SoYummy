import * as Yup from 'yup';

const validationSchema = Yup.object({
  name: Yup.string()
    .max(20, 'Must contain 20 characters or less')
    .required('Required'),
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string()
    .min(8, 'Must contain 8 or more characters')
    .max(20, 'Must be 20 characters or less')
    .required('Required'),
});

export default validationSchema;
