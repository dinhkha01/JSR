"use strict";
// Tạo một component đặt tên theo tùy ý. Ví dụ: Exercise01
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
// Trong component đó, tạo một button có nội dung là “Click me”
// Bắt sự kiện onClick trên button và in ra màn hình console nội dung “Clicked”
const react_1 = __importStar(require("react"));
class Bai1 extends react_1.Component {
    constructor(props) {
        super(props);
        this.state = {
            out: "",
        };
        this.out = this.out.bind(this);
    }
    out() {
        this.setState({ out: "click qq" });
    }
    render() {
        return (<div>
        <h3>{this.state.out}</h3>
        <button onClick={this.out}>click tao</button>
      </div>);
    }
}
exports.default = Bai1;
