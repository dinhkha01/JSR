"use strict";
class Student {
    constructor(_id, _name) {
        this.id = _id;
        this.name = _name;
    }
    get _id() {
        return this.id;
    }
    get _name() {
        return this.name;
    }
}
class Classroom {
    constructor() {
        this.students = [];
    }
    addStudent(student) {
        this.students.push(student);
    }
    showStudents() {
        this.students.forEach((students) => {
            console.log(`id: ${students._id} name: ${students._name}`);
        });
    }
}
let allStudents = [
    new Student(1, "kha"),
    new Student(2, "ha"),
    new Student(3, "ta"),
    new Student(4, "ngoc"),
    new Student(5, "tran"),
    new Student(6, "hao"),
];
let class1 = new Classroom();
let class2 = new Classroom();
for (let i = 0; i < allStudents.length; i++) {
    if (i < 3) {
        class1.addStudent(allStudents[i]);
    }
    else {
        class2.addStudent(allStudents[i]);
    }
}
console.log("lop 1: ");
class1.showStudents();
console.log("lop 2: ");
class2.showStudents();
