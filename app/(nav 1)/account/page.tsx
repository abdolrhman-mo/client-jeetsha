'use client'

import Link from "next/link"
import { redirectHome } from "@/app/lib/actions"
import Heading from "@/app/ui/common/heading"
import { useDispatch } from "react-redux"
import { clearCart } from "@/lib/features/cart/cartSlice"
import { useEffect, useState } from "react"
import { fetchOrdersAPI } from "@/app/lib/services/ordersService"
import MyOrders from "@/app/ui/account/my-orders"
import Button from "@/app/ui/common/button"

export default function Page() {
    const dispatch = useDispatch()

    let handleLogout = () => {
        localStorage.removeItem('authToken')
        localStorage.removeItem('username')
        dispatch(clearCart())
        redirectHome()
    }

    const [orderItems, setOrderItems] = useState<any[]>([])
    useEffect(() => {
        const getData = async () => {
            try {
                const orders = await fetchOrdersAPI()
                console.log(orders)
            } catch (error) {
                console.error('Failed to fetch orders:', error)
            }
        }
        getData()
    }, [])

    return (
        <>
            <div className="w-5/6 mx-auto mt-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="col-span-1 md:col-span-3 text-center mb-10">
                        <Heading level={2}>My Account</Heading>
                        <button onClick={handleLogout}>Logout</button>
                    </div>
                    <div className="col-span-1">
                        <Heading level={4}>account details</Heading>
                        <p>{localStorage.getItem('username')}</p>
                        <Link 
                            className="text-[#A56600] hover:text-black transition-all ease-in-out duration-300" 
                            href={'/account/addresses'}
                        >
                            View Addresses
                        </Link>
                        <br />
                        <br />
                    </div>
                    <div className="col-span-1 md:col-span-2">
                        <Heading level={4}>order history</Heading>
                        <MyOrders />
                    </div>
                </div>
            </div>
        </>
    )
}