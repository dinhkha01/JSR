import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export interface Product {
  id: number;
  name: string;
  img: string;
  datem: string;
  datet: string;
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
export const switchStatus: any = createAsyncThunk(
  "products/switchStatus",
  async ({ id, status }: { id: number; status: boolean }) => {
    const { data } = await axios.patch(`http://localhost:9998/products/${id}`, {
      status,
    });
    return data;
  }
);
export const addProduct: any = createAsyncThunk(
  "products/addProduct",
  async (product: Product) => {
    const { data } = await axios.post(
      "http://localhost:9998/products",
      product
    );
    return data;
  }
);
export const editProduct: any = createAsyncThunk(
  "products/editProduct",
  async (product: Product) => {
    const { data } = await axios.put(
      `http://localhost:9998/products/${product.id}`,
      product
    );
    return data;
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
    builder.addCase(switchStatus.fulfilled, (state, action) => {
      const index = state.items.findIndex(
        (product) => product.id === action.payload.id
      );
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    });
    builder.addCase(addProduct.fulfilled, (state, action) => {
      state.items = [...state.items, action.payload];
    });
    builder.addCase(editProduct.fulfilled, (state, action) => {
      const index = state.items.findIndex(
        (product) => product.id === action.payload.id
      );
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    });
  },
});

export const productsReducer = productsSlice.reducer;
export const productsActions = productsSlice.actions;
