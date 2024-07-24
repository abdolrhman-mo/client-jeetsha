'use client'

import ProductsList from "@/app/ui/components/products-list"
import Search from "@/app/ui/search"

export default function Page({
    searchParams,
}: {
    searchParams?: {
        query?: string
        page?: string
    }
}) {
    const query = searchParams?.query || ''
    const currentPage = Number(searchParams?.page) || 1

    // try {   
    //     document.querySelector('nav').click()
    // } catch (error) {
    //     console.log('fuckumean')
    // }


    return (
        <>
            <div className="w-5/6 mx-auto pt-14">
                <Search placeholder="Search our store" />

                <ProductsList
                    styles="py-12"
                    limit={8}
                    search={true}
                    query={query}
                    currentPage={currentPage}
                />
            </div>
        </>
    )
}