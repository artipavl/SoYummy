import { selectUserEmail } from 'redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { subscribeUser } from 'redux/authOperations';
//
import { useFormik } from 'formik';
import * as yup from 'yup';
//
import notiflix from "notiflix";

import { FormFooter, FormFooterInput, FormFooterBtn, Error, InputWrapper } from "./FooterForm.styled"

export const FooterForm = () => {

const dispatch = useDispatch();
const userEmail = useSelector(selectUserEmail);

const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

const validationSchema = yup.object().shape({
  email: yup.string()
    .matches(emailRegex, 'Invalid email address')
    .required('Email is required'),
});

  const formik = useFormik({
  initialValues: {
  email: userEmail || ''
},
  validationSchema,
    onSubmit: (values) => {
      dispatch(subscribeUser({ email: values.email }))
        .then((rejected) => {
          console.log(rejected.payload)
          if (rejected.payload === 'Request failed with status code 404') {
            return notiflix.Notify.warning('It`s not yours Email');
          }
          if (rejected.payload === 'Request failed with status code 400') {
             return notiflix.Notify.warning('Is allready Subscribe');
          }
          notiflix.Notify.success('Subscribed Successful');
    }).catch((error) => {
      console.log(error);
      notiflix.Notify.failure('Error subscribing');
    });
    },
    validate: (values) => {
      const errors = {};
      if (!values.email) {
        errors.email = 'Required';
      } else if (!emailRegex.test(values.email)) {
        errors.email = 'Invalid email address';
      }
      return errors;
    },
  });

  return (
    <FormFooter onSubmit={formik.handleSubmit}>
      <InputWrapper>
      <FormFooterInput
        type="email"
        id="email"
        name="email"
        placeholder='Enter your email address'
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.errors.email}
          // touched={formik.touched.email}
        touched={formik.errors.email}
        required

        />
        {/* <EmailIconStyled/> */}
        </InputWrapper>
      {formik.touched.email && formik.errors.email ? (
        <Error>{formik.errors.email}</Error>
      ) : null}
      <FormFooterBtn type="submit" disabled={!formik.isValid}>Subscribe</FormFooterBtn>


    </FormFooter>


  );
}

// import { useFormik } from 'formik';
// import styled from 'styled-components';
// const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

// const Form = styled.form`
//   display: flex;
//   flex-direction: column;
//   align-items: flex-start;
// `;

// const Label = styled.label`
//   margin-bottom: 0.5rem;
// `;

// const Input = styled.input`
//   padding: 0.5rem;
//   border: 1px solid ${({ error }) => (error ? 'red' : '#ccc')};
// `;

// const Error = styled.div`
//   color: red;
//   font-size: 0.8rem;
//   margin-top: 0.5rem;
// `;

// export const FooterForm = () => {
//   const formik = useFormik({
//     initialValues: { email: '' },
//     onSubmit: (values) => {
//       alert(`Email submitted: ${values.email}`);
//     },
//     validate: (values) => {
//       const errors = {};
//       if (!values.email) {
//         errors.email = 'Required';
//       } else if (!emailRegex.test(values.email)) {
//         errors.email = 'Invalid email address';
//       }
//       return errors;
//     },
//   });

//   return (
//     <Form onSubmit={formik.handleSubmit}>
//       <Label htmlFor="email">Email</Label>
//       <Input
//         id="email"
//         name="email"
//         type="email"
//         onChange={formik.handleChange}
//         onBlur={formik.handleBlur}
//         value={formik.values.email}
//         error={formik.touched.email && formik.errors.email}
//       />
//       {formik.touched.email && formik.errors.email ? (
//         <Error>{formik.errors.email}</Error>
//       ) : null}
//       <button type="submit">Submit</button>
//     </Form>
//   );
// }


