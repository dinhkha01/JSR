class Employee {
    public name: string;
    protected company: string;
    private phone: number;

    constructor(name: string, company: string, phone: number) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }

    printInfo() {
        console.log(`${this.name} ${this.company} ${this.phone}`);
    }

  
}

let te = new Employee("Kha", "Hong", 0999922);
te.printInfo();
