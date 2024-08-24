'use client'

import Link from "next/link"
import { redirectHome } from "@/app/lib/actions"
import Heading from "@/app/ui/common/heading"
import { useDispatch } from "react-redux"
import { clearCart } from "@/lib/features/cart/cartSlice"

export default function Page() {
    const dispatch = useDispatch()

    let handleLogout = () => {
        localStorage.removeItem('authToken')
        localStorage.removeItem('username')
        dispatch(clearCart())
        redirectHome()
    }

    return (
        <div className="w-5/6 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3">
                <Heading level={2}>hello, abdo</Heading>
                <div className="col-span-1">
                    <Heading level={4}>account details</Heading>
                    <p>abdo</p>
                    <p>abdelrhmanlearn@gmail.com</p>
                    <Link href={'/account/addresses'}>View Addresses</Link>
                    <br />
                    <br />
                    <button onClick={handleLogout}>Logout</button>
                </div>
                <div className="col-span-2">
                    <Heading level={4}>order history</Heading>
                    <p>You haven't placed any orders yet.</p>
                </div>
            </div>
        </div>
    )
}