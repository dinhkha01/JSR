const lamPhangMang = <T>(arr: T[]) => {
  let newArr: T[] = [];
  arr.forEach((e) => {
    if (Array.isArray(e)) {
      newArr = [...newArr, ...lamPhangMang(e)];
    } else {
      newArr = [...newArr, e];
    }
  });
  return newArr;
};

const nestedArray = [1, [2, [3, 4], 5], 6];

console.log(lamPhangMang(nestedArray));
