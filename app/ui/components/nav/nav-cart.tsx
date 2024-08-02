import Link from 'next/link'
import {
    XMarkIcon,
} from '@heroicons/react/24/outline'
import clsx from 'clsx'
import CTA from '@/app/ui/components/cta'
import CartItems from '@/app/ui/cart/cart-items'
import { motion, Variants } from 'framer-motion'

export default function NavCart({
    showCart,
    onShowCart,
}: {
    showCart?: any
    onShowCart?: any
}) {
    let cart: Variants = {
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
                duration: 0.1,
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
            transition: {
                duration: 0.2
            }
        }
    }

    if (typeof window !== 'undefined') {
        const isMobile = window.innerWidth < 768; //Add the width you want to check for here (now 768px)
        if (isMobile) {
            cart.show = {
                width: '95%',
                transition: {
                    duration: 0.2,
                    when: 'beforeChildren',
                    staggerChildren: 0.2,
                }
            }
        }
    }

    return (
        <motion.div
            initial={ false }
            animate={ showCart ? 'show' : 'hide' }
        >
            <motion.div
                variants={cart}
                className={clsx(
                    // Layout
                    'fixed top-0 right-0 z-50 ', 
                    // Sizing
                    'h-screen',
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
                    <Link href={'/cart'} onClick={onShowCart}>
                        <h2 className='text-3xl'>CART</h2>
                    </Link>
                    <XMarkIcon className='h-6 cursor-pointer' onClick={onShowCart} />
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
                        'px-4 pb-28',
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