const removeProductById = (id) => {
  fetch(`http://localhost:9998/products/${id}`, { method: "DELETE" })
    .then((res) => res.json())
    .then((data) => console.log(data));
};
removeProductById(3);
