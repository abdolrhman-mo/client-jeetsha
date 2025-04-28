'use client'

import clsx from "clsx"
import ProductsList from "@/app/ui/products/products-list"

import { useSelector } from "react-redux"
import { selectSearchBar } from "@/redux/features/nav/searchBarSlice"

export default function NavSearchResults({
    query,
    currentPage,
    products = [],
}: {
    query: string
    currentPage: number
    products?: any[]
}) {
    const searchBar = useSelector(selectSearchBar)

    return (
        <div
            className={clsx(
                // Layout & Sizing
                'fixed z-40 top-20 overflow-y-scroll h-full md:h-3/4 w-full',
                // Backgrounds & Effects
                'bg-white',
                {
                    'hidden': !searchBar
                }
            )}
        >
            <div className="w-5/6 mx-auto pt-12">
                <ProductsList
                    styles='grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 gap-y-12'
                    productStyles='max-h-64'
                    limit={5}
                    search={true}
                    navSearch={true}
                    query={query}
                    products={products}
                />
                <br />
            </div>
        </div>
    )
}