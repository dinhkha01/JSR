"use strict";
class Shape {
    constructor(chuvi, dientich) {
        this.chuvi = chuvi;
        this.dientich = dientich;
    }
    show() {
        console.log("hinh hoc");
    }
}
class Square extends Shape {
    constructor(canh) {
        super(0, 0);
        this.canh = canh;
    }
    show() {
        console.log("hinh vuong");
    }
}
class triangle extends Shape {
    constructor(a, b, c) {
        super(0, 0);
        this.a = a;
        this.b = b;
        this.c = c;
    }
    show() {
        console.log("hinh tam giac");
    }
}
let shape = new Shape(0, 0);
let square = new Square(0);
let Triangle = new triangle(1, 2, 3);
shape.show();
square.show();
Triangle.show();
