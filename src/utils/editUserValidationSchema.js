import * as yup from 'yup';

export const editUserValidationSchema = yup.object().shape({
  avatar: yup.mixed()
    .test('isUrlOrFile', 'Please upload an image', (value) => {
      if (!value) return false;
      if (typeof value === 'string') {
        return /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/gi.test(value);
      }
      return true;
    })
    .test('fileSize', 'The file is too large', (value) => {
      if (typeof value === 'string') return true;
      if (!value) return false;
      return value.size <= 5000000;
    })
    .test('fileType', 'Supported only jpeg, jpg, png', (value) => {
      if (typeof value === 'string') return true;
      if (!value) return false;
      return ['image/jpeg', 'image/png', 'image/jpg'].includes(value.type);
    }),
  name: yup.string()
    .required('Please enter your name')
    .min(2, 'Name must be at least 2 characters')
    .max(20, 'Name cannot be longer than 20 characters')
    .matches(/^[a-zA-Z\s]*$/, 'Name can only contain letters and spaces'),
});
