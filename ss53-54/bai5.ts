const isPrimeWithPromise = (num: number): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    if (num <= 1) {
      reject("Số nhập vào phải lớn hơn 1");
      return;
    }

    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        resolve(false);
        return;
      }
    }

    resolve(true);
  });
};

// Ví dụ sử dụng
isPrimeWithPromise(17)
  .then((isPrime) => {
    if (isPrime) {
      console.log("Số này là số nguyên tố");
    } else {
      console.log("Số này không phải là số nguyên tố");
    }
  })
  .catch((error) => {
    console.error(error);
  });
