/// hàm in ra tên

// const printName = (name: string, callback: Function) => {
//   let randomTime = Math.random() * 5 + 1;
//   setTimeout(() => {
//     console.log(name);
//     callback();
//   }, randomTime * 1000);
// };

// printName("kha", () => {
//   printName("Ha", () => {
//     printName("Hi", () => {
//       console.log("end");
//     });
//   });
// });

// đây là bất đồng bộ

// xử lí bất đồng bộ

// 3 cách xử lí bất đồng bộ:
// callback: 1 hàm làm than số của hàm khác
// asyn/ await
// promise

// tạo promise
// let promise = new Promise((resolve: Function, reject: Function) => {
//   //   resolve("Kha ne");
//   reject("Kha");
// });

// // sử dụng promise
// promise
//   .then((name) => {
//     console.log(name);
//     console.log("Ha");
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// console.log("ket thuc");
//// promise
function printName(name: string) {
  return new Promise((resolve: Function, reject) => {
    let time = Math.floor(Math.random() * 5) * 1000;
    console.log(time);
    setTimeout(() => {
      console.log(name);
      resolve();
    }, time);
  });
}
// printName("Kha")
//   .then(() => printName("Ha"))
//   .then(() => printName("Ai"))
//   .then(() => printName("hi"))
//   .catch((err) => console.log(err));

const getAll = async () => {
  await printName("Kha");
  await printName("Ha");
  await printName("Khai");
  await printName("o");
};
getAll();
