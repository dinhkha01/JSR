// Viết một hàm displayNumbers() nhận tham số truyền vào là một callback function và một giá trị là khoảng thời gian delay có kiểu dữ liệu là number

// Hàm displayNumbers() sẽ gọi đến một callback function để in ra lần lượt các số nguyên bắt đầu từ 1 và tăng giá trị lên 1 đơn vị sau khoảng thời gian delay
let num = 1;
const displayNumbers = (callback: Function, time: number) => {
  setTimeout(() => {
    displayNumbers(callback, time);
    callback(num);
    num++;
  }, time);
};
const printNum = (num: number) => {
  console.log(num);
};
displayNumbers(printNum, 1000);
