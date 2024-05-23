// Định nghĩa lớp Vehicle có 3 thuộc tính là name, speed và id.Các thuộc tính đều là protected. Lớp có 2 phương thức slowDown để giảm tốc, speedUp để tăng tốc và showSpeed để in ra tốc độ hiện tại.

// Tạo ra 1 lớp Bicycle kế thừa từ lớp Vehicle và có thêm thuộc tính gear là số bánh răng và là private.

// Tạo ra 1 thực thể từ lớp Bicycle, tiến hành tăng hoặc giảm tốc, in lại thông tin và kiểm tra kết quả.

class Vehicle {
  protected name: string;
  protected speed: number;
  protected id: number;
  constructor(_name: string, _speed: number, _id: number) {
    this.name = _name;
    this.speed = _speed;
    this.id = _id;
  }
  //giam toc
  slowDown(n: number) {
    this.speed -= n;
    console.log(`đã trừ xuống : ${this.speed}`);
  }
  // tang toc
  speedUp(n: number) {
    this.speed += n;
    console.log(`đã tăng lên: ${this.speed}`);
  }
  //show toc do
  showSpeed() {
    console.log(`toc do hien tai la: ${this.speed}`);
  }
}
class Bicycle extends Vehicle {
  public gear: number;
  constructor(gear: number) {
    super("mes", 2000, 2);
    this.gear = gear;
  }
  override showSpeed() {
    super.showSpeed();
    console.log(`số bánh răng: ${this.gear}`);
  }
}

let baoTA: Bicycle = new Bicycle(198);
baoTA.showSpeed();
baoTA.slowDown(10);

baoTA.speedUp(30);
