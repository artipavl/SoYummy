import * as Yup from 'yup';

import { nameRegExp, emailRegExp, passwordRegExp } from './regExp';

const authValidationSchema = Yup.object({
  name: Yup.string().matches(nameRegExp, 'Name must contain only letters'),
  email: Yup.string().matches(emailRegExp, 'Invalid email address'),
  password: Yup.string().matches(
    passwordRegExp,
    'Your password is little secure'
  ),
});

export default authValidationSchema;
