import { createStore } from "redux";
// import { configureStore } from "@reduxjs/toolkit";
// import { root } from "./reducers";

import { combineReducers } from "redux";
import { reducer1 } from "./reducers/bai1";
import { reducer2 } from "./reducers/bai2";
import { reducer3 } from "./reducers/bai3";
import { reducer4 } from "./reducers/bai4";
import { reducer5 } from "./reducers/bai5";
import { reducer7 } from "./reducers/bai7";
import { reducer } from "./reducers";
import { configureStore } from "@reduxjs/toolkit";

const RootReducer = combineReducers({
  userStore: reducer1,
  userStore2: reducer2,
  userStore3: reducer3,
  userStore4: reducer4,
  userStore5: reducer5,
  userStore7: reducer7,
  count: reducer,
});

export type StoreInterface = ReturnType<typeof RootReducer>;

export const store = configureStore({
  reducer: RootReducer,
});
