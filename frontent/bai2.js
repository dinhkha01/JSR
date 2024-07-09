const getAllProduct = (api) => {
  fetch(api)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
};
getAllProduct("http://localhost:9998/products/1");
