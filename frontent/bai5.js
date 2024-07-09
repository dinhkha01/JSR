const fakeData = {
  id: "3",
  name: "banh ngot",
  img: "note",
  price: "100000",
  quantity: "10",
  created_at: "07/09/2024",
};

const createProduct = () => {
  fetch("http://localhost:9998/products", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(fakeData),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
};
createProduct();
