import {createSlice} from '@reduxjs/toolkit'
import { fetchingProductPower} from "./services"
import {IProductStatePower} from '../models/interface'

const initialState:IProductStatePower = {
    prodPower:[],
    isLoading:false,
    error:undefined
}


const ProductSlicePower = createSlice({
    name:'productPower',
    initialState,
    reducers:{},
    extraReducers:(builder) =>{
        builder.addCase(fetchingProductPower.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchingProductPower.fulfilled, (state, action)=> {
            state.isLoading = false;
            state.prodPower = action.payload;
        })
        builder.addCase(fetchingProductPower.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message
        })
    }
})

export default ProductSlicePower.reducer