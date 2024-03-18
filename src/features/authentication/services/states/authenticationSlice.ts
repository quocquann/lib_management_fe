import { createSlice } from "@reduxjs/toolkit";

export interface IAuthenticationState {
    email: string,
    password: string
}

export const authenticationSlice = createSlice({
    name: 'authentication',
    initialState: {
        email: '',
        password: '',
    } as IAuthenticationState,
    reducers: {
        setEmail: (state, action) => {
            state.email = action.payload
        },
        setPassword: (state, action) => {
            state.password = action.payload
        }
    }
})