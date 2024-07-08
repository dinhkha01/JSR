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
class Bai4 extends react_1.Component {
    constructor(props) {
        super(props);
        this.state = {
            tinh: "",
        };
        this.out = this.out.bind(this);
    }
    out(e) {
        let value = e.target.value;
        this.setState({
            tinh: value,
        });
    }
    render() {
        return (<div>
        <h3>Tỉnh {this.state.tinh}</h3>
        <select name="tinh" id="" value={this.state.tinh} onChange={this.out}>
          <option value="">Select a value</option>
          <option value="hi">hi</option>
          <option value="ho">ho</option>
          <option value="ha">ha</option>
          <option value="hiii">hiii</option>
          <option value="hiaaaa">hiaaaa</option>
          <option value="hissss">hissss</option>
          <option value="hffffi">hffffi</option>
          <option value="higgggg">higgggg</option>
        </select>
      </div>);
    }
}
exports.default = Bai4;
