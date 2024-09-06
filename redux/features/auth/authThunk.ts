import { redirectHome } from "@/app/lib/actions"
import { loginAPI, signupAPI } from "@/app/lib/services/auth/authService"
import { syncCartWithServerAPI } from "@/app/lib/services/cartService"
import { createAsyncThunk } from "@reduxjs/toolkit"

export const auth = createAsyncThunk('auth/auth', async (
  { 
    firstName,
    lastName,
    email, 
    password, 
    newUser 
  }: { 
    firstName?: string
    lastName?: string
    email: string
    password: string 
    newUser: boolean 
  },
  { dispatch }
) => {
  try {
      if (newUser && firstName && lastName) {
          await signupAPI(firstName, lastName, email, password)
      } else {
          await loginAPI(email, password)
      }
      const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]')
      if (cartItems.length > 0) {
          await syncCartWithServerAPI(cartItems)
      }
      localStorage.removeItem('cartItems')
      
      redirectHome()
      
      return { cartItems, error: null }
  } catch (error: any) {
       console.log(error.message)
      if (error.message.includes('email already exists')) {
          return { cartItems: null, error: 'Email already exists!' }
      } else {
          return { cartItems: null, error: 'Failed to create account. Please try again.' }
      }
  }
})

export const logout = createAsyncThunk('auth/logout', async () => {

  if (typeof window !== 'undefined') {
    localStorage.removeItem('authToken')
    localStorage.removeItem('email')
  }

  redirectHome()
})