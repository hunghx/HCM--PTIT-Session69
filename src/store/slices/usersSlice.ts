// cấu hình reducer và thunk để call api

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { registerApi } from "../../service/user/auth";
import { instance } from "../../service";

const initState = {
    isLoading: false,
    error: "",
    userLogin:{}
}

export const registerUser: any = createAsyncThunk('user/register',async (data:{})=>{
    // call api
    const res = await instance.post("register",data)

return res.data;
});


const userSlice = createSlice({
    name:"user",
    initialState : initState,
    reducers:{},
    extraReducers: (builder)=>{
        builder.addCase(registerUser.fulfilled,(state, action)=>{
            // cập nhật state
            state.userLogin = action.payload
            // lưu token vào local
            localStorage.setItem("access_token",action.payload.accessToken)
        })
    }
})

export const {reducer} = userSlice;