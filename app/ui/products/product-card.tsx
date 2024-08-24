'use client'

import Link from 'next/link'
import Image from 'next/image'
import clsx from 'clsx'
import { motion } from 'framer-motion'

import { useSelector, useDispatch } from 'react-redux'
import { selectSearchBar, toggleSearchBar } from '@/lib/features/nav/searchBarSlice'

export default function Product({
    product,
    styles,
    navSearch,
}: {
    product: any
    styles?: string
    navSearch?: boolean
}) {
    const image = {
        normal: {
            height: '100%',
        },
        hovered: {
            height: '105%',
        }
    }
    
    const searchBar = useSelector(selectSearchBar)
    const dispatch = useDispatch()
    let handleClick = () => {
        if (navSearch) {
            dispatch(toggleSearchBar())
        }
    }

    // let imageUrl = '/imgs/pants/pants1.jpg'
    // console.log(`image url: ${product.image}`)

    return (
        <motion.div
            animate={'normal'}
            whileHover='hovered'
        >
            <Link
                className='group' 
                href={`/product-details/${product.id}`}
                key={product.id}
                onClick={handleClick}
            >
                <div className={`grid grid-rows-12 h-full gap-4 ${styles}`}>
                    <div
                        className={clsx(
                            'overflow-hidden row-span-7 sm:row-span-10', 
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
                                src={product.image} 
                                alt={product.name}
                                width={500}
                                height={500}
                            /> 
                        </motion.div>
                    </div>
                    <div className='row-span-5 sm:row-span-2 text-center'>
                        <h4
                            className='uppercase text-md tracking-widest row-span-2'
                            >
                            {product.name}
                        </h4>
                        <p
                            className='text-slate-600 text-sm row-span-1'
                        >
                            {product.price} EGP
                        </p>
                    </div>
                </div>
            </Link>
        </motion.div>
    )
}