class Student {
    private id : number;
    private name: string;
    constructor(_id:number,_name:string){
        this.id=_id
        this.name=_name
    }
    get _id() :number{
        return this.id
    }
    get _name( ) :string{
        return this.name
    }

}


class Classroom {
    students:Student[]
    constructor(){
        this.students=[]
    }
    addStudent(student:Student):void{
        this.students.push(student);
        
    }

    showStudents () :void{
        this.students.forEach((students)=>{
            console.log(`id: ${students._id} name: ${students._name}`);
            
        })
    }
}

let allStudents:Student[]=[
    new Student(1,"kha"),
    new Student(2,"ha"),
    new Student(3,"ta"),
    new Student(4,"ngoc"),
    new Student(5,"tran"),
    new Student(6,"hao"),
]

let class1: Classroom=new Classroom();
let class2: Classroom=new Classroom();

for (let i=0; i<allStudents.length;i++){
    if(i<3){
        class1.addStudent(allStudents[i])
    } else{
        class2.addStudent(allStudents[i])
    }
}

console.log("lop 1: " );
class1.showStudents()
console.log("lop 2: " );
class2.showStudents()

