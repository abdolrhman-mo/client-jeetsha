import { AddressRequest } from "../../types/addressTypes"
import { OrderRequest } from "../../types/orderTypes"
import { transformAddressData } from "./addressUtility"

// const API_URL = process.env.NEXT_PUBLIC_API_URL

// Mock data
const mockAddresses: any[] = [
  {
    id: 1,
    user: 1,
    country: 'USA',
    city: 'New York',
    address_text: '123 Main St',
    is_default: true
  }
]

// Simulate delay
const delay = () => new Promise(resolve => setTimeout(resolve, 100))

export const fetchAddressesAPI = async () => {
  await delay()
  return mockAddresses
}

export const editAddressAPI = async (addressId: number, addressData: AddressRequest) => {
  await delay()
  const index = mockAddresses.findIndex(addr => addr.id === addressId)
  if (index !== -1) {
    mockAddresses[index] = { ...mockAddresses[index], ...addressData }
  }
  return mockAddresses[index] || {}
}

export const addAddressAPI = async (addressData: AddressRequest) => {
  await delay()
  const newAddress = {
    id: mockAddresses.length + 1,
    user: 1,
    ...addressData
  }
  mockAddresses.push(newAddress)
  return newAddress
}

export const removeAddressAPI = async (id: number) => {
  await delay()
  const index = mockAddresses.findIndex(addr => addr.id === id)
  if (index !== -1) {
    mockAddresses.splice(index, 1)
  }
  return { success: true }
}

export const fetchAddressesByIdAPI = async (addressId: number) => {
  await delay()
  return mockAddresses.find(addr => addr.id === addressId) || {}
}
