import { createAsyncThunk } from "@reduxjs/toolkit"
import { addAddressAPI, editAddressAPI, fetchAddressesAPI, removeAddressAPI } from "@/app/lib/services/address/addressService"
import { AddressRequest, AddressResponse, AddressType } from "@/app/lib/types/addressTypes"
import { unsetOtherDefaultAddresses } from "./addressUtility"

export const fetchAddresses = createAsyncThunk('address/fetchAddresses', async () => {
    const data = await fetchAddressesAPI()
    return data
})

export const removeAddress = createAsyncThunk('address/removeAddress', async (
    { id }: { id: number },
    { dispatch }
) => {
    const data = await removeAddressAPI(id)
    dispatch(fetchAddresses())
    return data
})

export const addAddress = createAsyncThunk('address/addAddress', async (
  { addressData }: { addressData: AddressRequest },
  { dispatch }
) => {
  let isDefault = false
  const addresses = await fetchAddressesAPI()
  if (addresses.length === 0 || addressData.is_default) isDefault = true
  const addedAddress = await addAddressAPI(addressData)
  
  // Make the rest of addresses not default
  if (isDefault) { // Only if the new address is marked as default
    
    // console.log('new address is default')
    // console.log('ur default address', addedAddress)

    await unsetOtherDefaultAddresses(addresses, addedAddress)
  }

  // dispatch(fetchAddresses())
  return addedAddress
})

export const editAddress = createAsyncThunk('address/editAddress', async (
  {
    id,
    addressData
  }: {
    id: number
    addressData: AddressRequest
  },
    { dispatch }
) => {
  const editedAddress = await editAddressAPI(
    id, addressData
  )
  
  // Make the rest of items not default
  const addresses = await fetchAddressesAPI()
  if (addressData.is_default) { // Only if the new address is set as default
    await unsetOtherDefaultAddresses(addresses, editedAddress)
  }
  
  // dispatch(fetchAddresses())
  return editedAddress
})