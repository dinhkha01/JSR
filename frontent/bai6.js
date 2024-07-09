const updateProductById = (id, updateData) => {
  fetch(`http://localhost:9998/products/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updateData),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
};
updateProductById(3, { name: "banh keo" });
