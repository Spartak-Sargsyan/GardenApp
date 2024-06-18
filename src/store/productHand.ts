import {createSlice} from '@reduxjs/toolkit'
import { fetchingProductHand} from "./services"
import {IProductStateHand} from '../models/interface'

const initialState:IProductStateHand = {
    prodHand:[],
    isLoading:false,
    error:undefined
}


const ProductSliceSeed = createSlice({
    name:'productHand',
    initialState,
    reducers:{},
    extraReducers:(builder) =>{
        builder.addCase(fetchingProductHand.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(fetchingProductHand.fulfilled, (state, action)=> {
            state.isLoading = false;
            state.prodHand = action.payload;
        })
        builder.addCase(fetchingProductHand.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.error.message
        })
    }
})

export default ProductSliceSeed.reducer