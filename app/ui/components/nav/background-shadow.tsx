import clsx from "clsx"
import { motion, Variants } from "framer-motion"

import { useSelector, useDispatch, Provider } from 'react-redux'
import { toggle, selectSearchBar } from '@/lib/features/nav/searchBarSlice'

export default function BackgroundShadow({
    showMobileNav,
    showCart,

    onShowMobileNav,
    onShowCart,
}: {
    showMobileNav?: any
    showCart?: any

    onShowMobileNav?: any
    onShowCart?: any
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
    const searchBar = useSelector(selectSearchBar)
    const dispatch = useDispatch()

    return (
        <motion.div
            initial={false}
            animate={(showMobileNav || showCart || searchBar) ? 'show' : 'hide'}
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
                    dispatch(toggle())
                }
            }}
        ></motion.div>
    )
}