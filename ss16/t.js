"use strict";
let numberList = [1, 2, 3];
const key = "id";
const class1 = [{ name: "kha", id: 1 }];
////
const getTurple = (a, b) => {
    return [a, b];
};
console.log(getTurple(1, "kha"));
console.log(getTurple(undefined, 10));
//// bài tập: truyền vào 2 đối số. Nếu 2 đối số đều là number thì trả về tổng 2 số nếu là string thì nối chuỗi nếu không thì thông báo lỗi
const check1 = (a, b) => {
    if (typeof a === typeof b) {
        // return a + b;
    }
    else {
        console.error;
    }
};
console.log(check1(10, 10));
console.log(check1("10", "10"));
console.log(check1(10, "10"));
class stu {
    constructor(weight, height, name) {
        this.height = height;
        this.weight = weight;
        this.name = name;
    }
}
/////////////////////////////////////////////////////
const prinInfo = (humand) => {
    console.log(humand.height, humand.weight);
};
const st = new stu(30, 90, "Kha");
const st1 = st;
prinInfo(st);
//////////////////////////////////////////////////////////
//ép kiểu ngầm định: quan hệ kế thừa - thằng cha có gì con có
// ép kiểu tường minh: từ cha về con -<type children>
const prinInfoStu = (humand) => {
    console.log(humand.height, humand.weight, humand.name);
};
const st2 = new stu(30, 90, "Kha");
prinInfoStu(st1);
class Array1 extends Object {
    constructor() {
        super(...arguments);
        this.data = [];
    }
    push(item) {
        this.data.push(item);
    }
    pop() {
        return this.data.pop();
    }
    toString() {
        return this.data.toString();
    }
}
let arrFake = new Array1();
arrFake.push(1);
arrFake.push(3);
arrFake.push(2);
console.log(arrFake);
//static generic với phương thức đặc biệt
class Num1 {
    constructor(so) {
        Num1.so = so;
    }
    static callx2() {
        return Num1.so * 2;
    }
    static sum(a, b) {
        return Number(a) + Number(b);
    }
}
Num1.so = 0;
// Không cần khởi tạo đối tượng vẫn có thể truy xuất các thành phần tĩnh
// Nếu như khởi tạo đối tượng\\
console.log(Num1.so);
console.log(Num1.sum(2, 5));
/// quản lý sản phẩm
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}
// class ProductManager implements IProduct {
//   Products: Product[] = [];
//   create(item: Product): void {}
//   findAll(): Product[] {}
//   findById(id: string): Product {}
//   update(item: Product): void {}
//   dalete(id: string): void {}
// }
