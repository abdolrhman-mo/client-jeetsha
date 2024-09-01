'use client'

import Link from "next/link"
import NavSearchResults from "@/app/ui/layout/nav/nav-search-results"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { redirectHome } from "@/app/lib/actions"
import { setCartItems } from "@/redux/features/cart/cartSlice"
import { syncCartWithServer } from "@/app/lib/services/cartService"
import { loginAPI } from "@/app/lib/services/authService"

export default function Page({
    searchParams,
}: {
    searchParams: {
        query?: string
        page?: string
    }
}) {
    const dispatch = useDispatch()
    const query = searchParams?.query || ''
    const currentPage = Number(searchParams?.page) || 1
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    
    const quantity = 1 // default quantity

    let handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {
            await loginAPI(username, password)

            // Add cart items in localStorage to user's cart items on the server
            const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]')

            if (cartItems.length > 0) {
                await syncCartWithServer(cartItems)
                dispatch(setCartItems(cartItems))
            }
            localStorage.removeItem('cartItems')
                
            redirectHome()
        } catch (error) {
            console.log('Login failed:', error)
        }
    }

    return (
        <form className="space-y-6" onSubmit={handleSubmit}>
            <NavSearchResults query={query} currentPage={currentPage} />
            <h2 className="text-3xl mx-auto w-fit">LOGIN</h2>
            <div className="space-y-2">
                <p className="uppercase">username</p>
                <input onChange={e => setUsername(e.target.value)} className="w-full" type='text' />
            </div>
            <div className="space-y-2">
                <p className="uppercase">password</p>
                <input onChange={e => setPassword(e.target.value)} className="w-full" type='password' />
            </div>
            <Link
                className="block"
                href="/forgot-password"
            >
                Forgot password?
            </Link>
            <input className="bg-black text-white py-2 w-full cursor-pointer" type="submit" value="LOG IN" />
            <Link className="block py-2 w-full text-center cursor-pointer" href={'/signup'}>Create account</Link>
        </form>
    )
}