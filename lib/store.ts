import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '@/lib/features/counter/counterSlice'
import searchBarReducer from '@/lib/features/nav/searchBarSlice'
import mobileNavReducer from '@/lib/features/nav/mobileNavSlice'
import userReducer from '@/lib/features/user/userSlice'
import cartReducer from '@/lib/features/cart/cartSlice'
import navCartReducer from '@/lib/features/nav/navCartSlice'
import productsReducer from '@/lib/features/products/productsSlice'
import productReducer from '@/lib/features/products/productSlice'
import { useDispatch } from 'react-redux'

export const useAppDispatch = () => useDispatch<AppDispatch>()

export const makeStore = () => {
    return configureStore({
        reducer: {
            counter: counterReducer,
            searchBar: searchBarReducer,
            mobileNav: mobileNavReducer,
            navCart: navCartReducer,
            user: userReducer,
            cart: cartReducer,
            products: productsReducer,
            product: productReducer,
        },
        devTools: process.env.NODE_ENV !== 'production',
    })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']