"use strict";
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
// Viết hàm decorator functions để log ra thông tin về hàm mà nó decorates. Hàm decorates này sẽ log ra được tên hàm, tham số đầu vào của hàm, và kết quả trả về. Sử dụng console.log() để logging
function Log(target, propertyName, descriptor) {
    const temp = descriptor.value;
    descriptor.value = (...ars) => {
        console.log(`Function name: ${propertyName}`);
        console.log(`Arguments: ${JSON.stringify(ars)}`);
        return temp(...ars);
    };
}
let loggerr = (() => {
    var _a;
    let _instanceExtraInitializers = [];
    let _sum_decorators;
    let _outName_decorators;
    return _a = class loggerr {
            sum(a, b) {
                return a + b;
            }
            outName(c) {
                return c;
            }
            constructor() {
                __runInitializers(this, _instanceExtraInitializers);
            }
        },
        (() => {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _sum_decorators = [Log];
            _outName_decorators = [Log];
            __esDecorate(_a, null, _sum_decorators, { kind: "method", name: "sum", static: false, private: false, access: { has: obj => "sum" in obj, get: obj => obj.sum }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(_a, null, _outName_decorators, { kind: "method", name: "outName", static: false, private: false, access: { has: obj => "outName" in obj, get: obj => obj.outName }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
})();
let tes = new loggerr();
console.log(tes.sum(2, 3));
console.log(tes.outName("a"));
