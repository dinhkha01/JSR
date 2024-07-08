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
// các thành phần:
// reducer: là nơi xử lí các action và cập nhật lại state
//action: đại diện cho chức năng cần xử lí
// state: trạng thái của reducer
const reducer = (state = 0, action) => {
    switch (action) {
        case "increment1":
            return state + 1;
        case "increment2":
            return state + 2;
        case "increment3":
            return state + 3;
        default:
            return state;
    }
};
const Reducer = () => {
    const [count, dispatch] = (0, react_1.useReducer)(reducer, 0, undefined);
    return (<div>
      <h1>{count}</h1>
      <button onClick={() => dispatch("increment1")}>Bam de</button>
      <button onClick={() => dispatch("increment2")}>Bam t ne</button>
      <button onClick={() => dispatch("increment3")}>Bam di dcmm</button>
    </div>);
};
exports.default = Reducer;
