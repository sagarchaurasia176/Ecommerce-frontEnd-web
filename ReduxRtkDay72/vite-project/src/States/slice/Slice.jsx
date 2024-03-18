import { createSlice } from "@reduxjs/toolkit";
//store slice for redcer purpose

export const cartRedux = createSlice({
  //here it's also act as the array => 'cart'
  name: "cart",
  initialState: [],
  reducers: {
    add: (state, action) => {

      state.push(action.payload);
    },
    remove: (state, action) => {
      
      return state.filter((items) => items.id != action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const {add , remove} = cartRedux.actions;

export default cartRedux.reducer;
