import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
    userInfo: any
    token: string | null
    loggedIn: boolean
}

const initialState: UserState = {
    userInfo: null,
    token: null,
    loggedIn: false,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<{ 
            userInfo: any 
            token: string
        }>) => {
            state.userInfo = action.payload.userInfo
            state.token = action.payload.token
        },
        clearUser: (state) => {
            state.userInfo = null
            state.token = null
        },
        toggleLoggedIn: state => {
            state.loggedIn = !state.loggedIn
        }
    }
})


export const { setUser, clearUser, toggleLoggedIn } = userSlice.actions

export default userSlice.reducer