import { createSlice } from "@reduxjs/toolkit";

export const { reducer, actions } = createSlice({
  name: "count",
  initialState: 0,
  reducers: {
    increment: (state, action) => {
      return (state += 100);
    },
    decrement: (state, action) => {
      return (state -= 100);
    },
  },
});
