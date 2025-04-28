import { createSlice } from '@reduxjs/toolkit'
import { addAddress, editAddress, fetchAddresses, removeAddress } from './addressThunk'
import { AddressResponse } from '@/app/lib/types/addressTypes'

interface AddressState {
  items: AddressResponse[]
  status: 'idle' | 'loading' | 'failed'
  error: string | null
}

const initialState: AddressState = {
  items: [],
  status: 'idle',
  error: null  
}

const addressSlice = createSlice({
  name: 'address',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAddresses.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchAddresses.fulfilled, (state, action) => {
        state.status = 'idle'
        state.items = action.payload
      })
      .addCase(fetchAddresses.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message || 'Failed to fetch cart items'
      })
      .addCase(addAddress.fulfilled, (state, action) => {
        const newAddress: AddressResponse = {
          ...action.payload,
          user_id: action.payload.user // Convert user to user_id
        }
        state.items.push(newAddress)

        // Unset other default addresses
        if (newAddress.is_default) {
          state.items.forEach(address => {
            if (address.is_default && address.id !== newAddress.id) {
              address.is_default = false              
            }
          })
        }
      })
      .addCase(editAddress.fulfilled, (state, action) => {
        const index = state.items.findIndex(item => item.id === action.payload.id)
        if (index !== -1) {
          state.items[index] = {
            ...action.payload,
            user_id: action.payload.user // Convert user to user_id
          }
        }

        // Unset other default addresses
        if (action.payload.is_default) {
          state.items.forEach(address => {
            if (address.is_default && address.id !== action.payload.id) {
              address.is_default = false
            }
          })
        }
      })
      .addCase(removeAddress.fulfilled, (state, action) => {
        state.items = state.items.filter(address =>
          address.id !== action.meta.arg.id
        )
      })
  }
})

export const { } = addressSlice.actions
export default addressSlice.reducer
