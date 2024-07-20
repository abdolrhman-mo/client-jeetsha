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
import Search from '../search'
import ProductsList from './products-list'
import CTA from '@/app/ui/components/cta'
import { usePathname, useSearchParams } from 'next/navigation'

export default function Nav({
    showNav,
    onShowNav,
    showCart,
    onShowCart,
    showSearch,
    onShowSearch,
}: {
    showNav?: any
    onShowNav?: any
    showCart?: any
    onShowCart?: any
    showSearch?: any
    onShowSearch?: any
}) {

    let handleShowNav = () => {
        onShowNav()
    }
    let handleShowCart = () => {
        onShowCart()
    }
    let handleShowSearch = () => {
        onShowSearch()
    }
    // const pathname = usePathname()
    // if (pathname === '/search') {
    //     handleShowSearch()
    // }

    return (
        <nav className='shadow-sm fixed w-full z-30 bg-white'>
            <div 
                className={clsx(
                    // Layout & Sizing
                    'relative flex justify-around',
                    'py-5 w-11/12 mx-auto',
                    'items-center tracking-widest',
                    {
                        'hidden': showSearch
                    }
                )}
            >
                {/* desktop */}
                <MagnifyingGlassIcon 
                    className='h-6 hidden md:block cursor-pointer'
                    onClick={handleShowSearch} 
                />
                {/* mobile */}
                <Bars3CenterLeftIcon className='h-6 md:hidden cursor-pointer' onClick={handleShowNav} />

                <div className='w-1/2 mx-auto flex justify-center md:justify-between'>    
                    <ul className='w-full justify-evenly items-center hidden md:max-lg:flex-col md:flex'>
                        <li>
                            <Link href='/collections/latest'>LATEST</Link>
                        </li>
                        <li>
                            <Link href='/collections/tees'>TEES</Link>
                        </li>
                    </ul>
                    <Logo text_size='text-4xl' />
                    <ul className='w-full justify-evenly items-center hidden md:max-lg:flex-col md:flex'>
                        <li>
                            <Link href='/collections/pants'>PANTS</Link>
                        </li>
                        <li>
                            <Link href='/collections/shorts'>SHORTS</Link>
                        </li>
                    </ul>
                </div>

                {/* mobile */}
                <MagnifyingGlassIcon 
                    className='h-6 cursor-pointer block md:hidden' 
                    onClick={handleShowSearch}
                />
                {/* desktop */}
                <UserIcon className='h-6 px-2 hidden md:block cursor-pointer' />
                <ShoppingBagIcon 
                    className='h-6 px-2 cursor-pointer' 
                    onClick={() => {
                        handleShowCart()
                    }}    
                />

                {/* mobile NAV */}
                <div
                    className={clsx(
                        // Layout & Sizing
                        'fixed inset-x-0 inset-y-0 z-50 h-screen w-11/12 sm:w-96',
                        // Flex
                        'flex flex-col space-y-4 divide-y',
                        // Spacing
                        'px-4 py-4',
                        // Background
                        'bg-white',
                        {
                            'hidden': showNav === false
                        }
                    )}
                >
                    <XMarkIcon className='h-6 cursor-pointer' onClick={handleShowNav} />
                    <Link href=''>NEW</Link>
                    <Link href=''>TOPS</Link>
                    <Link href=''>BOTTOM</Link>
                    <Link href=''>SHORTS</Link>
                    <Link href=''>Log in</Link>
                    <svg className='h-6' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'><path d='M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z'/></svg>
                    <svg className='h-6' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'><path d='M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z'/></svg>
                </div>

                {/* CART */}
                <div
                    className={clsx(
                        // Layout
                        'fixed top-0 right-0 z-50 ', 
                        // Sizing
                        'h-screen w-11/12 md:w-1/3',
                        // Flex
                        'flex flex-col',
                        // Backgrounds 
                        'bg-white',
                        // Borders
                        'divide-y',
                        {
                            'hidden': showCart === false
                        }
                    )}
                >
                    <div className={clsx(
                            // Flex
                            "flex justify-between items-center",
                            // Spacing
                            'py-4 px-4',
                        )}
                    >
                        <h2 className='text-3xl'>CART</h2>
                        <XMarkIcon className='h-6 cursor-pointer' onClick={handleShowCart} />
                    </div>
                    <div className={clsx(
                            "overflow-y-scroll space-y-6 py-6",
                            // Spacing
                            'px-4',
                        )}
                    >
                        {
                            (cartItems.length === 0) ? (
                                <p>Your cart is currently empty.</p>
                            ) : (
                                cartItems.map(cartItem =>
                                    <div className="grid grid-cols-3 gap-4">
                                        <Image
                                            src={cartItem.image_url}
                                            width={500}
                                            height={500}
                                            alt={cartItem.name}
                                        />
                                        <div className='col-span-2 flex justify-around flex-col'>
                                            <div>
                                                <p
                                                    className='capitalize pb-2'
                                                    >
                                                    {cartItem.name}
                                                </p>
                                                <p
                                                    className='text-sm'
                                                    >
                                                    <span
                                                        className='font-bold'
                                                        >
                                                        Size: 
                                                    </span>
                                                    Medium
                                                </p>
                                            </div>
                                            <div className="flex justify-between">
                                                <div className="border flex">
                                                    <button
                                                        className={clsx(
                                                            // Spacing
                                                            'px-3 py-0.5',
                                                            // Transition & Animations
                                                            'transition-all duration-300 ease-in-out',
                                                            'hover:bg-black hover:text-white',
                                                        )}
                                                    >
                                                        -
                                                    </button>
                                                    <p
                                                        className={clsx(
                                                            'py-1 px-2'
                                                        )}
                                                    >
                                                        {3}
                                                    </p>
                                                    <button
                                                        className={clsx(
                                                            // Spacing
                                                            'px-3 py-0.5',
                                                            // Transition & Animations
                                                            'transition-all duration-300 ease-in-out',
                                                            'hover:bg-black hover:text-white',
                                                        )}
                                                    >
                                                        +
                                                    </button>
                                                </div>
                                                <p>{cartItem.price} EGP</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            )
                        }
                    </div>
                    <div className={clsx(
                            "space-y-5 py-5",
                            // Spacing
                            'px-4',
                        )}
                    >
                        <div className="flex justify-between">
                            <p className="">
                                SUBTOTAL
                            </p>
                            <p className="">
                                4,300.00 EGP
                            </p>
                        </div>
                        <p className='text-center text-xs'>
                            Shipping, taxes, and discount codes calculated at checkout.
                        </p>
                        {/* <Input styles='w-full' type='submit' value='check out' /> */}
                        <CTA text='checkout' href='/checkout' />
                    </div>
                </div>
            </div>

            {/* Background Shadow */}
            <div
                className={clsx(
                    // Layout & Sizing
                    'fixed inset-y-0 z-40 h-screen w-full',
                    // Backgrounds & Effects
                    'bg-black opacity-50',
                    {
                        'hidden': (
                            showNav === false && 
                            showCart === false && 
                            showSearch === false
                        )
                    }
                )}
                onClick={() => {
                    if (showNav) {
                        handleShowNav()
                    } else if (showCart) {
                        handleShowCart()
                    } 
                    else {
                        handleShowSearch()
                    }
                }}
            ></div>

            {/* Search Form */}
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
                            'hidden': showSearch === false
                        }
                    )}
                    >
                    <Search 
                        placeholder='Search our store'
                        onShowSearch={handleShowSearch} 
                    />
                </div>
            </div>
        </nav>
    )
}