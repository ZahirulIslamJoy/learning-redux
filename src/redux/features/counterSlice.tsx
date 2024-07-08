import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from '@reduxjs/toolkit'
const initialState = {
    count : 0
}
const counterSlice=createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment : (state)=>{
            state.count +=1
        },
        incrementbyValue : (state ,action: PayloadAction<number>)=>{
            state.count += action.payload;
        },
        decrement : (state)=>{
            state.count -=1
        },
    }
})

export const {increment,decrement , incrementbyValue} = counterSlice.actions;

export default counterSlice.reducer;