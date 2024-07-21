import clsx from "clsx"
import Search from "@/app/ui/search"

export default function NavSearchBar({
    showSearchBar,
    onShowSearchBar,
}: {
    showSearchBar?: any
    onShowSearchBar?: any
}) {
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
                        'hidden': showSearchBar === false
                    }
                )}
                >
                <Search 
                    placeholder='Search our store'
                    onShowSearchBar={onShowSearchBar} 
                />
            </div>
        </div>
    )
}