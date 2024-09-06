import { OrderResponse, OrderType } from "@/app/lib/types/orderTypes"
import { createSlice } from "@reduxjs/toolkit"
import { fetchUserOrders } from "./orderUserThunk"

interface OrderState {
  items: OrderResponse[]
  status: 'idle' | 'loading' | 'failed'
  error: string | null
}

const initialState: OrderState = {
  items: [],
  status: 'idle',
  error: null,
}

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserOrders.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchUserOrders.fulfilled, (state, action) => {
        state.items = action.payload
        state.status = 'idle'
      })
      .addCase(fetchUserOrders.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message || 'Failed to fetch cart items'
      })
  }
})

export const { } = orderSlice.actions
export default orderSlice.reducer
