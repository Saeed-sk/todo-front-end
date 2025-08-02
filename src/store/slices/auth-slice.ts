import {createSlice, type PayloadAction} from '@reduxjs/toolkit'
import type {AuthStatus, UserType} from "../../types/auth.ts";
import {fetchUser} from "../thunks/auth-thunk.ts";

interface AuthPayload {
    token: string | null
}

interface AuthState {
    status: AuthStatus
    user: UserType | null
    token: string | null
}

const initialState: AuthState = {
    status: 'loading',
    token: localStorage.getItem("token"),
    user: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        changeUser: (state, action: PayloadAction<AuthPayload>) => {
            const {token} = action.payload
            if (token) {
                state.status = 'authenticated'
                state.token = token
                localStorage.setItem('token', token)
            } else {
                state.status = 'idle'
                state.user = null
                state.token = null
                localStorage.removeItem('token')
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUser.pending, (state) => {
            state.status = 'loading'
            state.user = null
        })
        builder.addCase(fetchUser.fulfilled, (state, action) => {
            state.status = 'loading'
            state.user = action.payload
        })
        builder.addCase(fetchUser.rejected, (state) => {
            state.status = 'idle'
            state.user = null
            state.token = null
        })
    }
})

export const {changeUser} = authSlice.actions;
export default authSlice.reducer;