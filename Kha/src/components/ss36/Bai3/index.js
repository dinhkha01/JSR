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
const Bai3 = () => {
    const [color, setColor] = (0, react_1.useState)("tt");
    const handleClick = (section) => {
        setColor(section);
    };
    const getBackgroundColor = (section) => {
        return color === section ? "gray" : "";
    };
    return (<div>
      <div className="d-flex ">
        <p style={{ margin: 10, backgroundColor: getBackgroundColor("tt") }} onClick={() => handleClick("tt")}>
          Trang chu
        </p>
        <p style={{ margin: 10, backgroundColor: getBackgroundColor("sp") }} onClick={() => handleClick("sp")}>
          San pham
        </p>
        <p style={{ margin: 10, backgroundColor: getBackgroundColor("gt") }} onClick={() => handleClick("gt")}>
          Gioi thieu
        </p>
        <p style={{ margin: 10, backgroundColor: getBackgroundColor("lh") }} onClick={() => handleClick("lh")}>
          Lien he
        </p>
      </div>
    </div>);
};
exports.default = Bai3;
