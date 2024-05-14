// Dùng để kiểm tra xem có ít nhất một phần tử trong mảng thỏa mãn điều kiện được
// xác định bởi hàm callback.
// ● Trả về ‘true’ nếu có ít nhất một phần tử thoả mãn
// ● Trả về ‘false’ nếu không có phần tử nào thỏa mãn
// ● Cú pháp tổng quát: array.some(function(currentValue, index, arr), thisValue)

// some -kiểm tra 1  phần tử phải thõa ĐK

let arr = [1, 4, 8, 10, 5];
let check = arr.some((num) => num % 3 == 0);
console.log(check);
// trả về đúng sai
// every - kiểm tra tất cả các phần tử phải thõa ĐK

let arr1 = [3, 9];
let check1 = arr1.every((num) => num % 3 == 0);
console.log(check1);
// sort

let arrSort = arr.sort((a, b) => a - b);
console.log(arrSort);
// bài tập
const products = [
  { id: 1, name: "sp1", price: 100, stock: 100 },
  { id: 2, name: "sp2", price: 90, stock: 100 },
  { id: 3, name: "sp3", price: 150, stock: 100 },
];
console.log(products.sort((a, b) => a.price - b.price));
///a
