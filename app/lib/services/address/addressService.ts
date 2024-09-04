import { AddressRequest } from "../../types/addressTypes"
import { OrderRequest } from "../../types/orderTypes"
import { transformAddressData } from "./addressUtility"

const API_URL = process.env.NEXT_PUBLIC_API_URL

export const fetchAddressesAPI = async () => {
    try {
        const res = await fetch(`${API_URL}/address/`, {
            method: 'GET',
            headers: {
            'Content-Type': 'application/json',
            'Authorization': `Token ${localStorage.getItem('authToken')}`,
            },
        })
        if (!res.ok) {
            console.error(`Error fetching cart items: ${res.statusText}`)
            return []
        }
        const data = await res.json()
        const transformedData = await transformAddressData(data)
        
        return transformedData
    } catch (error) {
        console.error('Error fetching cart items:', error)
        return []
    }
}

export const editAddressAPI = async (
    addressId: number,
    addressData: AddressRequest
  ) => {
    try {
      const res = await fetch(`${API_URL}/address/${addressId}/`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${localStorage.getItem('authToken')}`,
        },
        body: JSON.stringify({
            id: addressId,
            user: localStorage.getItem('userId'),
            country: addressData.country,
            city: addressData.city,
            addressText: addressData.address_text,
            is_default: addressData.is_default,
        })
      })
      if (!res.ok) {
        console.error('Faild to update cart item quantity')
        return []
      }
      const data = await res.json()
      const transformedAddress = await transformAddressData([data])

      // console.log('Edited address', data)

      return transformedAddress[0]
    } catch (error) {
      console.error('Error updating quantity: ', error)
      return []
    }
}

export const addAddressAPI = async (
    addressData: AddressRequest
  ) => {
    try {
      const res = await fetch(`${API_URL}/address/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${localStorage.getItem('authToken')}`,
        },
        body: JSON.stringify({
          user: localStorage.getItem('userId'),
          country: addressData.country,
          city: addressData.city,
          addressText: addressData.address_text,
          is_default: addressData.is_default,
        })
      })
      if (!res.ok) {
        console.error('Faild to update cart item quantity')
        return []
      }
      const address = await res.json()
      const transformedAddress = await transformAddressData([address])

      // console.log('Added address', transformedAddress)
      
      return transformedAddress[0]
    } catch (error) {
      console.error('Error updating quantity: ', error)
      return []
    }
}

export const removeAddressAPI = async (
    id: number,
  ) => {
    try {
      const res = await fetch(`${API_URL}/address/${id}/`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${localStorage.getItem('authToken')}`,
        },
      })
      if (!res.ok) {
        console.error('Faild to update cart item quantity')
        return []
      }
      const data = await res.json()
      // console.log('Removed address', data)
      return data
    } catch (error) {
      console.error('Error updating quantity: ', error)
      return []
    }
}

export const fetchAddressesByIdAPI = async (
  addressId: number
) => {
  try {
      const res = await fetch(`${API_URL}/address/${addressId}/`, {
          method: 'GET',
          headers: {
          'Content-Type': 'application/json',
          'Authorization': `Token ${localStorage.getItem('authToken')}`,
          },
      })
      if (!res.ok) {
          console.error(`Error fetching cart items: ${res.statusText}`)
          return {}
      }
      const data = await res.json()
      const transformedAddress = await transformAddressData([data])
      
      return transformedAddress[0]
  } catch (error) {
      console.error('Error fetching cart items:', error)
      return {}
  }
}
