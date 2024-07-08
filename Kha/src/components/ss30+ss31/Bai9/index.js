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
let interval = -1;
class Bai9 extends react_1.Component {
    constructor(props) {
        super(props);
        this.changeInput = (e) => {
            let value = e.target.value;
            this.setState(Object.assign(Object.assign({}, this.state), { date: +value }));
        };
        this.out = (e) => {
            e.preventDefault();
            clearInterval(interval);
            if (this.state.date > 0) {
                interval = setInterval(() => {
                    clearInterval(interval);
                    this.setState(Object.assign(Object.assign({}, this.state), { date: this.state.date - 1 }));
                }, 1000);
            }
        };
        this.pause = () => {
            clearInterval(interval);
        };
        this.restart = () => {
            clearInterval(interval);
            this.setState(Object.assign(Object.assign({}, this.state), { date: 0 }));
        };
        this.state = {
            date: 0,
        };
    }
    render() {
        return (<div>
        <form onSubmit={this.out}>
          <p>time:{this.state.date}</p>
          <input type="number" name="date" onChange={this.changeInput}/>
          <button type="submit">Starst</button>
        </form>
        <button onClick={this.pause}> Pause</button>
        <button onClick={this.restart}>Restart</button>
      </div>);
    }
}
exports.default = Bai9;
