
import {createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios';


export const fetchingProductSeeds = createAsyncThunk(
    'products/fetchProductsSeed',
    async () => {
        try {
            const {data} = await axios.get('http://localhost:3000/garden')
            return data.seeds
        }
        catch(e) {
            console.error(e);
            throw e
        }
    }
)

export const fetchingProductHand = createAsyncThunk(
    'products/fetchingProductHand',
    async () => {
        try{
            const {data} = await axios.get('http://localhost:3000/garden')
            return data.hand_tools
        }
        catch(e) {
            console.error(e);
            throw e
        }
    }
)

export const fetchingProductPower = createAsyncThunk(
    'products/fetchingProducPower',
    async () => {
        try{
            const {data} = await axios.get('http://localhost:3000/garden')
            return data.power_tools
        }
        catch(e) {
            console.error(e);
            throw e
        }
    }
)