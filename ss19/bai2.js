"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// Hàm decorator factory function
function validateArguments(validationRules) {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            for (let i = 0; i < args.length; i++) {
                const rule = validationRules[i];
                if (!rule || !rule(args[i])) {
                    throw new Error(`Argument at position ${i} does not meet validation criteria.`);
                }
            }
            return originalMethod.apply(this, args);
        };
        return descriptor;
    };
}
// Quy tắc kiểm tra số dương
function isPositive(param) {
    return param > 0;
}
// Quy tắc kiểm tra chuỗi không rỗng
function isNonEmptyString(param) {
    return param.trim() !== "";
}
class Example {
    processInput(id, name) {
        console.log(`Processing input: ID=${id}, Name=${name}`);
    }
}
__decorate([
    validateArguments([isPositive, isNonEmptyString]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, String]),
    __metadata("design:returntype", void 0)
], Example.prototype, "processInput", null);
const example1 = new Example();
example1.processInput(1, "John"); // Output: Processing input: ID=1, Name=John
example1.processInput(-1, "Alice"); // Throws an error: Argument at position 0 does not meet validation criteria.
example1.processInput(2, ""); // Throws an error: Argument at position 1 does not meet validation criteria.
