import { createSlice, type PayloadAction } from "@reduxjs/toolkit"
import type { StrapiAuthResponse, StrapiUser } from "./Auth.types"

interface AuthState {
    token: string | null
    isAuthenticated: boolean
    user: StrapiUser | null
}

interface ReduxAuthState {
    auth: AuthState
}

const initialState: AuthState = {
    token: null,
    isAuthenticated: false,
    user: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action: PayloadAction<StrapiAuthResponse>) => {
            state.token = action.payload.jwt
            state.isAuthenticated = true
            state.user = action.payload.user
        },
        logout: (state) => {
            state.token = null
            state.isAuthenticated = false
            state.user = null
        }
    }
})

export const {login, logout} = authSlice.actions
export default authSlice.reducer
export type { ReduxAuthState }