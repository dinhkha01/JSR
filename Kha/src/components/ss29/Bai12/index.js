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
class Bai12 extends react_1.Component {
    constructor(props) {
        super(props);
        this.changeIsOpen = (status) => {
            this.setState({ isOpen: status });
        };
        this.state = {
            isOpen: false,
        };
    }
    render() {
        return (<div>
        <div onMouseOver={() => this.changeIsOpen(true)} onMouseOut={() => this.changeIsOpen(false)}>
          chọt vô đây
        </div>

        <button onClick={() => this.changeIsOpen(true)} style={{
                backgroundColor: "pink",
                color: "black",
                padding: "4px 10px",
                border: "none",
                borderRadius: "2px",
            }}>
          Show Notification
        </button>
        {this.state.isOpen && (<div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "20px",
                    maxWidth: "200px",
                    backgroundColor: "lightblue",
                    padding: "10px",
                    borderRadius: "5px",
                    boxShadow: "0px 0px 0px 5px 2px black",
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                }}>
            <p>Thông báo nè </p>
            <span onClick={() => this.changeIsOpen(false)} style={{ color: "red" }}>
              X
            </span>
          </div>)}
      </div>);
    }
}
exports.default = Bai12;
