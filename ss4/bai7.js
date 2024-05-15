class danhBa{
    constructor(name,sdt,email){
        this.name=name;
        this.sdt=sdt;
        this.email=email;
    }
}

let phoneBooks=[]

function addContact(name, sdt, email){

    const newContact= new danhBa(name, sdt, email)

    phoneBooks=[...phoneBooks, newContact]

}

function displayContact(){
    phoneBooks.forEach((contact,index)=>{
        console.log(`${index+1} | Tên: ${contact.name} | SDT: ${contact.sdt} | Email: ${contact.email}`);
    })
}


addContact("Nguyễn Đình Kha", "0902956579", "dinhkha2k3@gmail.com");
addContact("Huỳnh Trâm Anh", "0987654321", "tamanhde@vn.com");


displayContact();