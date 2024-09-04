'use client'

import Link from "next/link"
import Heading from "@/app/ui/common/heading"
import { logout } from "@/redux/features/auth/authThunk"
import UserOrdersList from "@/app/ui/account/orders/user-orders-list"
import { ROUTES } from "@/app/lib/constants/routes"

export default function Page() {
    let handleLogout = () => {
      logout()
    }

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
                        <p>{localStorage.getItem('email')}</p>
                        <Link 
                            className="text-[#A56600] hover:text-black transition-all ease-in-out duration-300" 
                            href={ROUTES.ACCOUNT_ADDRESSES}
                        >
                            View Addresses
                        </Link>
                        <br />
                        <br />
                    </div>
                    <div className="col-span-1 md:col-span-2">
                        <Heading level={4}>order history</Heading>
                        <UserOrdersList />
                    </div>
                </div>
            </div>
        </>
    )
}