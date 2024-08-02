// cấu hình store

import { configureStore } from "@reduxjs/toolkit";
import { reducer as user } from "./slices/usersSlice";
import { reducer as product } from "./slices/productSlice";


export const store = configureStore({
    reducer:{
        user : user,
        product : product
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = ReturnType<typeof store.dispatch>