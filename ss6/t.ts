let arr: number[] = [0, 1, 2, 3, 4, 5];
const sum = (arr: number[]) => {
  return arr.reduce((temp: number, sum: number) => temp + sum, 0);
};

console.log(sum(arr));

const arrStr: string = "nguyen dinh kha";

const check = (arrStr: string, check: string) => {
  return arrStr.startsWith(check);
};

console.log(check(arrStr, "nguyen"));
