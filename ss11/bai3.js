"use strict";
// Định nghĩa lớp Person có thuộc tính name và phương thức displayInfo để in thông tin. Định nghĩa lớp Student kế thừa lớp Person và có thêm thuộc tính id. Khởi tạo đối tượng từ lớp Student và dùng phương thức displayInfo để in thông tin.
class Person {
    constructor(_name) {
        this.name = _name;
    }
    displayInfo() {
        console.log(`${this.name}`);
    }
}
class Student extends Person {
    constructor(_id) {
        super("kha");
        this.id = _id;
    }
    displayInfo() {
        // chống ghi đè
        super.displayInfo();
        console.log(`${this.id}`);
    }
}
let stu = new Student(1);
stu.displayInfo();
