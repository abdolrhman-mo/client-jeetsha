'use client'

import Link from "next/link"
import NavSearchResults from "@/app/ui/layout/nav/nav-search-results"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/lib/store"
import { toggleLoggedIn } from "@/lib/features/user/userSlice"
import { redirectHome } from "@/app/lib/actions"
import { addItem } from "@/lib/features/cart/cartSlice"
import { addToCartAPI } from "@/app/lib/services/cartService"

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
        const formData = {
            username: username,
            password: password,
        }
        const res = await fetch('http://127.0.0.1:8000/api-auth/login/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        })
        const data = await res.json()
        localStorage.setItem('authToken', data.user.token)
        localStorage.setItem('username', data.user.username)
        localStorage.setItem('userId', data.user.id)

        console.log('token', data.user.token)
        console.log('user', data.user.user)
        if (res.ok) {
            // Add cart items in localStorage to user's cart items on the server
            const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]')
            for (const item of cartItems) {
                await addToCartAPI(item.product.id, quantity)
                dispatch(addItem({
                    id: null,
                    product: item.product,
                    quantity,
                }))
            }

            redirectHome()
        } else {
            console.log('my login failed: ', data)
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