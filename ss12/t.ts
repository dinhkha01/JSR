// tính trừu tượng - chỉ tập trung vào các khái quát về lớp, phương thức
// interdace- giao diện tính năng - 100% trừu tượng hỗ trợ đa kế thừa
// 1 lớp có thể nhiều interdace

interface Ishape {
  // khai báo các thuộc tính và phương thức trừu tượng
  chuVi: number;
  dienTich: number;
  // phương thức trừu tượng
  tinhChuVi: () => number;
  tinhDienTich: () => number;
}
// tạo 1 lớp ké thừa và triển khai
class Square implements Ishape {
  chuVi: number = 0;
  dienTich: number = 0;
  canh: number;
  constructor(_canh: number) {
    this.canh = _canh;
  }
  // phải triển khai toàn bộ các phương thức trừu tượng
  tinhChuVi = () => {
    return this.canh * 4;
  };
  tinhDienTich = () => {
    return this.canh * this.canh;
  };
}
let square: Square = new Square(10);
console.log(square.tinhChuVi());
/// abstract class chỉ có thể tạo class kế thừa phương thức trừu tượng ko thể tạo lớp con được
abstract class Animals {
  species: string;
  sex: boolean;
  color: string;
  constructor(species: string, sex: boolean, color: string) {
    this.species = species;
    this.sex = sex;
    this.color = color;
  }
  getInfo() {
    return `Animals ${this.species} ${this.sex} ${this.color}`;
  }

  abstract makeSound: () => string;
}
class D extends Animals {
  constructor(species: string, sex: boolean, color: string) {
    super(species, sex, color);
  }
  makeSound = () => {
    return "Anh trung ơi nhẹ thôi";
  };
}
class c extends Animals {
  constructor(species: string, sex: boolean, color: string) {
    super(species, sex, color);
  }
  makeSound = () => {
    return "huhuhu";
  };
}
class Checken extends Animals {
  constructor(species: string, sex: boolean, color: string) {
    super(species, sex, color);
  }
  makeSound = () => {
    return "aaaaaa";
  };
}

let dog: Animals = new D("Tâm anh", false, "đen");
let cat: Animals = new c("EEE", false, "đen");
let checken: Animals = new Checken("Tâm anh", false, "đen");

console.log("tâm anh hú " + dog.makeSound());
console.log("Mèo hú " + cat.makeSound());
console.log("Gà kêu hú " + checken.makeSound());
