'use client'

import Link from 'next/link'
import { 
    MagnifyingGlassIcon, 
    UserIcon, 
    ShoppingBagIcon, 
    Bars3CenterLeftIcon,
} from '@heroicons/react/24/outline'
import Logo from '@/app/ui/common/logo'
import clsx from 'clsx'
import NavCart from '@/app/ui/layout/nav/nav-cart'
import NavSearchBar from '@/app/ui/layout/nav/nav-search-bar'
import BackgroundShadow from '@/app/ui/layout/nav/background-shadow'
import MobileNav from '@/app/ui/layout/nav/mobile-nav'
import { motion } from 'framer-motion'
import { useSelector, useDispatch } from 'react-redux'
import { selectSearchBar } from '@/redux/features/nav/searchBarSlice'
import { toggleMobileNav } from '@/redux/features/nav/mobileNavSlice'
import { useState } from 'react'
import { abdoRedirect } from '@/app/lib/actions'
import { toggleNavCart } from '@/redux/features/nav/navCartSlice'
import { ROUTES } from '@/app/lib/constants/routes'

export default function Nav() {
    const dispatch: any = useDispatch()

    const [loggedIn, setLoggedIn] = useState(false)

    let handleUserIconClick = () => {
        if (localStorage.getItem('authToken')) {
            if (localStorage.getItem('email') === 'admin@admin.admin') {
                abdoRedirect(ROUTES.DASHBOARD.MAIN)
            } else {
                abdoRedirect(ROUTES.ACCOUNT)
            }
        } else {
            abdoRedirect(ROUTES.LOGIN)
        }
    }

    let handleBarsIconClick = () => {
        if (localStorage.getItem('authToken')) {
            setLoggedIn(true)
        } else {
            setLoggedIn(false)
        }
    }

    const navItem = {
        normal: {
            borderBottom: 'none',
        },
        hover: {
            borderBottom: '1px solid black',
        }
    }
    const searchBar = useSelector(selectSearchBar)

    return (
        <nav className='shadow-sm fixed w-full z-30 bg-[#EBD9D5]'>
            <div 
                className={clsx(
                    // Layout & Sizing
                    'relative flex justify-around',
                    // Spacing
                    'py-5 w-11/12 mx-auto',
                    // Typography
                    'items-center tracking-widest',
                    {
                        'hidden': searchBar
                    }
                )}
            >
                {/* LEFT SIDE */}

                {/* desktop */}
                <Link href={ROUTES.SEARCH}>
                    <MagnifyingGlassIcon 
                        className='h-6 hidden md:block cursor-pointer'
                        // onClick={() => dispatch(toggleSearchBar())} 
                    />
                </Link>
                {/* mobile */}
                <Bars3CenterLeftIcon className='h-6 md:hidden cursor-pointer' onClick={() => {
                    dispatch(toggleMobileNav())
                    handleBarsIconClick()
                }} />

                <div
                    className='mx-auto flex justify-center'
                >    
                    {/* <ul 
                        className={clsx(
                            // Layout & Sizing
                            'hidden w-full',
                            // Flex
                            'justify-evenly items-center',
                            'md:max-lg:flex-col md:flex'
                        )}
                    >
                        <motion.li whileHover='hover' variants={navItem}>
                            <Link href={ROUTES.COLLECTIONS.LATEST}>LATEST</Link>
                        </motion.li>
                        <motion.li whileHover='hover' variants={navItem}>
                            <Link href={ROUTES.COLLECTIONS.TEES}>TEES</Link>
                        </motion.li>
                    </ul> */}
                    <Logo />
                    {/* <ul className={clsx(
                            // Layout & Sizing
                            'hidden w-full',
                            // Flex
                            'justify-evenly items-center',
                            'md:max-lg:flex-col md:flex'
                        )}
                    >
                        <motion.li whileHover='hover' variants={navItem}>
                            <Link href={ROUTES.COLLECTIONS.PANTS}>PANTS</Link>
                        </motion.li>
                        <motion.li whileHover='hover' variants={navItem}>
                            <Link href={ROUTES.COLLECTIONS.SHORTS}>SHORTS</Link>
                        </motion.li>
                    </ul> */}
                </div>

                {/* RIGHT SIDE */}

                {/* mobile */}
                {/* <Link href={ROUTES.SEARCH}>
                    <MagnifyingGlassIcon
                        className='h-6 cursor-pointer block md:hidden' 
                        // onClick={() => dispatch(toggleSearchBar())}
                    />
                </Link> */}
                {/* desktop */}
                <ul className='flex'>
                    <li>
                        <button onClick={handleUserIconClick}>
                            <UserIcon className='h-6 px-2 hidden md:block cursor-pointer' />
                        </button>
                    </li>
                    <li>
                        <Link href={ROUTES.HOME}>
                            <ShoppingBagIcon 
                                className='h-6 px-2 cursor-pointer' 
                                onClick={() => {
                                        dispatch(toggleNavCart())
                                        // handleCartClick()
                                    }
                                }    
                            />
                        </Link>
                    </li>
                </ul>

                {/* mobile NAV */}
                <MobileNav loggedIn={loggedIn} />

                {/* CART */}
                <NavCart />
            </div>

            {/* Background Shadow */}
            <BackgroundShadow />

            {/* Search Bar */}
            <NavSearchBar />
        </nav>
    )
}