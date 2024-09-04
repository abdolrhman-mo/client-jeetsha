// A utility function which takes address data and transform it to AddressResponse typescript

import { AddressResponse } from "../../types/addressTypes"

// interface i want
export const transformAddressData = async (list: any) => {
  let transformedList = list.map((address: any) => {
    const transformedItem: AddressResponse = {
      id: address.id,
      user_id: address.user,
      country: address.country,
      city: address.city,
      address_text: address.addressText,
      is_default: address.is_default
    }
    return transformedItem
  })

  return transformedList
}