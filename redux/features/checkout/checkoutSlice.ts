import { OrderRequest, OrderType } from "@/app/lib/types/orderTypes"
import { createSlice } from "@reduxjs/toolkit"
import { fetchDefaultUserData } from "./checkoutThunk"

interface CheckoutState {
  defaultData: OrderRequest | null
  status: 'idle' | 'loading' | 'failed'
  error: string | null
}

const initialState: CheckoutState = {
  defaultData: null,
  status: 'idle',
  error: null,
}

const checkoutSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDefaultUserData.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchDefaultUserData.fulfilled, (state, action) => {
        state.defaultData = action.payload
        state.status = 'idle'
      })
      .addCase(fetchDefaultUserData.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message || 'Failed to fetch cart items'
      })
  }
})

export const { } = checkoutSlice.actions
export default checkoutSlice.reducer
