class vehicle {
    public name: string;
    protected year: number;
    private company: string;
    readonly id: number;

    constructor(name: string, year: number, company: string, id: number) {
        this.name = name;
        this.year = year;
        this.company = company;
        this.id = id;
    }

 
  public con():string{
    return this.company;
  }
}

// Tạo một thực thể của lớp Vehicle
const myVehicle = new vehicle("Toyota Corolla", 2021, "Toyota", 12345);

// In các thông tin ra màn hình để kiểm tra
console.log("Name:", myVehicle.name);
console.log("Year:", myVehicle.year); // Lỗi, không thể truy cập protected property từ bên ngoài
console.log("Company:", myVehicle.con());
console.log("ID:", myVehicle.id);
