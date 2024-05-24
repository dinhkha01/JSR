"use strict";
class AnimaL {
    move() {
        // Concrete method
        console.log("Moving along...");
    }
}
class Dragon extends AnimaL {
    makeSound() {
        console.log("Woof! Woof!");
    }
}
class ga extends AnimaL {
    makeSound() {
        console.log("Meow! Meow!");
    }
}
// Uncommenting the line below will cause an error because you can't instantiate an abstract class
// let animal = new Animal();
let dragon = new Dragon();
dragon.makeSound(); // Output: Woof! Woof!
dragon.move(); // Output: Moving along...
let Ga = new ga();
Ga.makeSound(); // Output: Meow! Meow!
Ga.move(); // Output: Moving along...
class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }
    drive() {
        console.log(`Driving a ${this.brand} ${this.model}`);
    }
}
let car = new Car("Toyota", "Corolla");
car.drive(); // Output: Driving a Toyota Corolla
