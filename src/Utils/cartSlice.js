import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state,action) =>{
            state.items.push(action.payload);
        },
        removeItem: (state, action) => {
            // Check if there are items in the array before removing the last one
            if (state.items.length > 0) {
              // Create a new array without the last item
              state.items.pop(); // This mutates the original array, but in this case, it's removing the last item
            } else {
              console.error("Cannot remove the last item from an empty array.");
            }
          },
          
        clearCart:(state)=>{
            state.items = [];
        }
    }
})

export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;