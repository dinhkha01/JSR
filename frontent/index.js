// fetch("http://localhost:9998/products/1")
//   .then((res) => {
//     console.log(res);
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//     // ra dữ liệu
//   });
///////////////////////////////////////////////////////////////////////////////////
// xóa
// fetch("http://localhost:9998/products/3", { method: "DELETE" })
//   .then((res) => {
//     res.json();
//   })
//   .then((data) => console.log(data));

//////////////////////////////////////////////////////////////////////////////////
// thêm
const dataFake = {
  id: "5",
  name: "hi",
  price: "100000",
};
fetch("http://localhost:9998/products", {
  method: "POST",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  body: JSON.stringify(dataFake),
})
  .then((res) => {
    res.json();
  })
  .then((data) => console.log(data));
