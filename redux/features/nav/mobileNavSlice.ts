import { createSlice } from "@reduxjs/toolkit";

interface MobileNavState {
    value: boolean
}

const initialState: MobileNavState = {
    value: false
}

const mobileNavSlice = createSlice({
    name: 'mobileNav',
    initialState,
    reducers: {
        toggleMobileNav: state => {
            state.value = !state.value
        }
    }
})


export const { toggleMobileNav } = mobileNavSlice.actions

export const selectMobileNav = (state: any) => state.mobileNav.value

export default mobileNavSlice.reducer