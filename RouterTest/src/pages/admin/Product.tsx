import React from "react";
import { Outlet } from "react-router-dom";

const Product = () => {
  return (
    <div>
      Products <Outlet />
    </div>
  );
};

export default Product;
