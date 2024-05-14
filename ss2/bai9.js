const carts = [
  {
    product_name: "Cam",
    price: 2,
    quantity: 5,
  },
  {
    product_name: "Táo",
    price: 3,
    quantity: 3,
  },
  {
    product_name: "Xoài",
    price: 4,
    quantity: 2,
  },
];
function totalPrice(carts) {
  let tien = carts.reduce((temp, a) => temp + a.price * a.quantity, 0);
  return tien;
}

console.log(totalPrice(carts));
