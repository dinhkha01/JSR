"use strict";
/// type Tuple : mảng cố định
var _a;
let arrCodinh;
arrCodinh = [10, "kha", true];
console.log(arrCodinh);
/// option readonly
let num = 10; /// khai báo ngầm định
// num = "10";
let number1 = [10, 11]; // dùng để sử dụng phần tử trong mảng chứ ko thay đổi giá trị của phần tử được
// từ khóa: class
class User2 {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
}
//// type guard
/// instance of kiểm tra kiểu dữ liệu của 1 đối tượng
let stu = new User2(1, "kha", 20);
let stuFake = {
    id: 2,
    name: "bin",
    age: 19,
};
console.log(stu instanceof User2);
console.log(stuFake instanceof User2);
//// toán tử in /// dùng để xác định thuộc tính trong object
console.log("id" in User2);
console.log("sex " in User2);
// Type casting
// toán tử as: như là
let t = (a, b) => {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    else {
        return String(a) + String(b);
    }
};
let result = t(1, 2);
console.log(typeof result);
/// hay dùng
let resul = t(1, 2);
console.log(typeof resul);
//toán tử Optional chaining "?."
let username = stu === null || stu === void 0 ? void 0 : stu.name;
console.log(username);
let userTest = {
    id: 10,
    name: { id: 2, name: "bin", age: 19 },
    age: 10,
};
let usr = (_a = userTest === null || userTest === void 0 ? void 0 : userTest.name) === null || _a === void 0 ? void 0 : _a.name;
console.log(usr);
