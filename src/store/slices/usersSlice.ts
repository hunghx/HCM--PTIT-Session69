// cấu hình reducer và thunk để call api

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loginApi, registerApi } from "../../service/user/auth";
import { instance } from "../../service";
import { UserType } from "../../config/intefaces";
const userLogin : UserType| null = null

const initState = {
    isLoading: false,
    error: "",
    userLogin: userLogin 
}
export const loginUser : any = createAsyncThunk('user/login',(data : {email:string, password:string})=>{
    return loginApi(data);
})

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

        builder.addCase(loginUser.fulfilled,(state,action)=>{
           // đăng nhập thành công 
           console.log(action);
           localStorage.setItem('access_token',action.payload.accessToken);
           state.userLogin = action.payload.user
        })
    }
})

export const {reducer} = userSlice;