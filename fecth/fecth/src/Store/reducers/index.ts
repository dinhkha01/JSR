// import { root } from "./index";
import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";
import { act_incremen_n } from "./../actions/index";
import { combineReducers } from "redux";

// export const reducer = (
//   state: number = 0,
//   action: { type: string; payload: number }
// ) => {
//   switch (action.type) {
//     case "INCREMENT_N":
//       state += action.payload;
//       return state;
//     case "DECREMENT_N":
//       state -= action.payload;
//       return state;
//     case "POWER_UP_N":
//       state = Math.pow(state, action.payload);
//       return state;

//     default:
//       return state;
//   }
// };
// export const root = combineReducers({ count: reducer });

//// sử dụng create action và create reducer

// export const act_incremen = createAction("INCREMENT_N");
// export const act_decremen = createAction("DECREMENT_N");

// const reducers = createReducer(0, (builder) => {
//   builder
//     .addCase(act_incremen, (state, action) => {
//       return state + 1;
//     })
//     .addCase(act_decremen, (state, action) => {
//       return state - 1;
//     });
// });
// export const rootReducer = combineReducers({ count: reducers });
// export type RootState = ReturnType<typeof rootReducer>;

///// createSlice

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
