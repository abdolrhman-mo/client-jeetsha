import Link from 'next/link'
import Image from 'next/image'
import clsx from 'clsx'
import { motion, Variants } from 'framer-motion'
import { useState } from 'react'

export default function Product({
    product,
    styles,
}: {
    product: any
    styles?: string
}) {
    // const container = {
    //     normal: {
    //         height: '100%',
    //     },
    //     hovered: {
    //         height: '105%',
    //     }
    // }
    const image = {
        normal: {
            height: '100%',
        },
        hovered: {
            height: '105%',
        }
    }

    return (
        <motion.div
            animate={'normal'}
            whileHover='hovered'
        >
            <Link
                className='group' 
                href={`/product/${product.id}`}
                key={product.id}
                >
                <div className={`grid grid-rows-12 h-full gap-4 ${styles}`}>
                    <div
                        className={clsx(
                            'overflow-hidden row-span-6 sm:row-span-10', 
                            'flex items-center'
                        )}
                    >
                        <motion.div
                            initial={false}
                            variants={image}
                        >
                            <Image
                                className={clsx(
                                    // Layout & Sizing
                                    'object-cover h-full max-h-60 sm:max-h-full',
                                    // Transitions & Animations
                                    'transition-all duration-300 ease-in-out',
                                )}
                                src={product.image_url} 
                                alt={product.name}
                                width={500}
                                height={500}
                            /> 
                        </motion.div>
                    </div>
                    <div className='row-span-6 sm:row-span-2 text-center'>
                        <h4 
                            className='uppercase text-md tracking-widest'
                            >
                            {product.name}
                        </h4>
                        <p
                            className='text-slate-600 text-sm'
                            >
                            {product.price} EGP
                        </p>
                    </div>
                </div>
            </Link>
        </motion.div>
    )
}