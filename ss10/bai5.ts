class Department  {
    public readonly  id: number;
    private name: string;
    private employees: string[];
    constructor(id: number,name: string){
        this.id=id
        this.name=name
        this.employees=[]
    }
     describe ():void{
        console.log(`${this.id} ${this.name}`)
    }
    addEmployees(str:string):void{
        this.employees.push(str)
    }
    inEmployees():string[]{
        return this.employees
    }
}

const department= new Department (1,"hi");
department.addEmployees("bin")
department.addEmployees("he")

department.describe();
console.log(department.inEmployees());
