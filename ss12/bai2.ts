// Định nghĩa abstract class Person có thuộc tính name và phương thức displayInfo để in thông tin.

// Định nghĩa lớp Student kế thừa lớp Person và có thêm thuộc tính id. Khởi tạo đối tượng từ lớp Student và dùng phương thức displayInfo để in id và tên sinh viên.

// Định nghĩa lớp Teacher kế thừa lớp Person và có thêm thuộc tính subject. Khởi tạo đối tượng từ lớp Teacher và dùng phương thức displayInfo để in tên giáo viên và môn học.

abstract class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  abstract displayInfo: () => string;
}

class Student extends Person {
  id: number;
  constructor(name: string, id: number) {
    super(name);
    this.id = id;
  }
  displayInfo = () => {
    return `tên: ${this.name} id: ${this.id}`;
  };
}
class Teacher extends Person {
  subject: string;
  constructor(name: string, subject: string) {
    super(name);
    this.subject = subject;
  }
  displayInfo = () => {
    return `tên: ${this.name} id: ${this.subject}`;
  };
}
let stu1 = new Student("kha", 11);
let giaoVine = new Teacher("Hi", "toan");

console.log(stu1.displayInfo());
console.log(giaoVine.displayInfo());
