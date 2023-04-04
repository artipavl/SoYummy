import * as Yup from 'yup';

import {
  nameRegExp,
  emailRegExp,
  notSecurePasswordRegExp,
  securePasswordRegExp,
} from './regExp';

const authValidationSchema = Yup.object({
  name: Yup.string().matches(nameRegExp, 'Name must contain only letters'),
  email: Yup.string().matches(emailRegExp, 'Invalid email address'),
  password: Yup.string()
    .matches(notSecurePasswordRegExp, 'Enter a valid Password')
    .test('isNotSecure', 'Your password is little secure', value => {
      if (!value) {
        return true;
      }

      return securePasswordRegExp.test(value);
    })

    .test('isSecure', 'Password is secure', value => {
      if (!value) {
        return true;
      }

      return notSecurePasswordRegExp.test(value);
    }),
});

export default authValidationSchema;
