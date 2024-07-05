const fibonacci = async (n: number): Promise<number> => {
  return new Promise((resolve, reject) => {
    if (n <= 0) {
      reject(new Error("Dữ liệu nhập vào không hợp lệ"));
    } else {
      resolve(fib(n));
    }
  });
};
const fib = (n: number): number => {
  if (n <= 2) {
    return 1;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
};

fibonacci(9)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
