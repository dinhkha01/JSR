const arrayNum = [1, 2, 3, 4, 5];
let i = 0;

const processArray = (arr: number[], callback: Function) => {
  if (i < arr.length) {
    callback(arr[i]);
    i++;
    setTimeout(() => {
      processArray(arr, callback);
    }, 1000); // Đặt dấu phẩy đúng chỗ
  }
};

processArray(arrayNum, (a: number) => {
  console.log(a);
});
