import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '@/lib/features/counter/counterSlice'
import searchBarReducer from '@/lib/features/nav/searchBarSlice'

export const makeStore = () => {
    return configureStore({
        reducer: {
            counter: counterReducer,
            searchBar: searchBarReducer
        }
    })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']