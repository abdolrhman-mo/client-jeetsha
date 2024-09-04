'use client'

import { ROUTES } from "@/app/lib/constants/routes"
import CartItems from "@/app/ui/cart/cart-items"
import CustomLink from "@/app/ui/common/custom-link"
import Heading from "@/app/ui/common/heading"
import NavSearchResults from "@/app/ui/layout/nav/nav-search-results"
import { useAppSelector } from "@/redux/hooks"
import { RootState } from "@/redux/store"
import Link from "next/link"
import { useSelector } from "react-redux"

export default function Page({
    searchParams,
}: {
    searchParams: {
        query?: string
        page?: string
    }
}) {
    // const query = searchParams?.query || ''
    // const currentPage = Number(searchParams?.page) || 1
    
    const cartItems = useAppSelector(state => state.cart.items)
    const totalPrice = useAppSelector(state => state.cart.totalPrice)
    
    return (
        <>
            {/* <NavSearchResults query={query} currentPage={currentPage} /> */}
            <div className="w-5/6 mx-auto space-y-12">
                <div className="text-center">
                    <br />
                    <Heading level={2}>cart</Heading>
                    <Link
                        className="underline"
                        href={ROUTES.COLLECTIONS.ALL}
                    >
                        Continiue Shopping
                    </Link>
                </div>
                <div className="space-y-8">
                    <CartItems />
                </div>

                <div>
                    <p className="font-bold mx-auto w-fit">Total: {totalPrice}</p>
                </div>

                {Array.isArray(cartItems) && cartItems.length > 0 && (
                    <div className="text-center w-fit mx-auto">
                        <CustomLink href={ROUTES.CHECKOUT}>check out</CustomLink>
                    </div>
                )}
            </div>
        </>
    )
}