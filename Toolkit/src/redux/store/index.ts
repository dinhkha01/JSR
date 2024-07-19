import { reducer } from "./reducers";

import { combineReducers, configureStore } from "@reduxjs/toolkit";

const root = combineReducers({
  products: reducer,
});

export const store: any = configureStore({
  reducer: root,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
