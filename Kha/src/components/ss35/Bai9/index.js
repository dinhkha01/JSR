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
function Bai9() {
    const [sex, setSex] = (0, react_1.useState)("");
    const changeSex = (e) => {
        setSex(e.target.value);
    };
    return (<div>
      <h3>{sex}</h3>
      <form>
        <input type="checkbox" value={"Nam"} onChange={changeSex}/>
        <label htmlFor="">Nam</label>
        <br />

        <input type="checkbox" value={"Nữ"} onChange={changeSex}/>
        <label htmlFor="">Nữ</label>
        <br />
        <input type="checkbox" value={"NOT"} onChange={changeSex}/>
        <label htmlFor="">Not Sex</label>
      </form>
    </div>);
}
exports.default = Bai9;
