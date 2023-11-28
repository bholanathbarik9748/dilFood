"use client";

import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
    },
    removeFromCart: (state, action) => {
      return state.filter((item) => item != action.payload);
    },
  },
});

export const { addToCart, removeFromCart } = counterSlice.actions;

export default counterSlice.reducer;
