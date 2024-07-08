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
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
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
// function x2(target: any, propertyKey: string) {
//   console.log("target", target);
//   console.log("propertyKey", propertyKey);
//   Object.defineProperty(target, propertyKey, {
//     configurable: false,
//     get() {
//       //lấy giá trị obj .id
//       return this[propertyKey] * 2;
//     },
//     set(value) {
//       // gán obj.id
//       this[propertyKey] = value * 2;
//     },
//   });
//   //Reflection: kĩ thuật can thiệp trực tiếp vào đối tượng thông qua tên
// }
let student = (() => {
    let _classDecorators = [Logger];
    let _classDescriptor;
    let _classExtraInitializers = [];
    let _classThis;
    let _instanceExtraInitializers = [];
    let _luythua_decorators;
    let _get_id1_decorators;
    var student = _classThis = class {
        constructor(id, name) {
            this.id = __runInitializers(this, _instanceExtraInitializers);
            this.id = id;
            this.name = name;
        }
        geet() {
            return `helo ${this.name}`;
        }
        luythua() {
            return 5;
        }
        get id1() {
            return this.id;
        }
    };
    __setFunctionName(_classThis, "student");
    (() => {
        const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _luythua_decorators = [pow(2)];
        _get_id1_decorators = [x3];
        __esDecorate(_classThis, null, _luythua_decorators, { kind: "method", name: "luythua", static: false, private: false, access: { has: obj => "luythua" in obj, get: obj => obj.luythua }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _get_id1_decorators, { kind: "getter", name: "id1", static: false, private: false, access: { has: obj => "id1" in obj, get: obj => obj.id1 }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        student = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return student = _classThis;
})();
let stud = new student(1, "hi");
console.log(stud);
console.log(stud.geet());
console.log(stud.luythua());
function x3(target, propertyName, descriptor) {
    let old = descriptor.value;
    descriptor.get = () => {
        // return old() * 3;
        return 100;
    };
}
console.log(stud.id1);
