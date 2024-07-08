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
const reducer = (state, action) => {
    switch (action) {
        case "nam":
            return action;
        case "nu":
            return action;
        case "khac":
            return action;
        default:
            return state;
    }
};
const Bai8 = () => {
    const [sex, dispatch] = (0, react_1.useReducer)(reducer, "nam");
    return (<div>
      <h5>{sex}</h5>
      <input type="radio" checked={sex === "nam"} onChange={() => dispatch("nam")}/>
      <label htmlFor="">nam</label>
      <br />
      <input type="radio" checked={sex === "nu"} onChange={() => dispatch("nu")}/>
      <label htmlFor=""> nu</label>
      <br />
      <input type="radio" checked={sex === "khac"} onChange={() => dispatch("khac")}/>
      <label htmlFor="">khac</label>
    </div>);
};
exports.default = Bai8;
