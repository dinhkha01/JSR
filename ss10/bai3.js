"use strict";
class Employee {
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo() {
        console.log(`${this.name} ${this.company} ${this.phone}`);
    }
}
let te = new Employee("Kha", "Hong", 999922);
te.printInfo();
