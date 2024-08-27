import { CartItemType } from '@/app/lib/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CartState {
  items: CartItemType[]
  totalPrice: number
}

const initialState: CartState = {
  items: [],
  totalPrice: 0  
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCartItems: (state, action: PayloadAction<CartItemType[]>) => {
      state.items = action.payload
      let total: number = 0
      state.items.map(cartItem => {
        total += Number(cartItem.product.price * cartItem.quantity)
      })
      state.totalPrice = total
    },
    addItem: (state, action: PayloadAction<CartItemType>) => {
      const existingItem = state.items.find(item => 
        item.id === action.payload.id && item.size === action.payload.size
      )

      if (!existingItem) {
        state.items.push(action.payload)
        state.totalPrice += Number(action.payload.product.price)
      }
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(
        item => item.id !== action.payload
      )
    },
    clearCart: (state) => {
      state.items = []
    },
    changeCartItemQuantity: (state, action: PayloadAction<{ cartItemId: number, newQuantity: number }>) => {
      const { cartItemId, newQuantity } = action.payload
      const itemIndex = state.items.findIndex(item => item.id === cartItemId)
      if (itemIndex >= 0) {
        if (newQuantity < 1) {
          // remove from items
          // state.items.splice(itemIndex, 1)
        } else {
          state.items[itemIndex].quantity = newQuantity
          state.totalPrice += Number(state.items[itemIndex].product.price)
        }
      }
    },
    setTotalPrice: (state, action: PayloadAction<number>) => {
      state.totalPrice = action.payload
    }
  },
})

export const { setCartItems, addItem, removeItem, clearCart, changeCartItemQuantity, setTotalPrice } = cartSlice.actions
export default cartSlice.reducer
