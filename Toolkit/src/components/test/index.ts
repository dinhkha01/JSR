import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export interface Product {
  id: number;
  name: string;
  img: string;
  price: string;
  quantity: string;
  date: string;
  status: boolean;
  // Add other product properties as needed
}
export interface ProductsState {
  items: Product[];
}
export const getProducts: any = createAsyncThunk(
  "products/getProducts",
  async () => {
    const { data } = await axios.get("http://localhost:9998/products");
    return data;
  }
);

export const deleteProuct: any = createAsyncThunk(
  "products/deleteProduct",
  async (id: number) => {
    await axios.delete(`http://localhost:9998/products/${id}`);
    return id;
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState: { items: [] } as ProductsState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProducts.fulfilled, (state, action) => {
      state.items = action.payload;
    });
    builder.addCase(deleteProuct.fulfilled, (state, action) => {
      state.items = state.items.filter(
        (products) => products.id !== action.payload
      );
    });
  },
});

export const productsReducer = productsSlice.reducer;
export const productsActions = productsSlice.actions;
