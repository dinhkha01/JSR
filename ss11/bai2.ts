class Employ {
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

class manager extends Employ {
  public teamSize: number;
  constructor(teamSize: number) {
    super("khane", "hae", 2833);
    this.teamSize = teamSize;
  }
  println(): void {
    console.log(`${this.name} ${this.company} ${this.teamSize}`);
    super.println();
  }
}

let emplofff: Employ = new Employ("he", "ke", 1);
let kha: manager = new manager(10);
emplofff.println();
kha.println();
