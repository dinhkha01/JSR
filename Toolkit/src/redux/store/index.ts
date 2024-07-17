import { configureStore } from "@reduxjs/toolkit";

import { combineReducers } from "redux";
import { reducer } from "./reducers/t";
const RootReducer = combineReducers({
  count: reducer,
});

export type StoreInterface = ReturnType<typeof RootReducer>;

export const store = configureStore({
  reducer: RootReducer,
});
