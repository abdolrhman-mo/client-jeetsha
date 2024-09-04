'use client'

import { useEffect, useState } from "react"
import { useAppDispatch } from "@/redux/store"
import { useAppSelector } from "@/redux/hooks"
import { fetchAddresses } from "@/redux/features/address/addressThunk"
import Heading from "../../../common/heading"
import AddressesList from "../addresses-list"
import AddressForm from "../../../forms/address-form"

export default function AddressesSection({
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
    const dispatch = useAppDispatch()
    const addresses = useAppSelector(state => state.address.items)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      dispatch(fetchAddresses())
      setLoading(false)
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
                    <AddressForm setView={setView} />
                </>
            )}
        </>
    )
}