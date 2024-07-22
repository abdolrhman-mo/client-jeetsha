import clsx from "clsx"
import { motion, Variants } from "framer-motion"

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
    const shadow: Variants = {
        show: {
            display: 'block',
            opacity: .5,
            // transition: {
                
            // },
        },
        hide: {
            opacity: 0,
            transitionEnd: {
                display: 'none'
            }
        },
    }

    return (
        <motion.div
            initial={false}
            animate={(showMobileNav || showCart || showSearchBar) ? 'show' : 'hide'}
            variants={shadow}
            className={clsx(
                // Layout & Sizing
                'fixed inset-y-0 z-40 h-screen w-full',
                // Backgrounds & Effects
                'bg-black opacity-50',
                'hidden',
                // {
                //     'hidden': (
                //         showMobileNav === false && 
                //         showCart === false && 
                //         showSearchBar === false
                //     )
                // }
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
        ></motion.div>
    )
}