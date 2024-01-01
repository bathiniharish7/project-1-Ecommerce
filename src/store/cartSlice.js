import { createSlice } from "@reduxjs/toolkit";

const initialState=[];
const cartSlice = createSlice(
    {
        name:'cart',
        initialState:initialState,
        reducers:
        {
            add:(state,action)=>{
                state.push(action.payload);
            },
            remove:(state,action)=>{
                return state.filter(item=>item.id !== action.payload)
            }
        }

    }
)

//actions gives state as []
export default cartSlice.reducer;

export const {add,remove} = cartSlice.actions;