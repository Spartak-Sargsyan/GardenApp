import {configureStore} from '@reduxjs/toolkit'
import products from './product'
import productsHand from './productHand'
import productsPower from './productPower'

export const store = configureStore({
    reducer:{
        products:products,
        productsHand:productsHand,
        productsPower:productsPower,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;