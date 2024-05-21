/// type Tuple : mảng cố định

let arrCodinh: [number, string, boolean];
arrCodinh = [10, "kha", true];
console.log(arrCodinh);

/// option readonly
let num = 10; /// khai báo ngầm định
// num = "10";

let number1: readonly number[] = [10, 11]; // dùng để sử dụng phần tử trong mảng chứ ko thay đổi giá trị của phần tử được

/// Type Allias - kiểu đối tượng
// từ khóa type
type User = {
  id: number;
  name: string;
  age: number;
};

// từ khóa: interface
interface User1 {
  id: number;
  name: string;
  age: number;
}

// từ khóa: class

class User2 {
  readonly id: number;
  name: string;
  age: number;
  constructor(id: number, name: string, age: number) {
    this.id = id;
    this.name = name;
    this.age = age;
  }
}
//// type guard

/// instance of kiểm tra kiểu dữ liệu của 1 đối tượng

let stu: User2 = new User2(1, "kha", 20);
let stuFake: any = {
  id: 2,
  name: "bin",
  age: 19,
};
console.log(stu instanceof User2);
console.log(stuFake instanceof User2);
//// toán tử in /// dùng để xác định thuộc tính trong object

console.log("id" in User2);
console.log("sex " in User2);

// Type casting
// toán tử as: như là
let t = (a: number | string, b: number | string): string | number => {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    return String(a) + String(b);
  }
};

let result = t(1, 2) as string;
console.log(typeof result);
/// hay dùng
let resul = <string>t(1, 2);
console.log(typeof resul);
//toán tử Optional chaining "?."

let username = stu?.name;

console.log(username);

let userTest: User2 = {
  id: 10,
  name: { id: 2, name: "bin", age: 19 },
  age: 10,
};
let usr = userTest?.name?.name;
console.log(usr);
