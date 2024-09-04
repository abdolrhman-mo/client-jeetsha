import EditAddressForm from "../../forms/edit-address-form"
import { useEffect, useState } from "react"
import { useAppDispatch } from "@/redux/store"
import { removeAddress } from "@/redux/features/address/addressThunk"
import { AddressRequest } from "@/app/lib/types/addressTypes"

export default function AddressesList({
    addresses,
}: {
    addresses: AddressRequest[]
}) {
    const dispatch = useAppDispatch()
    const [editAddressId, setEditAddressId] = useState<number | null>(null)
    const handleEditAddress = (id: number) => {
      setEditAddressId(id)
    }

    const handleRemoveAddress = async (id: number) => {
      dispatch(removeAddress({ id }))
      setEditAddressId(null)
    }
    
    const resetAddressId = (id: number) => {
      setEditAddressId(null)
    }

    return (
        <div className="space-y-8">
            {addresses && addresses.length > 0 ? (
                addresses.slice().reverse().map((address: any) =>
                    <div key={address.id}>
                        <div>
                            <p className="text-md font-semibold text-gray-800 italic mb-1">
                                {
                                    address.is_default && 'Default'
                                }
                            </p>
                            <p className="text-md text-gray-700 mb-1 capitalize">{address.country}</p>
                            <p className="text-md text-gray-700 mb-1 capitalize">{address.city}</p>
                            <p className="text-md text-gray-600">{address.addressText}</p>
                            <p className="text-md text-gray-600">{address.phone_number}</p>
                            <button 
                                onClick={() => handleEditAddress(address.id)}
                            >
                                Edit
                            </button> 
                            <span className="px-0.5"> | </span>
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