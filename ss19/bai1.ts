// Viết một hàm decorator factory gọi là “logDecorator” trả ra thông tin của hàm được gọi. Hàm decorator trả về tên hàm, tham số và kết quả.

function logDecorator(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  let old = descriptor.value;
  descriptor.value = (...arsg: any) => {
    console.log("Function Name:", propertyKey);
    console.log(`${JSON.stringify(arsg)}`);

    return old(...arsg);
  };
}

class Log {
  @logDecorator
  test(a: number, b: number) {
    return a + b;
  }
}

let t = new Log();
console.log(t.test(4, 5));
