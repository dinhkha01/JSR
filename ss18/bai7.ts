// Viết một class với decorator có thể áp dụng được nhiều hàm middlewares đến 1 hàm target. Hàm middlewares có thể truy cập đươc tham số của hàm original và định nghĩa được chúng hoặc có thể biểu diễn phương thức khác trước hoặc sau khi hàm originals được gọi

function middlewares(target: any, propertyKey: string,descriptor:PropertyDecorator){

};
class 