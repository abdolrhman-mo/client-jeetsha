import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '@/lib/features/counter/counterSlice'
import searchBarReducer from '@/lib/features/nav/searchBarSlice'
import mobileNavReducer from '@/lib/features/nav/mobileNavSlice'
import userReducer from '@/lib/features/user/userSlice'

export const makeStore = () => {
    return configureStore({
        reducer: {
            counter: counterReducer,
            searchBar: searchBarReducer,
            mobileNav: mobileNavReducer,
            user: userReducer,
        },
        devTools: process.env.NODE_ENV !== 'production',
    })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']