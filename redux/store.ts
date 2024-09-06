import { useDispatch } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import searchBarReducer from '@/redux/features/nav/searchBarSlice'
import mobileNavReducer from '@/redux/features/nav/mobileNavSlice'
import cartReducer from '@/redux/features/cart/cartSlice'
import navCartReducer from '@/redux/features/nav/navCartSlice'
import productsReducer from '@/redux/features/products/productsSlice'
import productReducer from '@/redux/features/products/productSlice'
import addressReducer from '@/redux/features/address/addressSlice'
import orderReducer from '@/redux/features/orders/orderUserSlice'
import orderAdminReducer from '@/redux/features/orders/orderAdminSlice'
import checkoutReducer from '@/redux/features/checkout/checkoutSlice'

export const useAppDispatch = () => useDispatch<AppDispatch>()

export const makeStore = () => {
    return configureStore({
        reducer: {
            searchBar: searchBarReducer,
            mobileNav: mobileNavReducer,
            navCart: navCartReducer,
            cart: cartReducer,
            products: productsReducer,
            product: productReducer,
            address: addressReducer,
            order: orderReducer,
            orderAdmin: orderAdminReducer,
            checkout: checkoutReducer,
        },
        devTools: process.env.NODE_ENV !== 'production',
    })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']