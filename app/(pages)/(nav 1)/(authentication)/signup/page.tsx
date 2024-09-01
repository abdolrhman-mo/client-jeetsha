'use client'

import Link from "next/link"
import NavSearchResults from "@/app/ui/layout/nav/nav-search-results"
import Input from "@/app/ui/forms/input"
import { useState } from "react"
import { signupAPI } from "@/app/lib/services/authService" // Assuming you have this API function
import { abdoRedirect, redirectHome } from "@/app/lib/actions"
import { addToCartAPI } from "@/app/lib/services/cartService"
import { setCartItems } from "@/redux/features/cart/cartSlice"
import { useDispatch } from "react-redux"

export default function Page({
    searchParams
}: {
    searchParams: {
        query?: string
        page?: string
    }
}) {
    const dispatch = useDispatch()

    const query = searchParams?.query || ''
    const currentPage = Number(searchParams?.page) || 1

    // Form state
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState<string | null>(null)
    const [success, setSuccess] = useState<boolean>(false)

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setError(null) // Reset error before new submission

        try {
            // Call your signup API function
            await signupAPI(username, password)
            setSuccess(true)

            // Add cart items in localStorage to user's cart items on the server
            const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]')
            if (cartItems.length > 0) {
                for (const item of cartItems) {
                    await addToCartAPI(item.product.id, item.size)
                }
                dispatch(setCartItems(cartItems))
            }
                
            redirectHome()
        } catch (error: any) {
            if (error.message.includes('username already exists')) {
                setError('Username already exists!')
            } else {
                setError('Failed to create account. Please try again.')
            }
        }
    }

    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6">
            <NavSearchResults query={query} currentPage={currentPage} />
            <h2 className="text-3xl mx-auto w-fit mb-4">CREATE ACCOUNT</h2>
            
            {/* Form Inputs */}
            {/* <Input label="First Name" onChange={(e) => setFirstName(e.target.value)} /> */}
            {/* <Input label="Last Name" onChange={(e) => setLastName(e.target.value)} /> */}
            {/* <Input label="Email" onChange={(e) => setEmail(e.target.value)} /> */}
            <Input label="Username" value={username} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)} />
            <Input label="Password" type="password" value={password} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} />
            
            {/* Display success or error messages */}
            {success && <p className="text-green-500 mb-4">Account created successfully!</p>}
            {error && <p className="text-red-500 mb-4">{error}</p>}
            
            {/* Submit Button */}
            <input className="bg-black text-white py-2 w-full cursor-pointer mt-4" type="submit" value="CREATE" />
            
            {/* Link to Login Page */}
            <Link className="block py-2 w-full text-center cursor-pointer mt-4 text-blue-500 hover:underline" href={'/login'}>
                Already have an account?
            </Link>
        </form>
    )
}
