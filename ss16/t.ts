interface List<T> {
  [index: number]: T;
}

let numberList: List<number> = [1, 2, 3];

interface student {
  id: number;
  name: string;
}
/// keyof danh sách các key của 1 kiểu dữ liệu

type studentKey = keyof student;
const key: studentKey = "id";

const class1: List<student> = [{ name: "kha", id: 1 }];
////
const getTurple = <T, K>(a: T, b: K): [T, K] => {
  return [a, b];
};
console.log(getTurple(1, "kha"));
console.log(getTurple(undefined, 10));
//// bài tập: truyền vào 2 đối số. Nếu 2 đối số đều là number thì trả về tổng 2 số nếu là string thì nối chuỗi nếu không thì thông báo lỗi

const check1 = <T, N>(a: T, b: N): any => {
  if (typeof a === typeof b) {
    // return a + b;
  } else {
    console.error;
  }
};

console.log(check1(10, 10));
console.log(check1("10", "10"));
console.log(check1(10, "10"));

interface Person {
  weight: number;
  height: number;
}
class stu implements Person {
  weight: number;
  height: number;
  name: string;
  constructor(weight: number, height: number, name: string) {
    this.height = height;
    this.weight = weight;
    this.name = name;
  }
}
/////////////////////////////////////////////////////
const prinInfo = <T extends Person>(humand: T) => {
  console.log(humand.height, humand.weight);
};

const st: Person = new stu(30, 90, "Kha");
const st1: stu = <stu>st;
prinInfo(st);
//////////////////////////////////////////////////////////
//ép kiểu ngầm định: quan hệ kế thừa - thằng cha có gì con có
// ép kiểu tường minh: từ cha về con -<type children>

const prinInfoStu = <T extends stu>(humand: T) => {
  console.log(humand.height, humand.weight, humand.name);
};

const st2: Person = new stu(30, 90, "Kha");

prinInfoStu(st1);

interface ArrayFake<T> {
  data: T[];
  push(item: T): void; // thêm phần tử cuối mảng
  pop(): T; // xóa phần tử cuối
}
class Array1<T> extends Object implements ArrayFake<T> {
  data: T[] = [];
  push(item: T): void {
    this.data.push(item);
  }
  pop(): T {
    return this.data.pop() as T;
  }
  override toString() {
    return this.data.toString();
  }
}

let arrFake: ArrayFake<number> = new Array1<number>();

arrFake.push(1);
arrFake.push(3);
arrFake.push(2);
console.log(arrFake);

//static generic với phương thức đặc biệt
class Num1 {
  static so: number = 0;
  constructor(so: number) {
    Num1.so = so;
  }
  static callx2() {
    return Num1.so * 2;
  }
  static sum<T>(a: T, b: T) {
    return Number(a) + Number(b);
  }
}
// Không cần khởi tạo đối tượng vẫn có thể truy xuất các thành phần tĩnh
// Nếu như khởi tạo đối tượng\\

console.log(Num1.so);
console.log(Num1.sum(2, 5));
/////////////////////////////////////////////////////

interface Icrud<T, E> {
  create(item: T): void;
  findAll(): T[];
  findById(id: string): T;
  update(item: T): void;
  dalete(id: E): void;
}

/// quản lý sản phẩm
class Product {
  id: string;
  name: string;
  price: number;
  constructor(id: string, name: string, price: number) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

interface IProduct extends Icrud<Product, string> {
  getTobal: number;
}

// class ProductManager implements IProduct {
//   Products: Product[] = [];
//   create(item: Product): void {}
//   findAll(): Product[] {}
//   findById(id: string): Product {}
//   update(item: Product): void {}
//   dalete(id: string): void {}
// }
