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
function validateProduct(constructor) {
    return class extends constructor {
        constructor(...args) {
            super(...args);
            const instance = this;
            if (!instance.name || instance.name.trim() === "") {
                throw new Error("Product name cannot be empty.");
            }
            if (instance.price <= 0) {
                throw new Error("Product price must be a positive number.");
            }
            if (!instance.description || instance.description.trim() === "") {
                throw new Error("Product description cannot be empty.");
            }
            if (instance.inStock < 0) {
                throw new Error("Product inStock must be a non-negative number.");
            }
        }
    };
}
let Product = class Product {
    constructor(name, price, description, inStock) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.inStock = inStock;
    }
};
Product = __decorate([
    validateProduct,
    __metadata("design:paramtypes", [String, Number, String, Number])
], Product);
class ProductGeneric {
    constructor(name, price, description, inStock) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.inStock = inStock;
    }
}
// Example usage:
try {
    const product1 = new Product("Laptop", 1000, "High-performance laptop", 10);
    console.log(product1);
    // This will throw an error because the price is not positive
    const product2 = new Product("Smartphone", -500, "Latest model smartphone", 20);
}
catch (error) {
    console.error(error);
}
// Using ProductGeneric with different data types
const productGeneric1 = new ProductGeneric("Tablet", 300, "Portable tablet", 15);
console.log(productGeneric1);
