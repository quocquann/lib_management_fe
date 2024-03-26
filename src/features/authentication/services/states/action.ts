import { createAsyncThunk } from "@reduxjs/toolkit";
import apiRequest from "../api/apiRequest";

interface ILoginThunkParams {
    email: string,
    password: string
}

export const loginThunk = createAsyncThunk('auth/login', async ({email, password}:ILoginThunkParams) => {
    try {
        const data = apiRequest.login(email, password)
        return data
    } catch (e) {
        throw e
    }
})


export const getCurrentUserThunk = createAsyncThunk('auth/getUser', async () => {
    try {
        const data = apiRequest.getCurrentUser()
        return data
    } catch(e) {
        throw e
    }
})