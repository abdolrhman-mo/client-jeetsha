'use client'

import Collection from "@/app/ui/collections/collection";
import NavSearchResults from "@/app/ui/components/nav/nav-search-results";

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
            <div className="w-5/6 mx-auto">
                <Collection title="shop all shorts" tag='shorts' />
            </div>
        </>
    )
}