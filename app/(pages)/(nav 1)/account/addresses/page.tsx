'use client'

import AddNewAddressSection from "@/app/ui/account/address/sections/add-new-address-section"
import AddressesSection from "@/app/ui/account/address/sections/addresses-section"
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
                    {/* Heading */}
                    <div className="col-span-1 md:col-span-3 text-center mb-10">
                        <Heading level={2}>My Account</Heading>
                    </div>

                    {/* Add New Address */}
                    <div className="col-span-1">
                      <AddNewAddressSection setAdd={() => setState('add')} />
                    </div>

                    {/* Display Addresses */}
                    <div className="col-span-1 md:col-span-2">
                        <AddressesSection
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