'use client'

import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import clsx from 'clsx'
import { dashboradRoutes } from '@/app/lib/constants/appConfig'
import { ROUTES } from '@/app/lib/constants/routes'

export default function SideBar() {
    // const [pathname, setPathname] = useState('/dashboard')
    const [pathname, setPathname] = useState('/dashboard')
    const [nestedPathname, setNestedPathname] = useState('')

    useEffect(() => {
        const locaPathname = localStorage.getItem('pathname')
        const localNestedPathname = localStorage.getItem('nestedPathname')
        if (locaPathname) {
            setPathname(locaPathname || '')
        }
        if (localNestedPathname) {
            setNestedPathname(localNestedPathname || '')
        }
    }, [])

    return (
        <div className="col-span-1 shadow pt-8">
            <div className="flex flex-col w-5/6 mx-auto">
                {dashboradRoutes.map((link) => (
                    <div className='font-semibold'>
                        <Link 
                            onClick={() => {
                                setPathname(link.path) 
                                setNestedPathname('')
                                localStorage.setItem('pathname', link.path)
                                localStorage.setItem('nestedPathname', '')
                            }} 
                            key={link.path} 
                            href={`dashboard/${link.path}`}
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
                        {/* {(pathname === link.path && link.nestedLinks) && (
                            link.nestedLinks.map(nestedLink => (
                                <Link
                                    onClick={() => {
                                        setNestedPathname(nestedLink.path)
                                        localStorage.setItem('nestedPathname', nestedLink.path)
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
                        )} */}
                    </div>
                ))}
            </div>
        </div>
    )
}
