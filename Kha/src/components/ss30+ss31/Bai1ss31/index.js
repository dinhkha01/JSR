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
class Bai1ss31 extends react_1.Component {
    constructor(props) {
        super(props);
        this.in = (e) => {
            let value = e.target.value;
            this.setState({
                email: value,
            });
        };
        this.out = (e) => {
            e.preventDefault();
            this.setState({
                submitEmail: this.state.email,
                email: "",
            });
        };
        this.state = {
            email: "",
            submitEmail: "",
        };
    }
    render() {
        return (<div>
        <form onSubmit={this.out}>
          <input type="text" name="email" value={this.state.email} onChange={this.in}/>
          <button type="submit">Submit</button>
          <p>{this.state.submitEmail}</p>
          {/* {this.state.submitEmail && (
              <>
                <p>gmail: {this.state.submitEmail}</p>
              </>
            )} */}
        </form>
      </div>);
    }
}
exports.default = Bai1ss31;
