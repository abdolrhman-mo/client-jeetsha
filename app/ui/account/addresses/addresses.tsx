'use client'

import { useEffect, useState } from "react"
import AddressForm from "../../forms/checkout-form"
import Button from "../../common/button"
import Heading from "../../common/heading"
import { fetchAddressesAPI } from "@/app/lib/services/address"
import { AddressType } from "@/app/lib/types"
import Link from "next/link"
import EditAddress from "../edit-address"
import AddressesList from "./addresses-list"

export default function Addresses({
    state,
    setView,
    setEdit,
    setAdd,
}: {
    state: string
    setView: any
    setEdit: any
    setAdd: any
}) {
    const [addresses, setAddresses] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getData = async () => {
            let data = await fetchAddressesAPI()
            const userId = Number(localStorage.getItem('userId'))
            data = data.filter((address: AddressType) =>
                address.user === userId
            )
            // console.log(data)
            setAddresses(data)
            setLoading(false)
        }
        getData()
    }, [])

    return (
        <>
            {state === 'view' || state === 'edit' ? (
                <>
                    <Heading level={3}>Your Addresses</Heading>
                    {loading ? (
                            <p>Loading...</p>
                        ) : (
                            <AddressesList
                                addresses={addresses} 
                                // setEdit={setEdit} 
                            />   
                        )
                    }
                </>
            ) : (
                // state is equal to add
                <>
                    <AddressForm />
                </>
            )}
        </>
    )
}