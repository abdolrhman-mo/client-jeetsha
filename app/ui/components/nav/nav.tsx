'use client'

import Link from 'next/link'
import { 
    MagnifyingGlassIcon, 
    UserIcon, 
    ShoppingBagIcon, 
    Bars3CenterLeftIcon,
    XMarkIcon,
} from '@heroicons/react/24/outline'
import Logo from '@/app/ui/components/logo'
import clsx from 'clsx'
import { useState } from 'react'
import { cartItems } from '@/app/lib/placeholder-data'
import Image from 'next/image'
import Input from '@/app/ui/components/input'
import { mainColor } from '@/app/lib/colors'
import Search from '../../search'
import ProductsList from '../products-list'
import CTA from '@/app/ui/components/cta'
import { usePathname, useSearchParams } from 'next/navigation'
import NavCart from './nav-cart'
import NavSearchBar from './nav-search-bar'
import BackgroundShadow from './background-shadow'
import MobileNav from './mobile-nav'

export default function Nav({
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
                        'hidden': showSearchBar
                    }
                )}
            >
                {/* LEFT SIDE */}

                {/* desktop */}
                <MagnifyingGlassIcon 
                    className='h-6 hidden md:block cursor-pointer'
                    onClick={onShowSearchBar} 
                />
                {/* mobile */}
                <Bars3CenterLeftIcon className='h-6 md:hidden cursor-pointer' onClick={onShowMobileNav} />

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
                        <li>
                            <Link href='/collections/latest'>LATEST</Link>
                        </li>
                        <li>
                            <Link href='/collections/tees'>TEES</Link>
                        </li>
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
                        <li>
                            <Link href='/collections/pants'>PANTS</Link>
                        </li>
                        <li>
                            <Link href='/collections/shorts'>SHORTS</Link>
                        </li>
                    </ul>
                </div>

                {/* RIGHT SIDE */}

                {/* mobile */}
                <MagnifyingGlassIcon 
                    className='h-6 cursor-pointer block md:hidden' 
                    onClick={onShowSearchBar}
                />
                {/* desktop */}
                <ul className='flex'>
                    <li>
                        <Link href={'/login'}>
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
                <MobileNav showMobileNav={showMobileNav} onShowMobileNav={onShowMobileNav} />

                {/* CART */}
                <NavCart showCart={showCart} onShowCart={onShowCart} />
            </div>

            {/* Background Shadow */}
            <BackgroundShadow
                showCart={showCart}
                showMobileNav={showMobileNav}
                showSearchBar={showSearchBar}

                onShowCart={onShowCart}
                onShowMobileNav={onShowMobileNav}
                onShowSearchBar={onShowSearchBar}
            />

            {/* Search Bar */}
            <NavSearchBar showSearchBar={showSearchBar} onShowSearchBar={onShowSearchBar} />
        </nav>
    )
}