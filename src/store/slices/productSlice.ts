

// khai báo các thunk 

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAllProduct } from "../../service/admin/product";
import { ProductType } from '../../config/intefaces/index';

// lấy về danh sách
export const fetchAllProduct : any = createAsyncThunk('product/getAll', async()=>{
    let res = await getAllProduct();
    return res.data;
})

const init: ProductType[] = [] 
// khai báo slice 
const productSlice = createSlice({
    name: "products",
    initialState: {
        isLoading: false,
        error: "",
        products: init,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchAllProduct.pending, (state) => {
            // bắt đầu call api
            state.isLoading = true;
        });
        builder.addCase(fetchAllProduct.fulfilled, (state, action) => {
            // đã nhận đc data trả vể
            state.isLoading = false;
            state.products = action.payload;
        });
        builder.addCase(fetchAllProduct.rejected, (state, action) => {
            // xử lí lỗi
            state.isLoading = false;
            state.error = action.error.message;
        });
    }
}
) 

export const { reducer } = productSlice;