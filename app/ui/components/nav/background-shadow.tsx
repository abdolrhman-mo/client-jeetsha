import clsx from "clsx"

export default function BackgroundShadow({
    showMobileNav,
    showCart,
    showSearchBar,

    onShowMobileNav,
    onShowCart,
    onShowSearchBar,
}: {
    showMobileNav?: any
    showCart?: any
    showSearchBar?: any

    onShowMobileNav?: any
    onShowCart?: any
    onShowSearchBar?: any
}) {
    return (
        <div
            className={clsx(
                // Layout & Sizing
                'fixed inset-y-0 z-40 h-screen w-full',
                // Backgrounds & Effects
                'bg-black opacity-50',
                {
                    'hidden': (
                        showMobileNav === false && 
                        showCart === false && 
                        showSearchBar === false
                    )
                }
            )}
            onClick={() => {
                if (showMobileNav) {
                    onShowMobileNav()
                } else if (showCart) {
                    onShowCart()
                } 
                else {
                    onShowSearchBar()
                }
            }}
        ></div>
    )
}