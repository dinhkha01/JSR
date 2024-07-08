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
class Bai7 extends react_1.Component {
    constructor(props) {
        super(props);
        this.handleInput = (e) => {
            let value = e.target.value;
            this.setState(Object.assign(Object.assign({}, this.state), { inputValue: value }));
        };
        this.handleSave = () => {
            this.setState({
                arr: [...this.state.arr, this.state.inputValue],
                inputValue: "",
            });
        };
        this.state = {
            arr: [],
            inputValue: "",
        };
    }
    render() {
        return (<div>
        <h3>Array: {this.state.arr.join(", ")}</h3>
        <input type="number" name="inputValue" value={this.state.inputValue} onChange={this.handleInput}/>
        <button onClick={this.handleSave}>Save</button>
      </div>);
    }
}
exports.default = Bai7;
