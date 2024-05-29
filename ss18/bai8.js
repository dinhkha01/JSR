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
class Example3 {
    computeSum(a, b) {
        console.log(`Computing sum of ${a} and ${b}`);
        return a + b;
    }
}
__decorate([
    Cacheable(new AlwaysCacheStrategy()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Number)
], Example3.prototype, "computeSum", null);
class PositiveResultCacheStrategy {
    shouldCache(...args) {
        return args.every((arg) => typeof arg === "number" && arg > 0);
    }
}
class ExampleWithPositiveCache {
    computeSum(a, b) {
        console.log(`Computing sum of ${a} and ${b}`);
        return a + b;
    }
}
__decorate([
    Cacheable(new PositiveResultCacheStrategy()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Number)
], ExampleWithPositiveCache.prototype, "computeSum", null);
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
