import {createSlice} from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name:"counter",
    initialState:{
        count:20
    },
    reducers:{
        increment: (state)=>{
            state.count +=1
        },
        decrement: (state)=>{
            if(state.count>0){
            state.count -=1
        }
        
        },
        incrementByValue:(state,action)=>{
            state.count += action.payload
        }
    }

})

export const {increment,decrement,incrementByValue} = counterSlice.actions
export default counterSlice.reducer