'use client'

import CartItems from "@/app/ui/cart/cart-items"
import CustomLink from "@/app/ui/common/custom-link"
import Heading from "@/app/ui/common/heading"
import NavSearchResults from "@/app/ui/layout/nav/nav-search-results"
import { RootState } from "@/lib/store"
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
    const query = searchParams?.query || ''
    const currentPage = Number(searchParams?.page) || 1
    const cartItems = useSelector((state: RootState) => state.cart.items)
    
    return (
        <>
            <NavSearchResults query={query} currentPage={currentPage} />
            <div className="w-5/6 mx-auto space-y-12">
                <div className="text-center">
                    <br />
                    <Heading level={2}>cart</Heading>
                    <Link
                        className="underline"
                        href='/collections/all'
                    >
                        Continiue Shopping
                    </Link>
                </div>
                <div className="space-y-8">
                    <CartItems />
                </div>

                {cartItems.length > 0 && (
                    <div className="text-center w-fit mx-auto">
                        <CustomLink href="/checkout">check out</CustomLink>
                    </div>
                )}
            </div>
        </>
    )
}