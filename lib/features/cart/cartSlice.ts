import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Product {
  id: number
  name: string
  price: number
  image: any
  description: string
  tags: any
  sizes: any
}

interface CartItem {
  id: number | null
  product: Product
  quantity: number
}

interface CartState {
  items: CartItem[]
}

const initialState: CartState = {
  items: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      const itemExists = state.items.some(item => item.product.id === action.payload.product.id)

      if (!itemExists) {
        state.items.push(action.payload)
      }
    },
    removeItem: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(
        item => item.product.id !== action.payload
      )
    },
    clearCart: (state) => {
      state.items = []
    },
    changeCartItemQuantity: (state, action: PayloadAction<{ cartItemId: number, newQuantity: number }>) => {
      const { cartItemId, newQuantity } = action.payload
      const itemIndex = state.items.findIndex(item => item.product.id === cartItemId)
      if (itemIndex >= 0) {
        state.items[itemIndex].quantity = newQuantity
      }
    },
  },
})

export const { addItem, removeItem, clearCart, changeCartItemQuantity } = cartSlice.actions
export default cartSlice.reducer
