// Hãy phân biệt 2 access modifier protected và private bằng ví dụ cụ thể.
class Wo {
  private id: string;
  protected name: string;
  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
  showInfo() {
    console.log(`${this.id}, ${this.name}`);
  }
}

class Wos extends Wo {
  age: number;
  constructor(age: number, id: string, name: string) {
    super(id, name);
    this.age = age;
  }
  override showInfo(): void {
    //id là private nên kh gọi được ở lớp con
    //name là protected nên có thể gọi được ở lớp con nhưng kh thể gọi bên ngoài
    console.log(`${this.name}, ${this.age}`);
  }
}

let ai: Wo = new Wos(3, "abc1", "ai do");
ai.showInfo();
