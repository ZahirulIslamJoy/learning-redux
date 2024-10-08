import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value : 0
}


export const counterSlice=createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment :(state)=>{
            state.value +=1
        },
        decrement :(state)=>{
            state.value -=1
        },
        incrementBy5 :(state , action)=>{
            state.value = state.value + action.payload
        }
    }
})

export const {increment , decrement , incrementBy5} = counterSlice.actions
export default counterSlice.reducer