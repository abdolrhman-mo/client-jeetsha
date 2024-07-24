import clsx from "clsx"
import Search from "@/app/ui/search"

import { useSelector, useDispatch, Provider } from 'react-redux'
import { toggle, selectSearchBar } from '@/lib/features/nav/searchBarSlice'

export default function NavSearchBar() {
    const searchBar = useSelector(selectSearchBar)
    const dispatch = useDispatch()

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
                <Search 
                    placeholder='Search our store'
                />
            </div>
        </div>
    )
}