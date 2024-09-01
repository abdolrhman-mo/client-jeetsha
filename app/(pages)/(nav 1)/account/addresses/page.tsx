'use client'

import Addresses from "@/app/ui/account/addresses/addresses"
import Button from "@/app/ui/common/button"
import Heading from "@/app/ui/common/heading"
import { ArrowLongLeftIcon } from "@heroicons/react/24/outline"
import Link from "next/link"
import { useState } from "react"

export default function Page() {
    const [state, setState] = useState('view') // view, edit, add

    return (
        <>
            <div className="w-5/6 mx-auto mt-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="col-span-1 md:col-span-3 text-center mb-10">
                        <Heading level={2}>My Account</Heading>
                    </div>
                    <div className="col-span-1">
                        <Button 
                            className="!w-fit"
                            onClick={() => {
                                setState('add')
                            }}
                        >
                            Add a new address
                        </Button>
                        <br />
                        <Link href={'/account/'}>
                            <ArrowLongLeftIcon className="h-6 inline-block pr-3" />
                            Return to account details
                        </Link>
                    </div>
                    <div className="col-span-1 md:col-span-2">
                        <Addresses 
                            state={state} 
                            setView={() => setState('view')} 
                            setEdit={() => setState('edit')} 
                            setAdd={() => setState('add')} 
                        />
                    </div>
                </div>
            </div>
        </>
    )
}