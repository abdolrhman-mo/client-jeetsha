import { CartItemType } from '@/app/lib/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { addToCart, fetchCartItems } from './cartThunk'

interface CartState {
  items: CartItemType[]
  status: 'idle' | 'loading' | 'failed'
  error: string | null
  totalPrice: number
}

const initialState: CartState = {
  items: [],
  status: 'idle',
  error: null,
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
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartItems.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchCartItems.fulfilled, (state, action) => {
        state.status = 'idle'
        state.items = action.payload
        let total: number = 0
        action.payload.map((cartItem: CartItemType) => {
          total += Number(cartItem.product.price * cartItem.quantity)
        })
        state.totalPrice = total
      })
      .addCase(fetchCartItems.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message || 'Failed to fetch cart items'
      })
      .addCase(addToCart.fulfilled, (state, action) => {
        const { cartItem, changeQuantity } = action.payload
        state.status = 'idle'
        const existingItem = state.items.find(item => 
          item.id === cartItem.id && item.size === cartItem.size
        )

        // Item is new in cart => push it to cart items
        if (!changeQuantity) {
          if (!existingItem) {
            state.items.push(cartItem)
            state.totalPrice += Number(cartItem.product.price)
          }
        }
        // Item is in cart => increase quantity by 1
        else {
          const cartItemId = cartItem.id
          const newQuantity = cartItem.quantity
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
        }
      })
  }
})

export const { setCartItems, addItem, removeItem, clearCart, changeCartItemQuantity, setTotalPrice } = cartSlice.actions
export default cartSlice.reducer
