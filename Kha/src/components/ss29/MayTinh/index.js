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
require("./index.css");
class MayTinh extends react_1.Component {
    constructor(props) {
        super(props);
        this.handelClick = (e) => {
            this.setState({
                express: [...this.state.express, e],
            });
        };
        this.kq = () => {
            let result = eval(this.state.express.join(""));
            this.setState(Object.assign(Object.assign({}, this.state), { result: result }));
        };
        this.state = {
            express: [],
            result: 0,
        };
    }
    render() {
        return (<div>
        <div className="container">
          <div>
            <div>
              <span>{this.state.express.join("")}</span>
              <br />
              <span>{this.state.result}</span>
            </div>
            <div className="c1">
              <button onClick={() => this.handelClick("1")}>1</button>
              <button onClick={() => this.handelClick("2")}>2</button>
              <button onClick={() => this.handelClick("3")}>3</button>
              <button onClick={() => this.handelClick("+")}>+</button>
            </div>
            <div className="c2">
              <button onClick={() => this.handelClick("4")}>4</button>
              <button onClick={() => this.handelClick("5")}>5</button>
              <button onClick={() => this.handelClick("6")}>6</button>
              <button onClick={() => this.handelClick("-")}>-</button>
            </div>
            <div className="c3">
              <button onClick={() => this.handelClick("7")}>7</button>
              <button onClick={() => this.handelClick("8")}>8</button>
              <button onClick={() => this.handelClick("9")}>9</button>
              <button onClick={() => this.handelClick("*")}>*</button>
            </div>
            <div className="c4">
              <button onClick={() => this.handelClick("0")}>0</button>
              <button onClick={this.kq}>=</button>
              <button onClick={() => this.handelClick("")}>/</button>
              <button>DELETE</button>
            </div>
          </div>
        </div>
      </div>);
    }
}
exports.default = MayTinh;
