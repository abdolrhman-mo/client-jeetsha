import { ProductType } from '@/app/lib/types/productTypes'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ProductState {
  item: ProductType
}

const initialState: ProductState = {
  item: {
    id: 1,
    name: '',
    price: 1,
    image: '',
    description: '',
    tags: [],
    sizes: [],
  }
}

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProduct: (state, action: PayloadAction<ProductType>) => {
        state.item = action.payload
    },
    decreaseSizeQuantity: (state, action: PayloadAction<{ productId: number, sizeText: string}>) => {
        if (!state.item) return

        if (state.item.id === action.payload.productId) {
            const sizeToUpdate = state.item.sizes.find(s => s.size_text === action.payload.sizeText)
            if (sizeToUpdate && sizeToUpdate.quantity > 0) {
                sizeToUpdate.quantity -= 1
            }
        }
    }
  },
})

export const { setProduct, decreaseSizeQuantity } = productSlice.actions
export default productSlice.reducer