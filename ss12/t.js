"use strict";
// tính trừu tượng - chỉ tập trung vào các khái quát về lớp, phương thức
// interdace- giao diện tính năng - 100% trừu tượng hỗ trợ đa kế thừa
// 1 lớp có thể nhiều interdace
// tạo 1 lớp ké thừa và triển khai
class Square {
    constructor(_canh) {
        this.chuVi = 0;
        this.dienTich = 0;
        // phải triển khai toàn bộ các phương thức trừu tượng
        this.tinhChuVi = () => {
            return this.canh * 4;
        };
        this.tinhDienTich = () => {
            return this.canh * this.canh;
        };
        this.canh = _canh;
    }
}
let square = new Square(10);
console.log(square.tinhChuVi());
/// abstract class chỉ có thể tạo class kế thừa phương thức trừu tượng ko thể tạo lớp con được
class Animals {
    constructor(species, sex, color) {
        this.species = species;
        this.sex = sex;
        this.color = color;
    }
    getInfo() {
        return `Animals ${this.species} ${this.sex} ${this.color}`;
    }
}
class D extends Animals {
    constructor(species, sex, color) {
        super(species, sex, color);
        this.makeSound = () => {
            return "Anh trung ơi nhẹ thôi";
        };
    }
}
class c extends Animals {
    constructor(species, sex, color) {
        super(species, sex, color);
        this.makeSound = () => {
            return "huhuhu";
        };
    }
}
class Checken extends Animals {
    constructor(species, sex, color) {
        super(species, sex, color);
        this.makeSound = () => {
            return "aaaaaa";
        };
    }
}
let dog = new D("Tâm anh", false, "đen");
let cat = new c("EEE", false, "đen");
let checken = new Checken("Tâm anh", false, "đen");
console.log("tâm anh hú " + dog.makeSound());
console.log("Mèo hú " + cat.makeSound());
console.log("Gà kêu hú " + checken.makeSound());
