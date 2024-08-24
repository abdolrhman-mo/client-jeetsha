import clsx from "clsx"
import { motion, Variants } from "framer-motion"

import { useSelector, useDispatch } from 'react-redux'
import { toggleSearchBar, selectSearchBar } from '@/lib/features/nav/searchBarSlice'
import { selectMobileNav, toggleMobileNav } from "@/lib/features/nav/mobileNavSlice"
import { selectNavCart, toggleNavCart } from "@/lib/features/nav/navCartSlice"

export default function BackgroundShadow() {
    const dispatch = useDispatch()
    const searchBar = useSelector(selectSearchBar)
    const mobileNav = useSelector(selectMobileNav)
    const navCart = useSelector(selectNavCart)

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

    return (
        <motion.div
            initial={false}
            animate={(mobileNav || navCart || searchBar) ? 'show' : 'hide'}
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
                } else if (navCart) {
                    dispatch(toggleNavCart())
                } 
                else {
                    dispatch(toggleSearchBar())
                }
            }}
        ></motion.div>
    )
}