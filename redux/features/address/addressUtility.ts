import { editAddressAPI } from "@/app/lib/services/address/addressService"
import { AddressRequest, AddressResponse } from "@/app/lib/types/addressTypes"

export const unsetOtherDefaultAddresses = async (
  addresses: AddressResponse[],
  addedAddress: AddressResponse,
) => {
  addresses.forEach(async (address: AddressResponse) => {
    if (address.is_default && address.id !== addedAddress.id) {
      const editedAddress = await editAddressAPI(address.id, {
        country: address.country,
        city: address.city,
        address_text: address.address_text,
        is_default: false,
      })
      // console.log('it was default default', editedAddress)
      // console.log('because address.is_default', address.is_default)
      // console.log('and because address.id !== addedAddres.id', address.is_default)
    } else {
      // console.log('normal address', address)
      // console.log('because address.is_default', address.is_default)
      // console.log('and because address.id !== addedAddres.id', address.is_default)
    }
  })
}