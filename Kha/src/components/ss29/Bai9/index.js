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
class Bai9 extends react_1.Component {
    constructor(props) {
        super(props);
        this.in = (e) => {
            let value = e.target.value;
            let name = e.target.name;
            this.setState(Object.assign(Object.assign({}, this.state), { [name]: value }));
        };
        this.out = (e) => {
            e.preventDefault();
            this.setState(Object.assign(Object.assign({}, this.state), { check: true }));
        };
        this.state = { gmail: "", pass: "", check: false };
    }
    render() {
        return (<div>
        <form onSubmit={this.out}>
          <label htmlFor="">Email:</label>

          <input name="gmail" type="text" onChange={this.in} value={this.state.gmail}/>
          <br />
          <label htmlFor="">Mat Khau</label>

          <input name="pass" type="text" onChange={this.in} value={this.state.pass}/>
          <br />
          <button type="submit"> Submit</button>
          {this.state.check && (<>
              <p>Gmail: {this.state.gmail}</p>
              <p>Pass:{this.state.pass}</p>
            </>)}
        </form>
      </div>);
    }
}
exports.default = Bai9;
