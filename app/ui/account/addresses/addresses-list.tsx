import { AddressType } from "@/app/lib/types"
import { useState } from "react"
import AddressForm from "../../forms/checkout-form"
import EditAddressForm from "../../forms/edit-address-form"
import { removeAddressAPI } from "@/app/lib/services/address"

export default function AddressesList({
    addresses,
}: {
    addresses: AddressType[]
}) {
    const [editAddressId, setEditAddressId] = useState<number | null>(null)
    const handleEditAddress = (id: number) => {
        setEditAddressId(id)
    }

    const handleRemoveAddress = async (id: number) => {
        // await removeAddressAPI(id)

        setEditAddressId(null)
    }
    
    const resetAddressId = (id: number) => {
        setEditAddressId(null)
    }

    return (
        <div className="space-y-8">
            {addresses ? (
                addresses.map((address: any) =>
                    <div key={address.id}>
                        <div>
                            <p className="text-lg font-semibold text-gray-800 mb-1">{address.country}</p>
                            <p className="text-md text-gray-700 mb-1">{address.city}</p>
                            <p className="text-md text-gray-600">{address.addressText}</p>
                            <p className="text-md text-gray-600">{address.phone_number}</p>
                            <button 
                                onClick={() => handleEditAddress(address.id)}
                            >
                                Edit
                            </button> 
                            | 
                            <button 
                                onClick={() => handleRemoveAddress(address.id)}
                            >
                                Delete
                            </button>
                        </div>
                        {editAddressId === address.id && (
                            <EditAddressForm address={address} resetAddressId={resetAddressId} />
                        )}
                    </div>
                )
            ) : (
                <p>No Saved Addresses.</p>
            )}
        </div>
    )
}