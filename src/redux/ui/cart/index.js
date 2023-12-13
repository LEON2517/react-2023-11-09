import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {},
  reducers: {
    increment: (state, action) => {
      const dishId = action.payload;

      state[dishId] = state[dishId] ? state[dishId]+1 : 1;

/*      return {
        ...state,
        [dishId]: state[dishId] ? state[dishId]+1 : 1
      }*/
    },
    decrement: (state, action) => {
      const dishId = action.payload;

      state[dishId] = state[dishId]>=0 ? state[dishId]-1 : 0;

/*      return {
        ...state,
        [dishId]: state[dishId]>=0 ? state[dishId]-1 : 0
      }*/
    }
  }
})

export const cartActions = cartSlice.actions;