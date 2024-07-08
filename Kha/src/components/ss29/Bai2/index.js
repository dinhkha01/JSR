"use strict";
// Trong component, tạo một input cho phép người dùng nhập dữ liệu dạng text
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
Object.defineProperty(exports, "__esModule", { value: true });
// Lắng nghe sự kiện và lấy giá trị trong ô input mỗi khi người dùng nhập liệu
// Kết quả cần đạt được
const react_1 = __importStar(require("react"));
class Bai2 extends react_1.Component {
    constructor(props) {
        super(props);
        this.state = {
            out: "",
        };
        this.changeInput = this.changeInput.bind(this);
    }
    changeInput(e) {
        let value = e.target.value;
        this.setState({
            out: value,
        });
    }
    render() {
        return (<div>
        Bai 2:
        <h3>du lieu nhap: {this.state.out}</h3>
        <input type="text" value={this.state.out} 
        // onChange={(e) => {
        //   this.changeInput(e);
        // }}
        onChange={this.changeInput}/>
      </div>);
    }
}
exports.default = Bai2;
