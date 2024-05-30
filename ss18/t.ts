// function logger(
//   target: any,
//   propertyName: string,
//   descriptor: PropertyDescriptor
// ) {
//   const temp = descriptor.value;
//   descriptor.value = (...args: any[]) => {
//     return temp(...args);
//   };
// }
// class test {
//   @logger
//   sum(a: number, b: number) {
//     return a + b;
//   }
// }
// const t = new test();
// console.log(t.sum(2, 6));

function Logger<T extends { new (...args: any[]): {} }>(target: T) {
  return class extends target {
    address: string = "hi";
    id: number = 0;
    name: string = "kha";
    geet() {
      return `helo ne ${this.name}`;
    }
  };
}
function pow(value: number) {
  return function (
    target: any,
    propertyName: string,
    descriptor: PropertyDescriptor
  ) {
    let old = descriptor.value;
    descriptor.value = function (...args: any[]) {
      return Math.pow(old(...args), value);
    };
  };
}

// function x2(target: any, propertyKey: string) {
//   console.log("target", target);
//   console.log("propertyKey", propertyKey);
//   Object.defineProperty(target, propertyKey, {
//     configurable: false,
//     get() {
//       //lấy giá trị obj .id
//       return this[propertyKey] * 2;
//     },
//     set(value) {
//       // gán obj.id
//       this[propertyKey] = value * 2;
//     },
//   });
//   //Reflection: kĩ thuật can thiệp trực tiếp vào đối tượng thông qua tên
// }

@Logger
class student {
  id: number;
  name: string;
  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
  geet() {
    return `helo ${this.name}`;
  }
  @pow(2)
  luythua() {
    return 5;
  }
  @x3
  public get id1() {
    return this.id;
  }
}

let stud = new student(1, "hi");
console.log(stud);

console.log(stud.geet());
console.log(stud.luythua());

function x3(target: any, propertyName: string, descriptor: PropertyDescriptor) {
  let old = descriptor.value;
  descriptor.get = () => {
    // return old() * 3;
    return 100;
  };
}

console.log(stud.id1);
