import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { addItemToCart, changeCartItemQuantity, fetchBuyItNowItem, fetchCartItems, removeItemFromCart } from './cartThunk'
import { CartItemType } from '@/app/lib/types/cartTypes'
import { auth, logout } from '../auth/authThunk'

interface CartState {
  items: CartItemType[]
  status: 'idle' | 'loading' | 'failed'
  error: string | null
  totalPrice: number

  buyItNowItem: CartItemType | null
}

const initialState: CartState = {
  items: [],
  status: 'idle',
  error: null,
  totalPrice: 0,  
  
  buyItNowItem: null
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCartItems.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchCartItems.fulfilled, (state, action) => {
        state.items = action.payload
        // Total price
        let total: number = 0
        action.payload.map((cartItem: CartItemType) => {
          total += Number(cartItem.product.price) * Number(cartItem.quantity)
        })
        state.totalPrice = total
        state.status = 'idle'
      })
      .addCase(fetchCartItems.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message || 'Failed to fetch cart items'
      })
      .addCase(addItemToCart.fulfilled, (state, action) => {
        const { cartItem, changeQuantity } = action.payload
        const existingItem = state.items.find(item => 
          item.id === cartItem.id && item.size === cartItem.size
        )

        // Item is new in cart(!changeQuantity) => push it to cart items
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
            if (newQuantity >= 1)  {
              state.items[itemIndex].quantity = newQuantity
              state.totalPrice += Number(state.items[itemIndex].product.price)
            }
          }
        }
        state.status = 'idle'
      })
      .addCase(changeCartItemQuantity.fulfilled, (state, action) => {
        const { cartItemId, newQuantity } = action.payload
        const itemIndex = state.items.findIndex(item => item.id === cartItemId)
        if (itemIndex >= 0) {
          if (newQuantity < 1) {
            // Remove from items
            state.items.splice(itemIndex, 1)
          } else {
            if (newQuantity > state.items[itemIndex].quantity) {
              state.totalPrice += Number(state.items[itemIndex].product.price)
            } else {
              state.totalPrice -=  Number(state.items[itemIndex].product.price)
            }
            state.items[itemIndex].quantity = newQuantity
          }
        }
      })
      .addCase(removeItemFromCart.fulfilled, (state, action) => {
        // Update total price before removing item
        const cartItem = state.items.find(item =>
          item.id = action.payload
        )
        state.totalPrice -= Number(cartItem?.product.price) * Number(cartItem?.quantity)
        
        // Remove item
        state.items = state.items.filter(
          item => item.id !== action.payload
        )
      })

      // Buy it now item

      .addCase(fetchBuyItNowItem.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchBuyItNowItem.fulfilled, (state, action) => {
        state.buyItNowItem = action.payload
        state.status = 'idle'
      })
      .addCase(fetchBuyItNowItem.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message || ''
      })

      // Syncing items with local storage cart items after login & signup

      .addCase(auth.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(auth.fulfilled, (state, action) => {
        const { cartItems, error } = action.payload
        if (cartItems) {
          state.error = null
          state.items = cartItems
          let total: number = 0
          cartItems.map((cartItem: CartItemType) => {
            total += Number(cartItem.product.price * cartItem.quantity)
          })
          state.totalPrice = total
          state.status = 'idle'
        } else {
          state.status = 'failed'
          state.error = error
        }
      })
      .addCase(auth.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message || 'Failed to fetch cart items'
      })

      // Clear cart after logout

      .addCase(logout.fulfilled, (state) => {
        state.items = []
      })
  }
})

export const { } = cartSlice.actions
export default cartSlice.reducer
