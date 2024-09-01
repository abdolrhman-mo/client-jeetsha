import { createSlice } from "@reduxjs/toolkit";

interface SearchBarState {
    value: boolean
}

const initialState: SearchBarState = {
    value: false
}

const searchBarSlice = createSlice({
    name: 'searchBar',
    initialState,
    reducers: {
        toggleSearchBar: state => {
            state.value = !state.value
        }
    }
})


export const { toggleSearchBar } = searchBarSlice.actions

export const selectSearchBar = (state: any) => state.searchBar.value

export default searchBarSlice.reducer