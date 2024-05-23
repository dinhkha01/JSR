class Shape {
  chuvi: number;
  dientich: number;
  constructor(chuvi: number, dientich: number) {
    this.chuvi = chuvi;
    this.dientich = dientich;
  }
  show(): void {
    console.log("hinh hoc");
  }
}

class Square extends Shape {
  canh: number;
  constructor(canh: number) {
    super(0, 0);
    this.canh = canh;
  }
  override show(): void {
    console.log("hinh vuong");
  }
}
class triangle extends Shape {
  a: number;
  b: number;
  c: number;
  constructor(a: number, b: number, c: number) {
    super(0, 0);
    this.a = a;
    this.b = b;
    this.c = c;
  }
  override show(): void {
    console.log("hinh tam giac");
  }
}

let shape: Shape = new Shape(0, 0);

let square: Shape = new Square(0);

let Triangle: Shape = new triangle(1, 2, 3);

shape.show();
square.show();
Triangle.show();
