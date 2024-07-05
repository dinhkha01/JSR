"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const fibonacci = (n) => __awaiter(void 0, void 0, void 0, function* () {
    return new Promise((resolve, reject) => {
        if (n <= 0) {
            reject(new Error("Dữ liệu nhập vào không hợp lệ"));
        }
        else {
            resolve(fib(n));
        }
    });
});
const fib = (n) => {
    if (n <= 2) {
        return 1;
    }
    else {
        return fib(n - 1) + fib(n - 2);
    }
};
fibonacci(9)
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
