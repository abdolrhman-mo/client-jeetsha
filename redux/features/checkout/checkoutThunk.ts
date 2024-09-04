import { fetchAddressesAPI } from "@/app/lib/services/address/addressService";
import { fetchUserDataAPI, isAuth } from "@/app/lib/services/auth/authService";
import { AddressResponse } from "@/app/lib/types/addressTypes";
import { OrderRequest } from "@/app/lib/types/orderTypes";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchDefaultUserData = createAsyncThunk('order/fetchDefaultUserData', async () => {
  let defaultAddress
  let userData
  if (isAuth()) {
    const addresses = await fetchAddressesAPI()
    defaultAddress = addresses.find((address: AddressResponse) => address.is_default)

    try {
      userData = await fetchUserDataAPI()
    } catch (error) {
      console.error('errorrrr')
    }
  } else {
    defaultAddress = JSON.parse(localStorage.getItem('address') || '{}')
    userData = JSON.parse(localStorage.getItem('defaultUserData') || '{}')
  }

  let defaultData: OrderRequest = {
    address: {
      id: 0,
      country: '',
      city: '',
      address_text: '',
    },
    user: {
      first_name: '',
      last_name: '',
      phone_number: '',
    }
  }

  if (defaultAddress) {
    defaultData.address.country = defaultAddress.country || ''
    defaultData.address.city = defaultAddress.city || ''
    defaultData.address.address_text = defaultAddress.address_text || ''
  }

  if (userData) {
    defaultData.user.first_name = userData.first_name 
    defaultData.user.last_name = userData.last_name
    defaultData.user.phone_number = userData.phone_number
  }

  return defaultData
})
