import {auth} from "../index"

const getAllUsers = async()=>{
   let res = await auth.get("660/users")
   return res.data;
}