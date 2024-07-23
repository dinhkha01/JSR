// import { reducer } from './index';
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { Product, ProductsState } from "../../../components/interface/inter";

export const getProducts: any = createAsyncThunk(
  "products/getProducts",
  async () => {
    const res = await axios.get("http://localhost:9998/products");
    return res.data;
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
    const res = await axios.patch(`http://localhost:9998/products/${id}`, {
      status,
    });
    return res.data;
  }
);
export const addProduct: any = createAsyncThunk(
  "products/addProduct",
  async (product: Product) => {
    const res = await axios.post("http://localhost:9998/products", product);
    return res.data;
  }
);
export const editProduct: any = createAsyncThunk(
  "products/editProduct",
  async (product: Product) => {
    const res = await axios.put(
      `http://localhost:9998/products/${product.id}`,
      product
    );
    return res.data;
  }
);

export const hi = createSlice({
  name: "products",
  initialState: { items: [] as Product[], isloading: false, error: null },
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

export const { reducer } = hi;
