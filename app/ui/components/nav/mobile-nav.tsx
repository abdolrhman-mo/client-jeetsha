import clsx from "clsx"
import { XMarkIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import { motion, Variants } from 'framer-motion'
import MobileNavItem from "./mobile-nav-item"

import { useSelector } from "react-redux"
import { selectMobileNav, toggleMobileNav } from "@/lib/features/nav/mobileNavSlice"

export default function() {
    const mobileNavVariants = {
        show: {
            width: '80%',
            transition: {
                duration: .2,
                when: 'beforeChildren',
                staggerChildren: .05,
            }
        },
        hide: {
            width: 0,
            transition: {
                duration: .2,
                when: 'afterChildren',
            }
        }
    }
    const mobileNav = useSelector(selectMobileNav)

    return (
        <motion.div
            initial={false}
            animate={mobileNav ? 'show' : 'hide'}
            variants={mobileNavVariants}
            className={clsx(
                // Layout
                'fixed inset-x-0 inset-y-0 z-50 overflow-hidden',
                // Sizing
                'h-screen 0 sm:w-96',
                // Spacing
                'space-y-4 py-12',
                // Background
                'bg-white',
                // Typography
                'text-2xl',
            )}
        >
            <div className={clsx(
                    // Layout & Sizing
                    'w-5/6',
                    // Spacing
                    'mx-auto space-y-4',
                    // Flex
                    'flex flex-col',
                )}
            >
                <MobileNavItem xMark={true} />
                <MobileNavItem href='/collections/latest' text="new" />
                <MobileNavItem href='/collections/tees' text="tees" />
                <MobileNavItem href='/collections/pants' text="pants" />
                <MobileNavItem href='/collections/shorst' text="shorts" />
                <MobileNavItem href='/login' text="login" />
                <MobileNavItem social={true} />
            </div>
        </motion.div>
    )
}