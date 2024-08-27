import { ProductType } from '@/app/lib/types'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ProductsState {
  items: ProductType[]
}

const initialState: ProductsState = {
  items: []
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    initializeProducts: (state, action: PayloadAction<ProductType[]>) => {
        state.items = action.payload
    }
  },
})

export const { initializeProducts } = productsSlice.actions
export default productsSlice.reducer