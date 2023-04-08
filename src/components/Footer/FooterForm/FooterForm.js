// import { useState } from 'react';
import { selectUserEmail } from 'redux/selectors';
import { useSelector, useDispatch } from 'react-redux';
import { subscribeUser } from 'redux/authOperations';
//
import { useFormik } from 'formik';
import * as yup from 'yup';
//

import notiflix from "notiflix";

import { FormFooter, FormFooterInput, FormFooterBtn } from "./FooterForm.styled"

export const FooterForm = () => {
const dispatch = useDispatch();
const userEmail = useSelector(selectUserEmail);
// const isUserSubscribed = useSelector(selectorIsSubscribe);

const validationSchema = yup.object().shape({
email: yup.string()
    .required('Email is required')

});

const formik = useFormik({
initialValues: {
email: userEmail || ''
},
validationSchema,
onSubmit: (values) => {
console.log(values.email)
dispatch(subscribeUser({ email: values.email }))
.then(() => {
notiflix.Notify.success('Subscribed Successful');
}).catch((error) => {
console.log(error);
notiflix.Notify.failure('Error subscribing');
});
},
});

  return (
    <FormFooter onSubmit={formik.handleSubmit}>
      <FormFooterInput
        type="email"
        id="email"
        name="email"
        placeholder='Enter your email address'
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        required
      />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}
      <FormFooterBtn type="submit">Subscribe</FormFooterBtn>
    </FormFooter>
  );
}


