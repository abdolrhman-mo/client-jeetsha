'use client'

import { cartItems } from "@/app/lib/placeholder-data";
import CartItems from "@/app/ui/cart/cart-items";
import CTA from "@/app/ui/components/cta";
import H2 from "@/app/ui/components/H2";
import NavSearchResults from "@/app/ui/components/nav/nav-search-results";
import Link from "next/link";

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
    
    return (
        <>
            <NavSearchResults query={query} currentPage={currentPage} />
            <div className="w-5/6 mx-auto space-y-12">
                <div className="text-center">
                    <H2 text="CART" styles="mb-2" />
                    <Link 
                        className="underline"
                        href='/collections/all'
                        >
                        Continiue Shopping
                    </Link>
                </div>
                <div className="space-y-8">
                    <CartItems items={cartItems} />
                </div>
                <div className="text-center">
                    <CTA text='CHECK OUT' href="/checkout" styles="max-w-48" />
                </div>
            </div>
        </>
    )
}