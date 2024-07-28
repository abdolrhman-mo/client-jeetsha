import clsx from "clsx"
import { motion, Variants } from "framer-motion"

import { useSelector, useDispatch } from 'react-redux'
import { toggleSearchBar, selectSearchBar } from '@/lib/features/nav/searchBarSlice'
import { selectMobileNav, toggleMobileNav } from "@/lib/features/nav/mobileNavSlice"

export default function BackgroundShadow({
    showCart,
    onShowCart,
}: {
    showCart?: any
    onShowCart?: any
}) {
    const shadow: Variants = {
        show: {
            display: 'block',
            opacity: .5,
        },
        hide: {
            opacity: 0,
            transitionEnd: {
                display: 'none'
            }
        },
    }
    const searchBar = useSelector(selectSearchBar)
    const mobileNav = useSelector(selectMobileNav)
    const dispatch = useDispatch()

    return (
        <motion.div
            initial={false}
            animate={(mobileNav || showCart || searchBar) ? 'show' : 'hide'}
            variants={shadow}
            className={clsx(
                // Layout & Sizing
                'fixed inset-y-0 z-40 h-screen w-full',
                // Backgrounds & Effects
                'bg-black opacity-50',
                'hidden',
            )}
            onClick={() => {
                if (mobileNav) {
                    dispatch(toggleMobileNav())
                } else if (showCart) {
                    onShowCart()
                } 
                else {
                    dispatch(toggleSearchBar())
                }
            }}
        ></motion.div>
    )
}