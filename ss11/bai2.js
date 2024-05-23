"use strict";
class Employ {
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    println() {
        console.log(`${this.name} ${this.company} ${this.phone}`);
    }
}
class manager extends Employ {
    constructor(teamSize) {
        super("khane", "hae", 2833);
        this.teamSize = teamSize;
    }
    println() {
        console.log(`${this.name} ${this.company} ${this.teamSize}`);
        super.println();
    }
}
let emplofff = new Employ("he", "ke", 1);
let kha = new manager(10);
emplofff.println();
kha.println();
