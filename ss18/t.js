"use strict";
// function logger(
//   target: any,
//   propertyName: string,
//   descriptor: PropertyDescriptor
// ) {
//   const temp = descriptor.value;
//   descriptor.value = (...args: any[]) => {
//     return temp(...args);
//   };
// }
// class test {
//   @logger
//   sum(a: number, b: number) {
//     return a + b;
//   }
// }
// const t = new test();
// console.log(t.sum(2, 6));
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function Logger(target) {
    return class extends target {
        constructor() {
            super(...arguments);
            this.address = "hi";
            this.id = 0;
            this.name = "kha";
        }
        geet() {
            return `helo ne ${this.name}`;
        }
    };
}
function pow(value) {
    return function (target, propertyName, descriptor) {
        let old = descriptor.value;
        descriptor.value = function (...args) {
            return Math.pow(old(...args), value);
        };
    };
}
let student = class student {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    geet() {
        return `helo ${this.name}`;
    }
};
student = __decorate([
    Logger,
    __metadata("design:paramtypes", [Number, String])
], student);
let stud = new student(1, "hi");
console.log(stud);
console.log(stud.geet());
