'use client'

import H2 from "@/app/ui/components/H2"
import H4 from "@/app/ui/components/h4"
import Link from "next/link"
import { useDispatch } from "react-redux"
import { clearUser } from "@/lib/features/user/userSlice"
import { redirectHome } from "@/app/lib/actions"

export default function Page() {
    const dispatch = useDispatch()

    let handleLogout = () => {
        localStorage.removeItem('authToken')
        localStorage.removeItem('username')
        dispatch(clearUser())
        redirectHome()
    }

    return (
        <div className="w-5/6 mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3">
                <H2 text="hello, abdo" />
                <div className="col-span-1">
                    <H4 text="account details" />
                    <p>abdo</p>
                    <p>abdelrhmanlearn@gmail.com</p>
                    <Link href={'/account/addresses'}>View Addresses</Link>
                    <br />
                    <br />
                    <button onClick={handleLogout}>Logout</button>
                </div>
                <div className="col-span-2">
                    <H4 text="order history" />
                    <p>You haven't placed any orders yet.</p>
                </div>
            </div>
        </div>
    )
}