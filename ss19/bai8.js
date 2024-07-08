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
function Cacheable(strategy) {
    return function (target, propertyKey, descriptor) {
        const originalMethod = descriptor.value;
        const cache = new Map();
        descriptor.value = function (...args) {
            const key = JSON.stringify(args);
            if (cache.has(key)) {
                console.log(`Cache hit for key: ${key}`);
                return cache.get(key);
            }
            console.log(`Cache miss for key: ${key}`);
            const result = originalMethod.apply(this, args);
            if (strategy.shouldCache(...args)) {
                cache.set(key, result);
            }
            return result;
        };
        return descriptor;
    };
}
class AlwaysCacheStrategy {
    shouldCache(...args) {
        return true;
    }
}
let Example3 = (() => {
    var _a;
    let _instanceExtraInitializers = [];
    let _computeSum_decorators;
    return _a = class Example3 {
            computeSum(a, b) {
                console.log(`Computing sum of ${a} and ${b}`);
                return a + b;
            }
            constructor() {
                __runInitializers(this, _instanceExtraInitializers);
            }
        },
        (() => {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _computeSum_decorators = [Cacheable(new AlwaysCacheStrategy())];
            __esDecorate(_a, null, _computeSum_decorators, { kind: "method", name: "computeSum", static: false, private: false, access: { has: obj => "computeSum" in obj, get: obj => obj.computeSum }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
})();
class PositiveResultCacheStrategy {
    shouldCache(...args) {
        return args.every((arg) => typeof arg === "number" && arg > 0);
    }
}
let ExampleWithPositiveCache = (() => {
    var _a;
    let _instanceExtraInitializers = [];
    let _computeSum_decorators;
    return _a = class ExampleWithPositiveCache {
            computeSum(a, b) {
                console.log(`Computing sum of ${a} and ${b}`);
                return a + b;
            }
            constructor() {
                __runInitializers(this, _instanceExtraInitializers);
            }
        },
        (() => {
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _computeSum_decorators = [Cacheable(new PositiveResultCacheStrategy())];
            __esDecorate(_a, null, _computeSum_decorators, { kind: "method", name: "computeSum", static: false, private: false, access: { has: obj => "computeSum" in obj, get: obj => obj.computeSum }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
})();
// Kiểm tra với AlwaysCacheStrategy
const example = new Example3();
console.log(example.computeSum(1, 2)); // "Computing sum of 1 and 2", 3
console.log(example.computeSum(1, 2)); // "Cache hit for key: [1,2]", 3
console.log(example.computeSum(3, 4)); // "Computing sum of 3 and 4", 7
console.log(example.computeSum(3, 4)); // "Cache hit for key: [3,4]", 7
// Kiểm tra với PositiveResultCacheStrategy
const examplePositive = new ExampleWithPositiveCache();
console.log(examplePositive.computeSum(1, 2)); // "Computing sum of 1 and 2", 3
console.log(examplePositive.computeSum(1, 2)); // "Cache hit for key: [1,2]", 3
console.log(examplePositive.computeSum(-1, 2)); // "Computing sum of -1 and 2", 1
console.log(examplePositive.computeSum(-1, 2)); // "Computing sum of -1 and 2", 1
