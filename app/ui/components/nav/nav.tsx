'use client'

import Link from 'next/link'
import { 
    MagnifyingGlassIcon, 
    UserIcon, 
    ShoppingBagIcon, 
    Bars3CenterLeftIcon,
} from '@heroicons/react/24/outline'
import Logo from '@/app/ui/components/logo'
import clsx from 'clsx'
import NavCart from '@/app/ui/components/nav/nav-cart'
import NavSearchBar from '@/app/ui/components/nav/nav-search-bar'
import BackgroundShadow from '@/app/ui/components/nav/background-shadow'
import MobileNav from '@/app/ui/components/nav/mobile-nav'
import { motion, Variants } from 'framer-motion'

import { useSelector, useDispatch } from 'react-redux'
import { toggleSearchBar, selectSearchBar } from '@/lib/features/nav/searchBarSlice'
import { toggleMobileNav, selectMobileNav } from '@/lib/features/nav/mobileNavSlice'
import { useState } from 'react'

export default function Nav({
    showCart,
    onShowCart,
}: {
    showCart?: any
    onShowCart?: any
}) {
    const [loggedIn, setLoggedIn] = useState(false)

    let handleProfileLink = () => {
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
    const mobileNav = useSelector(selectMobileNav)
    const dispatch = useDispatch()

    return (
        <nav className='shadow-sm fixed w-full z-30 bg-white'>
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
                <MagnifyingGlassIcon 
                    className='h-6 hidden md:block cursor-pointer'
                    onClick={() => dispatch(toggleSearchBar())} 
                />
                {/* mobile */}
                <Bars3CenterLeftIcon className='h-6 md:hidden cursor-pointer' onClick={() => {
                    dispatch(toggleMobileNav())
                    if (localStorage.getItem('authToken')) {
                        setLoggedIn(true)
                    } else {
                        setLoggedIn(false)
                    }
                }} />

                <div 
                    className='w-1/2 mx-auto flex justify-center md:justify-between'
                >    
                    <ul 
                        className={clsx(
                            // Layout & Sizing
                            'hidden w-full',
                            // Flex
                            'justify-evenly items-center',
                            'md:max-lg:flex-col md:flex'
                        )}
                    >
                        <motion.li whileHover='hover' variants={navItem}>
                            <Link href='/collections/latest'>LATEST</Link>
                        </motion.li>
                        <motion.li whileHover='hover' variants={navItem}>
                            <Link href='/collections/tees'>TEES</Link>
                        </motion.li>
                    </ul>
                    <Logo text_size='text-4xl' />
                    <ul className={clsx(
                            // Layout & Sizing
                            'hidden w-full',
                            // Flex
                            'justify-evenly items-center',
                            'md:max-lg:flex-col md:flex'
                        )}
                    >
                        <motion.li whileHover='hover' variants={navItem}>
                            <Link href='/collections/pants'>PANTS</Link>
                        </motion.li>
                        <motion.li whileHover='hover' variants={navItem}>
                            <Link href='/collections/shorts'>SHORTS</Link>
                        </motion.li>
                    </ul>
                </div>

                {/* RIGHT SIDE */}

                {/* mobile */}
                <MagnifyingGlassIcon 
                    className='h-6 cursor-pointer block md:hidden' 
                    onClick={() => dispatch(toggleSearchBar())}
                />
                {/* desktop */}
                <ul className='flex'>
                    <li>
                        <Link onClick={handleProfileLink} href={loggedIn ? '/account' : '/login'}>
                            <UserIcon className='h-6 px-2 hidden md:block cursor-pointer' />
                        </Link>
                    </li>
                    <li>
                        <Link href={''}>
                            <ShoppingBagIcon 
                                className='h-6 px-2 cursor-pointer' 
                                onClick={onShowCart}    
                            />
                        </Link>
                    </li>
                </ul>

                {/* mobile NAV */}
                <MobileNav loggedIn={loggedIn} />

                {/* CART */}
                <NavCart showCart={showCart} onShowCart={onShowCart} />
            </div>

            {/* Background Shadow */}
            <BackgroundShadow
                showCart={showCart}
                onShowCart={onShowCart}
            />

            {/* Search Bar */}
            <NavSearchBar />
        </nav>
    )
}