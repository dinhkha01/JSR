abstract class AnimaL {
  abstract makeSound(): void; // Abstract method

  move(): void {
    // Concrete method
    console.log("Moving along...");
  }
}

class Dragon extends AnimaL {
  makeSound(): void {
    console.log("Woof! Woof!");
  }
}

class ga extends AnimaL {
  makeSound(): void {
    console.log("Meow! Meow!");
  }
}

// Uncommenting the line below will cause an error because you can't instantiate an abstract class
// let animal = new Animal();

let dragon: Dragon = new Dragon();
dragon.makeSound(); // Output: Woof! Woof!
dragon.move(); // Output: Moving along...

let Ga: ga = new ga();
Ga.makeSound(); // Output: Meow! Meow!
Ga.move(); // Output: Moving along...

class Car {
  brand: string;
  model: string;

  constructor(brand: string, model: string) {
    this.brand = brand;
    this.model = model;
  }

  drive(): void {
    console.log(`Driving a ${this.brand} ${this.model}`);
  }
}

let car: Car = new Car("Toyota", "Corolla");
car.drive(); // Output: Driving a Toyota Corolla
