// Định nghĩa abstract class Animal có thuộc tính name và phương thức abstract makeNoise và phương thức printName. phương thức printName chỉ in ra màn hình tên của đối tượng.

// Định nghĩa 2 lớp Cat và Dog kế thừa lớp Animal. Phương thức makeNoise của lớp Cat sẽ in ra màn hình meo meo, của lớp Dog sẽ in ra màn hình gâu gâu. Tạo ra 2 đối tượng từ 2 lớp đã định nghĩa, gọi phương thức printName và makeNoise với mỗi đối tượng.

abstract class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  abstract makeNoise: () => string;
  printName() {
    console.log(` tên : ${this.name}`);
  }
}
class Cat extends Animal {
  constructor(name: string) {
    super(name);
  }
  makeNoise = () => {
    return "meo meo meo";
  };
}
class Dog extends Animal {
  constructor(name: string) {
    super(name);
  }
  makeNoise = () => {
    return "gau gau gau";
  };
}

let meo: Animal = new Cat("vằn");
let cho: Animal = new Dog("gấu");

meo.printName();
console.log(meo.makeNoise());

cho.printName();
console.log(cho.makeNoise());
