"use strict";
// Định nghĩa abstract class Person có thuộc tính name và phương thức displayInfo để in thông tin.
// Định nghĩa lớp Student kế thừa lớp Person và có thêm thuộc tính id. Khởi tạo đối tượng từ lớp Student và dùng phương thức displayInfo để in id và tên sinh viên.
// Định nghĩa lớp Teacher kế thừa lớp Person và có thêm thuộc tính subject. Khởi tạo đối tượng từ lớp Teacher và dùng phương thức displayInfo để in tên giáo viên và môn học.
class Person {
    constructor(name) {
        this.name = name;
    }
}
class Student extends Person {
    constructor(name, id) {
        super(name);
        this.displayInfo = () => {
            return `tên: ${this.name} id: ${this.id}`;
        };
        this.id = id;
    }
}
class Teacher extends Person {
    constructor(name, subject) {
        super(name);
        this.displayInfo = () => {
            return `tên: ${this.name} id: ${this.subject}`;
        };
        this.subject = subject;
    }
}
let stu1 = new Student("kha", 11);
let giaoVine = new Teacher("Hi", "toan");
console.log(stu1.displayInfo());
console.log(giaoVine.displayInfo());
