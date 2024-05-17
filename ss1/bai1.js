//bài tập 1:
let student = [
  {
    id: 1,
    name: "Nguyễn Văn A",
    age: 12,
  },
  {
    id: 1,
    name: "Nguyễn Văn kha",
    age: 18,
  },
  {
    id: 1,
    name: "Nguyễn Văn TA",
    age: 10,
  },
  {
    id: 1,
    name: "Nguyễn Văn AA",
    age: 19,
  },
];

student.forEach((name) => {
  console.log(name.name);
});
console.log(student.map((age) => age.age));
student.map((age) => {
  console.log(age.age);
});
