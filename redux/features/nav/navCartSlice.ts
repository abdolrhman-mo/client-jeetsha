import { createSlice } from "@reduxjs/toolkit";

interface NavCartState {
    value: boolean
}

const initialState: NavCartState = {
    value: false
}

const navCartSlice = createSlice({
    name: 'navCart',
    initialState,
    reducers: {
        toggleNavCart: state => {
            state.value = !state.value
        }
    }
})


export const { toggleNavCart } = navCartSlice.actions

export const selectNavCart = (state: any) => state.navCart.value

export default navCartSlice.reducer