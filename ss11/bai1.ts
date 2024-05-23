class employ {
  public name: string;
  protected company: string;
  private phone: number;
  constructor(name: string, company: string, phone: number) {
    this.name = name;
    this.company = company;
    this.phone = phone;
  }
  println(): void {
    console.log(`${this.name} ${this.company} ${this.phone}`);
  }
}

class Manager extends employ {
  public temSize: number;
  constructor(temSize: number) {
    super("kha", "ha", 99833);
    this.temSize = temSize;
  }
  println(): void {
    console.log(`${this.name} ${this.company}  ${this.temSize}`);
  }
}

let employ1: employ = new employ("k", "s", 1);
let employ2: employ = new Manager(10);
employ1.println();
employ2.println();
