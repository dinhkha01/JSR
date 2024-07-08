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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const ConMemo_1 = __importDefault(require("./ConMemo"));
const Memo = () => {
    const [count, setCount] = (0, react_1.useState)(0);
    const [arr, setArr] = (0, react_1.useState)([1, 2, 3]);
    const title = (0, react_1.useMemo)(() => {
        return arr.reduce((temp, num) => temp + num, 0);
    }, [arr]);
    const random = () => {
        let a = Math.floor(Math.random() * 100);
        setArr([...arr, a]);
    };
    const handlebutton = (0, react_1.useCallback)(() => {
        console.log("e");
        setCount(count + 1);
    }, []);
    return (<div>
      <ConMemo_1.default count={count} handlebutton={handlebutton}/>
      <p>{title}</p>
      <button onClick={random}>them so</button>
    </div>);
};
exports.default = Memo;
