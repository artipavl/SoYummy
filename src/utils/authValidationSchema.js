import * as Yup from 'yup';

import { nameRegExp, emailRegExp, passwordRegExp } from './regExp';

const authValidationSchema = Yup.object({
  name: Yup.string()
    .matches(nameRegExp, 'Name must contain only letters')
    .required('Required'),
  email: Yup.string()
    .matches(emailRegExp, 'Invalid email address')
    .required('Required'),
  password: Yup.string()
    .matches(passwordRegExp, 'Your password is little secure')
    .required('Required'),
});

export default authValidationSchema;
