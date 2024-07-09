const getProductById = (id) => {
  if (id) {
    const apiUrl = `http://localhost:9998/products/${id}`;
    fetch(apiUrl)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Không tìm thấy bản ghi");
        }
        return res.json();
      })
      .then((data) => console.log(data));
  } else {
    console.log("Không tìm thấy bản ghi");
  }
};

// Gọi hàm với một id bất kỳ
getProductById(0);
