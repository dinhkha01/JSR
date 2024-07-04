import React from "react";
import { Route, Routes } from "react-router-dom";
import Product from "../pages/admin/Product";
import ProductList from "../layout/ProductList";
import ProductAdd from "../layout/ProductAdd";
import ProductEdit from "../layout/ProductEdit";
import HomePage from "../pages/user/HomePage";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/admin/product" element={<Product />} />
        <Route index element={<ProductList />} />
        <Route path="add" element={<ProductAdd />} />
        <Route path="edit" element={<ProductEdit />} />
      </Routes>
    </div>
  );
};

export default Router;
