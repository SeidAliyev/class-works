
 import React from 'react';
 import { Formik, Form, Field } from 'formik';
 import * as Yup from 'yup';
 
 const SignupSchema = Yup.object().shape({
   firstName: Yup.string()
     .min(4, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
   age: Yup.number()
     .positive()
     .required('Required'),
   email: Yup.string().email('Invalid email').required('Required'),
 });
 
 export const ValidationSchemaExample = () => (
   <div>
     <h1>Signup</h1>
     <Formik
       initialValues={{
         firstName: '',
         age: '',
         email: '',
       }}
       validationSchema={SignupSchema}
       onSubmit={values => {
         // same shape as initial values
         console.log(values);
       }}
     >
       {({ errors, touched }) => (
         <Form>
           <Field name="firstName" />
           {errors.firstName && touched.firstName ? (
             <div>{errors.firstName}</div>
            ) : null}
           <Field name="email" type="email" />
           {errors.email && touched.email ? <div>{errors.email}</div> : null}
           <Field name="age" />
            {errors.age && touched.age ? (
              <div>{errors.lastName}</div>
            ) : null}
           <button type="submit">Submit</button>
         </Form>
       )}
     </Formik>
   </div>
 )

 export default ValidationSchemaExample