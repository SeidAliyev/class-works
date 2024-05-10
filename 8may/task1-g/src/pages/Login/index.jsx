import React from 'react';
import { useState } from 'react';
import { getAllData } from '../../services/requests';
import { useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  userName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required'),
  password: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Required')
});

const Login = () => {
  const navigate = useNavigate();
  const [loginError, setLoginError] = useState('');

  return (
    <div className="flex pt-24 items-center justify-center">
  <div className="relative flex flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
    <h4 className="block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
      Sign Up
    </h4>
    <p className="mt-1 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
      Enter your details to register.
    </p>
    <Formik
      initialValues={{ userName: '', password: '' }}
      validationSchema={SignupSchema}
      onSubmit={(values, { setSubmitting }) => {
        getAllData('/users/')
          .then(res => {
            const loginUser = res.find(
              elem => elem.userName === values.userName && elem.password === values.password
            );
            if (loginUser) {
              console.log('Welcome');
              localStorage.setItem('loginUser', JSON.stringify(loginUser));
              navigate('/');
            } else {
              setLoginError('Invalid username or password');
            }
            setSubmitting(false);
          })
          .catch(error => {
            console.error('Error:', error);
            setSubmitting(false);
          });
      }}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
          <div className="mb-4 flex flex-col gap-6">
            <div className="relative h-11 w-full min-w-[200px]">
              <Field
                name="userName"
                className={
                  'peer h-full w-full rounded-md border ' +
                  (errors.userName && touched.userName ? 'border-red-500 ' : 'border-blue-gray-200 ') +
                  'bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50'
                }
                placeholder=" "
              />
              <ErrorMessage name="userName" component="div" className="text-red-500 text-sm" />
              <label className="...">User Name</label>
            </div>

            <div className="relative h-11 w-full min-w-[200px]">
              <Field
                type="password"
                name="password"
                className={
                  'peer h-full w-full rounded-md border ' +
                  (errors.password && touched.password ? 'border-red-500 ' : 'border-blue-gray-200 ') +
                  'bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50'
                }
                placeholder=" "
              />
              <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
              <label className="...">Password</label>
            </div>
          </div>
          {loginError && <div className="text-red-500 text-sm">{loginError}</div>}
          <button
            className="mt-6 block w-full select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="submit"
          >
            {isSubmitting ? 'Submitting...' : 'Sign In'}
          </button>
          <p className="mt-4 block text-center font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
            Don't have an account?
            <a
              onClick={() => navigate('/register')}
              className="font-semibold text-pink-500 transition-colors hover:text-blue-700"
              href="#"
            >
              Sign Up
            </a>
          </p>
        </Form>
      )}
    </Formik>
    </div>
    </div>
  );
};

export default Login;
