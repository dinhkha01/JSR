// Hàm decorator factory function
function validateArguments(validationRules: ((param: any) => boolean)[]) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
      for (let i = 0; i < args.length; i++) {
        const rule = validationRules[i];
        if (!rule || !rule(args[i])) {
          throw new Error(
            `Argument at position ${i} does not meet validation criteria.`
          );
        }
      }
      return originalMethod.apply(this, args);
    };
    return descriptor;
  };
}

// Quy tắc kiểm tra số dương
function isPositive(param: number): boolean {
  return param > 0;
}

// Quy tắc kiểm tra chuỗi không rỗng
function isNonEmptyString(param: string): boolean {
  return param.trim() !== "";
}

class Example {
  @validateArguments([isPositive, isNonEmptyString])
  public processInput(id: number, name: string): void {
    console.log(`Processing input: ID=${id}, Name=${name}`);
  }
}

const example1 = new Example();
example1.processInput(1, "John"); // Output: Processing input: ID=1, Name=John
example1.processInput(-1, "Alice"); // Throws an error: Argument at position 0 does not meet validation criteria.
example1.processInput(2, ""); // Throws an error: Argument at position 1 does not meet validation criteria.
