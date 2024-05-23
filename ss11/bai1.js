"use strict";
class employ {
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    println() {
        console.log(`${this.name} ${this.company} ${this.phone}`);
    }
}
class Manager extends employ {
    constructor(temSize) {
        super("kha", "ha", 99833);
        this.temSize = temSize;
    }
    println() {
        console.log(`${this.name} ${this.company}  ${this.temSize}`);
    }
}
let employ1 = new employ("k", "s", 1);
let employ2 = new Manager(10);
employ1.println();
employ2.println();
