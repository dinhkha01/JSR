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
class Bai3ss31 extends react_1.Component {
    constructor(props) {
        super(props);
        this.changeDate = (e) => {
            let value = e.target.value;
            this.setState({
                date: value,
            });
        };
        this.outDate = (e) => {
            e.preventDefault();
            this.setState({
                submitDate: this.state.date,
            });
        };
        this.state = {
            date: "",
            submitDate: "",
        };
    }
    render() {
        return (<div>
        <form onSubmit={this.outDate}>
          {this.state.submitDate && (<>
              <h3>Ngày sinh {this.state.submitDate}</h3>
            </>)}
          <input type="date" value={this.state.date} name="date" onChange={this.changeDate}/>
          <button type="submit">Submit</button>
        </form>
      </div>);
    }
}
exports.default = Bai3ss31;
