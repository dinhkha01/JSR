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
const Testne = () => {
    const [name, setName] = (0, react_1.useState)("");
    const [age, setAge] = (0, react_1.useState)("");
    const [gender, setGender] = (0, react_1.useState)("");
    return (<div>
      <p>{name}</p>
      <p>{age}</p>
      <p>{gender}</p>
      <form>
        <input type="text" value={name} placeholder="Nhập tên..." onChange={(e) => setName(e.target.value)}/>
        <br />
        <input type="text" value={age} placeholder="Nhập tuổi..." onChange={(e) => setAge(e.target.value)}/>
        <br />
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option>-Giới tính-</option>
          <option value="Nam">Nam</option>
          <option value="Nu">Nữ</option>
        </select>
      </form>
    </div>);
};
exports.default = Testne;
