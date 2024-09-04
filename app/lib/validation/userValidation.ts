import * as Yup from 'yup'

export const userSignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .matches(/^[A-Za-z\s]+$/, 'First name can only contain letters and spaces')
    .required('First name is required'),

  lastName: Yup.string()
    .matches(/^[A-Za-z\s]+$/, 'Last name can only contain letters and spaces')
    .required('Last name is required'),

  email: Yup.string()
    .email('Invalid email address')
    .required('Email address is required'),

  password: Yup.string()
    .min(8, 'Password must be at least 8 characters long')
    .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
    .matches(/[0-9]/, 'Password must contain at least one number')
    .required('Password is required'),
})


export const userLoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email address is required'),

  password: Yup.string()
    .required('Password is required'),
})
