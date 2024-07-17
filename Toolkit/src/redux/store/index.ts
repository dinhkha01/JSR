import { productsReducer } from "../../components/test";

import { configureStore } from "@reduxjs/toolkit";

export const store: any = configureStore({
  reducer: {
    products: productsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
