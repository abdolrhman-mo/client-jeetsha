'use client'

import clsx from "clsx"
import Search from "@/app/ui/search/search"

import { useSelector } from 'react-redux'
import { selectSearchBar } from '@/lib/features/nav/searchBarSlice'
import { Suspense } from "react"

export default function NavSearchBar() {
    const searchBar = useSelector(selectSearchBar)

    return (
        <div className={clsx(
            // Layout & Sizing
            'relative z-50 w-full',
            // Background
            'bg-white'
        )}>
            <div 
                className={clsx(
                    // Layout & Sizing
                    'block w-11/12',
                    // Flex
                    'flex justify-around items-center',
                    // Spacing
                    'py-5 mx-auto tracking-widest',
                    {
                        'hidden': searchBar === false
                    }
                )}
                >
                <Suspense>
                    <Search
                        placeholder='Search our store'
                    />
                </Suspense>
            </div>
        </div>
    )
}