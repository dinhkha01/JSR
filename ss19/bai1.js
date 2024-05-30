"use strict";
// Viết một hàm decorator factory gọi là “logDecorator” trả ra thông tin của hàm được gọi. Hàm decorator trả về tên hàm, tham số và kết quả.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function logDecorator(target, propertyKey, descriptor) {
    let old = descriptor.value;
    descriptor.value = (...arsg) => {
        console.log("Function Name:", propertyKey);
        console.log(`${JSON.stringify(arsg)}`);
        return old(...arsg);
    };
}
class Log {
    test(a, b) {
        return a + b;
    }
}
__decorate([
    logDecorator,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], Log.prototype, "test", null);
let t = new Log();
console.log(t.test(4, 5));
