import * as Yup from 'yup';

import { nameRegExp, emailRegExp, passwordRegExp } from './regExp';

const authValidationSchema = Yup.object({
  name: Yup.string().matches(nameRegExp, 'Name must contain only letters'),
  email: Yup.string().matches(emailRegExp, 'Invalid email address'),
  password: Yup.string()
    .test('isValid', 'Your password is little secure', value => {
      if (!value) {
        return true;
      }

      return value.length >= 8;
    })
    .test('isSecured', 'Enter a valid Password', value => {
      if (!value) {
        return true;
      }

      return passwordRegExp.test(value);
    }),
});

export default authValidationSchema;
