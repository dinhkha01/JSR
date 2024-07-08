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
class Bai3 extends react_1.Component {
    render() {
        let user = {
            id: 1,
            name: "kha",
            gmail: "a@gmail",
            date: "8/11/2003",
            sex: true,
        };
        return (<div>
        <h5>Bài 3:</h5>
        <h3>Thông tin cá nhân</h3>
        <ul>
          <li>{user.id}</li>
          <li>{user.name}</li>
          <li>{user.gmail}</li>
          <li>{user.date}</li>
          <li>{user.sex ? "nam" : "nữ"}</li>
        </ul>
      </div>);
    }
}
exports.default = Bai3;
