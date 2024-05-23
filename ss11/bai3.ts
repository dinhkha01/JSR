// Định nghĩa lớp Person có thuộc tính name và phương thức displayInfo để in thông tin. Định nghĩa lớp Student kế thừa lớp Person và có thêm thuộc tính id. Khởi tạo đối tượng từ lớp Student và dùng phương thức displayInfo để in thông tin.
class Person {
  public name: string;
  constructor(_name: string) {
    this.name = _name;
  }
  displayInfo() {
    console.log(`${this.name}`);
  }
}
class Student extends Person {
  public id: number;
  constructor(_id: number) {
    super("kha");
    this.id = _id;
  }
  override displayInfo() {
    // chống ghi đè
    super.displayInfo();

    console.log(`${this.id}`);
  }
}

let stu: Student = new Student(1);
stu.displayInfo();
