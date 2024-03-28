import { createSlice } from "@reduxjs/toolkit";
import { getCurrentUserThunk, loginThunk } from "./action";
import { ETypeAlert, showAlert } from "../../../../shared/helpers/alert";
import { IUser } from "../../models/interface";

export interface IAuthenticationState {
    isLogged: boolean
    currentUser: IUser
}

export const authenticationSlice = createSlice({
    name: 'authentication',
    initialState: {
        isLogged: localStorage.getItem('accessToken') ? true : false,
        currentUser: {} as IUser
    } as IAuthenticationState,
    reducers: {
        logout: (state) => {
            state.isLogged = false
            localStorage.removeItem("accessToken")
            showAlert("Bạn đã đăng xuất", ETypeAlert.SUCCESS)
        }
    },
    extraReducers: builder => {
        builder
            .addCase(loginThunk.pending, (state, action) => {
                //TODO: login pending
            })
            .addCase(loginThunk.fulfilled, (state, action) => {
                localStorage.setItem("accessToken", action.payload.access)
                localStorage.setItem("refreshToken", action.payload.refresh)
                showAlert("Đăng nhập thành công", ETypeAlert.SUCCESS)
                state.isLogged = true
            })
            .addCase(loginThunk.rejected, () => {
                showAlert("Email hoặc mật khẩu không đúng", ETypeAlert.ERROR)
            })
            .addCase(getCurrentUserThunk.fulfilled, (state, action) => {
                state.currentUser = action.payload
            })
    }
})