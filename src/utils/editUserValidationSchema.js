import * as Yup from 'yup';

import { nameRegExp } from './regExp';

export const editUserValidationSchema =
Yup.object({
  name: Yup.string()
    .required('Name is required')
    .min(nameRegExp, 'Name must be at least 2 characters'),
  avatar: Yup.mixed()
    .test('fileFormat', 'Only JPG, JPEG, and PNG files are allowed.', (value) => {
      if (value && value.name) {
        return ['image/jpeg', 'image/png', 'image/jpg'].includes(value.type);
      }
      return true;
    }),
});

