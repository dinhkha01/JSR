import React, { useState } from "react";
type Product = {
  id: number;
  name: string;
  price: number;
  quantity: number;
};

export default function Bai2() {
  const [product, setProduct] = useState<Product>({
    id: 1,
    name: "Coca",
    price: 10,
    quantity: 100,
  });

  return (
    <div>
      <p>{product.id}</p>
      <p>{product.name}</p>
      <p>{product.price}</p>
      <p>{product.quantity}</p>
    </div>
  );
}
