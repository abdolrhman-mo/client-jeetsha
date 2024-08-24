'use client'

import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import clsx from 'clsx'

export default function SideBar() {
    // const [isOpen, setIsOpen] = useState(true)
    // const toggleSideNav = () => {
    //     setIsOpen(!isOpen)
    // }
    
    const [pathname, setPathname] = useState('/dashboard')
    const [nestedPathname, setNestedPathname] = useState('')

    // Define the links and their paths
    const navLinks = [
        { 
            name: 'home', 
            path: '',
        },
        { 
            name: 'orders', 
            path: 'orders',
        },
        // {
        //     name: 'products', 
        //     path: 'products',
        //     nestedLinks: [
        //         {
        //             name: 'collections',
        //             path: 'collections',
        //         },
        //         {
        //             name: 'inventory',
        //             path: 'inventory',
        //         },
        //         {
        //             name: 'purchase orders',
        //             path: 'purchase-orders',
        //         },
        //     ],
        // },
        // { 
        //     name: 'customers', 
        //     path: 'customers',
        // },
        // { 
        //     name: 'analytics', 
        //     path: 'analytics',
        // },
        // { 
        //     name: 'discounts', 
        //     path: 'discounts',
        // },
        // { 
        //     name: 'themes', 
        //     path: 'themes',
        // },
    ]

    return (
        <div className="col-span-1 shadow pt-8">
            <div className="flex flex-col w-5/6 mx-auto">
                {navLinks.map((link) => (
                    <div className='font-semibold'>
                        <Link 
                            onClick={() => {
                                setPathname(link.path) 
                                setNestedPathname('')
                            }} 
                            key={link.path} 
                            href={`/dashboard/${link.path}`}
                        >
                            <p
                                className={clsx(
                                    'py-2 px-3 rounded capitalize',
                                    pathname === link.path ? 'bg-gray-300' : 'hover:bg-gray-200'
                                )}
                            >
                                {link.name}
                            </p>
                        </Link>
                        {(pathname === link.path && link.nestedLinks) && (
                            link.nestedLinks.map(nestedLink => (
                                <Link
                                    onClick={() => {
                                        setNestedPathname(nestedLink.path)
                                    }} 
                                    href={`/dashboard/${link.path}/${nestedLink.path}`}>
                                    <p className={clsx(
                                        'py-1 px-5 rounded capitalize',
                                        nestedPathname === nestedLink.path ? 'text-pink-950' : 'text-slate-700'
                                    )}>
                                        {nestedLink.name}
                                    </p>
                                </Link>
                            ))
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}
