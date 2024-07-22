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
import Search from '@/app/ui/search'
import ProductsList from '@/app/ui/components/products-list'
import CTA from '@/app/ui/components/cta'
import { usePathname, useSearchParams } from 'next/navigation'
import CartItem from '@/app/ui/cart/cart-item'
import CartItems from '../../cart/cart-items'
import { motion, Variants } from 'framer-motion'

const cart: Variants = {
    show: {
        width: '33%',
        transition: {
            duration: 0.2,
            when: 'beforeChildren',
            staggerChildren: 0.2,
        }
    },
    hide: {
        width: '0',
        transition: {
            duration: 0.2,
            when: 'afterChildren',
        }
    }
}

const cartItem: Variants = {
    show: {
        opacity: 1,
        y: 0,
    },
    hide: {
        opacity: 0,
        y: 25,
    }
}

export default function NavCart({
    showCart,
    onShowCart,
}: {
    showCart?: any
    onShowCart?: any
}) {
    let handleShowCart = () => {
        onShowCart()
    }
    return (
        <motion.div
            initial={false}
            animate={showCart ? 'show' : 'hide'}
        >
            <motion.div variants={cart}
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
                    // {
                    //     'scale-x-0': showCart === false,
                    //     'scale-x-100': showCart
                    // }
                )}
            >
                <motion.div
                    variants={cartItem} 
                    className={clsx(
                        // Flex
                        "flex justify-between items-center",
                        // Spacing
                        'py-4 px-4',
                    )}
                >
                    <h2 className='text-3xl'>CART</h2>
                    <XMarkIcon className='h-6 cursor-pointer' onClick={handleShowCart} />
                </motion.div>
                <motion.div
                    variants={cartItem} 
                    className={clsx(
                        "overflow-y-scroll space-y-6 py-6",
                        // Spacing
                        'px-4',
                    )}
                >
                    <CartItems />
                </motion.div>
                <motion.div
                    variants={cartItem} 
                    className={clsx(
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
                </motion.div>
            </motion.div>
        </motion.div>
    )
}