interface List<T> {
  [index: number]: T;
}

let numberList: List<number> = [1, 2, 3];

interface student {
  id: number;
  name: string;
}
/// keyof danh sách các key của 1 kiểu dữ liệu

type studentKey = keyof student;
const key: studentKey = "id";

const class1: List<student> = [{ name: "kha", id: 1 }];
