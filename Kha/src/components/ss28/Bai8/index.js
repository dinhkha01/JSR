"use strict";
// Tạo một component đặt tên là ListProduct.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Sử dụng state để lưu trữ danh sách các sản phẩm. Mỗi sản phẩm bao gồm các thông tin như: id, name, price, quantity
// Tạo một component đặt tên là Product là component con và nhận dữ liệu từ component ListProduct
// Hiển thị danh sách các sản phẩm ra ngoài giao diện
const react_1 = __importStar(require("react"));
const Product_1 = __importDefault(require("./Product"));
class Bai8 extends react_1.Component {
    constructor(props) {
        super(props);
        this.state = {
            infoProduct: [
                {
                    id: 1,
                    name: "Mes",
                    price: 20000000,
                    quantity: 100,
                },
                {
                    id: 2,
                    name: "BMW",
                    price: 30000000,
                    quantity: 400,
                },
                {
                    id: 3,
                    name: "Porcher",
                    price: 20034444,
                    quantity: 200,
                },
            ],
        };
    }
    render() {
        return (<div>
        <h3>Bài 8</h3>
        <Product_1.default card={this.state.infoProduct}/>
      </div>);
    }
}
exports.default = Bai8;
