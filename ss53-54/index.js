"use strict";
/// hàm in ra tên
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
function printName(name) {
    return new Promise((resolve, reject) => {
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
const getAll = () => __awaiter(void 0, void 0, void 0, function* () {
    yield printName("Kha");
    yield printName("Ha");
    yield printName("Khai");
    yield printName("o");
});
getAll();
