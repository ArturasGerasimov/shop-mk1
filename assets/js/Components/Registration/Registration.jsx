import * as React from 'react'
import NavigationBar from '../NavigationBar'
import * as Yup from 'yup'
import {Formik, Field, Form, ErrorMessage} from 'formik'
import userRegister from '../../services/user'

function handleSubmit(values) {
  userRegister(values)
}
export default function Registration() {

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required('Required'),
  });

  const initialValues = {
    username: '',
    lastName: '',
    password: '',
    email: '',
  }

  return (
    <>
      <NavigationBar />
      <h1>Register</h1>
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <Form>
          <label htmlFor="username">First Name</label>
          <Field id="username" name="username" placeholder="Jane" />
          <ErrorMessage name="username" component="span" />

          <label htmlFor="lastName">Last Name</label>
          <Field id="lastName" name="lastName" placeholder="Doe" />
          <ErrorMessage name="lastName" component="span" />

          <label htmlFor="password">password</label>
          <Field id="password" name="password" placeholder="Password" />
          <ErrorMessage name="password" component="span" />

          <label htmlFor="email">Email</label>
          <Field id="email" name="email" placeholder="jane@acme.com" type="email" />
          <ErrorMessage name="email" component="span" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  )
}