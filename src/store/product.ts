import {createSlice} from "@reduxjs/toolkit"
import { fetchingProductSeeds} from "./services"
import {IProductStateSeed} from '../models/interface'

const initialState:IProductStateSeed = {
    prodSeed:[],
    isLoading:false,
    error: undefined,
}

 const ProductSlice = createSlice({
    name:'product',
    initialState,
    reducers:{},
    extraReducers: (builder) =>{
        builder.addCase(fetchingProductSeeds.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchingProductSeeds.fulfilled, (state, action) => {
            state.isLoading = false;
            state.prodSeed= action.payload; 
        })
        builder.addCase(fetchingProductSeeds.rejected, (state,action) => {
            state.isLoading = false;
            state.error = action.error.message
        })
    }
})
export default ProductSlice.reducer