'use client'

import { useFormik } from 'formik'
import { userLoginSchema } from "@/app/lib/validation/userValidation"
import { useAppDispatch } from "@/redux/store"
import Link from "next/link"
import Input from "@/app/ui/forms/components/input"
import Heading from "@/app/ui/common/heading"
import { auth } from '@/redux/features/auth/authThunk'
import { ROUTES } from '@/app/lib/constants/routes'

export default function Page({
    searchParams,
}: {
    searchParams: {
        query?: string
        page?: string
    }
}) {
    const dispatch = useAppDispatch()

    // const query = searchParams?.query || ''
    // const currentPage = Number(searchParams?.page) || 1

    const formik = useFormik({
      initialValues: {
        email: '',
        password: '',
      },
      validationSchema: userLoginSchema,
      onSubmit: async (values) => {
        const { email, password } = values

        // Dispatch authentication action
        dispatch(auth({ email, password, newUser: false }))
      }
    })

    return (
      <>
        {/* <NavSearchResults query={query} currentPage={currentPage} /> */}
        <form onSubmit={formik.handleSubmit} noValidate className="max-w-md p-4">
          <Heading level={2} className="mx-auto w-fit">Login</Heading>
          
          {/* Form Inputs  */}
          <Input 
            label={'email'} 
            type='email'
            name='email'
            value={formik.values.email}
            onChange={formik.handleChange} 
            onBlur={formik.handleBlur}
            error={formik.touched.email && formik.errors.email} 
            className="w-full" 
          />
          <Input 
            label={'password'}
            type='password' 
            name='password'
            value={formik.values.password}
            onChange={formik.handleChange} 
            onBlur={formik.handleBlur}
            error={formik.touched.password && formik.errors.password} 
            className="w-full" 
          />
          
          {/* Submit Button  */}
          <Input type="submit" value={'log in'} />

          {/* Links  */}
          <div className="space-y-4 pt-4">
            {/* <Link className="block pt-2 w-full text-center cursor-pointer" href="/forgot-password">
              Forgot password?
            </Link> */}
            <Link className="block w-full text-center cursor-pointer" href={ROUTES.SIGNUP}>
              Create account
            </Link>
            <Link className="block w-full text-center cursor-pointer" href={ROUTES.HOME}>
              Return to store
            </Link>
          </div>
        </form>
      </>
    )
}