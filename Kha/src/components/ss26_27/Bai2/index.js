"use strict";
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
const react_1 = __importStar(require("react"));
class Bai2 extends react_1.Component {
    constructor(props) {
        super(props);
    }
    sum(a, b) {
        let sum = a + b;
        return `${a} + ${b}=${sum}`;
    }
    tru(a, b) {
        let tru = a - b;
        return `${a} - ${b}=${tru}`;
    }
    nhan(a, b) {
        let nhan = a * b;
        return `${a} * ${b}=${nhan}`;
    }
    chia(a, b) {
        let chia = a / b;
        return `${a} / ${b}=${chia}`;
    }
    render() {
        return (<div>
        <h5>Bài 2:</h5>
        <h3>Danh sách kết quả</h3>
        <ul>
          <li>{this.sum(3, 2)} </li>
          <li>{this.tru(3, 2)}</li>
          <li>{this.nhan(3, 2)}</li>
          <li>{this.chia(10, 2)}</li>
        </ul>
      </div>);
    }
}
exports.default = Bai2;
