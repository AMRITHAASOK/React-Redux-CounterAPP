import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name:'counter',
    initialState:{
        count : 0
    },
    reducers:{
        increment : (state)=>{
            state.count++
        },
        decrement : (state)=>{
            state.count-- //state.count = state.count -1
        },
        reset : (state)=>{
            return {...state,count:0} //state.count = 0
        },
        incrementByAmount : (state,actionByCounter)=>{
            state.count += actionByCounter.payload
        }
    }
})

export const {increment,decrement,reset,incrementByAmount} = counterSlice.actions
export default counterSlice.reducer
