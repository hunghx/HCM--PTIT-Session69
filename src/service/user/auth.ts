

// api đăng nhập

import { instance } from ".."

// api đăng kí

export const registerApi = async(user : {})=>{
    const res = await instance.post("register",user)
    return res.data;
}