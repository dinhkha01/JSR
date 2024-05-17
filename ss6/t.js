"use strict";
let arr = [0, 1, 2, 3, 4, 5];
const sum = (arr) => {
    return arr.reduce((temp, sum) => temp + sum, 0);
};
console.log(sum(arr));
const arrStr = "nguyen dinh kha";
const check = (arrStr, check) => {
    return arrStr.startsWith(check);
};
console.log(check(arrStr, "nguyen"));
