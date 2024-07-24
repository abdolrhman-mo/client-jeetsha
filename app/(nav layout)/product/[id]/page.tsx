'use client'

import { products } from "@/app/lib/placeholder-data"
import CTA from "@/app/ui/components/cta"
import H2 from "@/app/ui/components/H2"
import NavSearchResults from "@/app/ui/components/nav/nav-search-results"
import ProductsList from "@/app/ui/components/products-list"
import SizeRadio from "@/app/ui/product/size-radio"
import Image from "next/image"

export default function Page({
    params,
    searchParams,
}: {
    params: {id: number}
    searchParams?: {
        query?: string
        page?: string
    }
}) {
    const product = products[(params.id) - 1]
    const query = searchParams?.query || ''
    const currentPage = Number(searchParams?.page) || 1

    return (
        <>
            {/* Nav Search Results */}
            <NavSearchResults query={query} currentPage={currentPage} />

            <div className="w-5/6 mx-auto pt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="flex justify-center w-full">
                    <Image
                        className="max-w-96"
                        src={product.image_url}
                        alt={product.name}
                        width={500}
                        height={500}
                    />
                </div>
                <div className="space-y-4">
                    <H2 text="green washed hoodie" styles="" />
                    <div className="flex space-x-4">
                        <p className="line-through">1300.00 EGP</p>
                        <p>{product.price} EGP</p>
                        <p className="text-red-500">Save 300.00 EGP</p>
                    </div>
                    <hr />
                    <div className="text-center md:text-left">
                        <p className="uppercase">size</p>
                        <SizeRadio items={product.availableSizes} />
                    </div>
                    <CTA text="add to cart" theme='light' />
                    <CTA text="buy it now" theme='dark' />
                    <ul>
                        {product.description.map(item => 
                            <li
                                className="list-disc"
                            >
                                {item}
                            </li>
                        )}
                    </ul>
                </div>
            </div>
            <div className="col-span-2 pt-24 space-y-16">
                <div className="text-center">
                    <H2 text="you may also like" />
                </div>
                <ProductsList limit={4} tag='latest' />
                <div className="w-fit mx-auto">
                    <CTA href="/collections/all" text="continue shopping" styles="text-xs" />
                </div>
            </div>
        </>
    )
}