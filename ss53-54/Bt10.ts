const findElement = (arr: number[], value: number): Promise<number> => {
  return new Promise((resolve, reject) => {
    const foundElement = arr.find((element) => element === value);
    if (foundElement !== undefined) {
      resolve(foundElement);
    } else {
      reject("Không tìm thấy phần tử");
    }
  });
};

// Ví dụ sử dụng
const array = [10, 20, 30, 40, 50];
const searchValue = 30;

findElement(array, searchValue)
  .then((result) => {
    console.log(`Phần tử được tìm thấy: ${result}`);
  })
  .catch((error) => {
    console.error(error);
  });
