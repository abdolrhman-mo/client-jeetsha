import * as yup from 'yup'

export const checkoutSchema = yup.object().shape({
  address: yup.object().shape({
    country: yup.string()
      .notRequired(),
      // .required("Country is required."),
    city: yup.string()
      .required("City is required."),
    address_text: yup.string()
      .required("Address is required."),
  }),
  user: yup.object().shape({
    phone_number: yup.string()
      .matches(/^0?[1-9][0-9]{9,10}$/, "Write a valid phone number.")
      .required("Phone number is required."),
    first_name: yup.string()
      .required("First Name is required."),
    last_name: yup.string()
      .required("Last Name is required."),
  })
})