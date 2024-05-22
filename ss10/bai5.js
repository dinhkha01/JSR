"use strict";
class Department {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.employees = [];
    }
    describe() {
        console.log(`${this.id} ${this.name}`);
    }
    addEmployees(str) {
        this.employees.push(str);
    }
    inEmployees() {
        return this.employees;
    }
}
const department = new Department(1, "hi");
department.addEmployees("bin");
department.addEmployees("he");
department.describe();
console.log(department.inEmployees());
