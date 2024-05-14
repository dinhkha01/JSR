// arraw Function

let ka = 5;
let bk = 6;
const sum = (a, b) => {
  return a + b;
};

console.log(sum(ka, bk));

const binhphuong = (a) => Math.pow(a, 2);
console.log(binhphuong(ka));
// Destructuring- phá vỡ cấu trúc : array và object
// array
let arr = [1, 2, 3, 4, 5];
let arr5 = [9, 8, 7, 6, 10];

// let [a, b] = arr;
// console.log(a, b);

let arr1 = { id: 1, name: "kha", age: 18 };

let { age, name } = arr1;
console.log(age, name);
// rest Parameter - tham số còn lại
// tính tổng n số chưa biết
const sum1 = (...Parameter) => {
  return Parameter.reduce((temp, num) => temp + num, 0);
};
let [a, b, ...Parameter] = arr;
console.log(Parameter);
console.log(sum1(1, 2, 3, 4, 5));
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
// spread operator: nhóm lại thành cấu trúc: array và object
let newArr = [1000, ...arr, 90];
console.log(newArr);

let arrC = arr.splice(2, 0);
let arrB = arr5.splice(2, 0);
let arrmoichen = [...arrC, ...arrB];
console.log(arrmoichen);

arr1 = { ...arr1, dui: "e" };
console.log(arr1);
//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
// for ... of : duyệt các phần tử trong mảng chỉ áp dụng trong mảng không dùng được với object
for (let key of arr) {
  console.log(key);
}

// for ... in thì cho lấy được object

for (let key in arr1) {
  console.log(key + " : " + arr1[key]);
}
