'use client'

import { useFormik } from "formik"
import { useAppDispatch } from "@/redux/store"
import { useAppSelector } from "@/redux/hooks"
import Link from "next/link"
import Input from "@/app/ui/forms/components/input"
import Heading from "@/app/ui/common/heading"
import { userSignupSchema } from "@/app/lib/validation/userValidation"
import { auth } from "@/redux/features/auth/authThunk"
import { ROUTES } from "@/app/lib/constants/routes"

export default function Page({
  searchParams
}: {
  searchParams: {
    query?: string
    page?: string
  }
}) {
  const dispatch = useAppDispatch()
  const status = useAppSelector(state => state.cart.status)
  const error = useAppSelector(state => state.cart.error)

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: ''
    },
    validationSchema: userSignupSchema,
    onSubmit: async (values) => {
      const { 
        firstName,
        lastName,
        email, 
        password, 
      } = values

      // Dispatch authentication action
      dispatch(auth({ firstName, lastName, email, password, newUser: true }))
    }
  })

  return (
    <>
      {/* <NavSearchResults query={query} currentPage={currentPage} /> */}
      <form onSubmit={formik.handleSubmit} noValidate className="max-w-md p-4">
        <Heading level={2} className="mx-auto w-fit">Create Account</Heading>
        
        {/* Display overall error message */}
        {error && <div className="bg-red-100 border border-red-500 text-red-700 p-3 rounded mb-4">{error}</div>}
        
        {/* Form Inputs */}
        <Input
          label="first name"
          type="text"
          name="firstName"
          value={formik.values.firstName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.firstName && formik.errors.firstName}
        />
        <Input
          label="last name"
          type="text"
          name="lastName"
          value={formik.values.lastName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.lastName && formik.errors.lastName}
        />
        <Input
          label="Email"
          type="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && formik.errors.email}
        />
        <Input
          label="Password"
          type="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.password && formik.errors.password}
        />
        
        {/* Display success message */}
        {/* {status === 'idle' && <p className="text-green-500 mb-4">Account created successfully!</p>} */}
        
        {/* Submit Button */}
        <Input type="submit" value={'Create'} />

        {/* Links */}
        <div className="space-y-4 pt-4">
          <Link className="block w-full text-center cursor-pointer" href={ROUTES.LOGIN}>
            Already have an account?
          </Link>
          <Link className="block w-full text-center cursor-pointer" href={ROUTES.HOME}>
            Return to store
          </Link>
        </div>
      </form>
    </>
  )
}
