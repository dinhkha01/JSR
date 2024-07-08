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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const Header_1 = __importDefault(require("./Header"));
const Menu_1 = __importDefault(require("./Menu"));
const Main_1 = __importDefault(require("./Main"));
const Footer_1 = __importDefault(require("./Footer"));
require("./bai7.css");
class Bai7 extends react_1.Component {
    render() {
        return (<div>
        <Header_1.default />
        <div className="container">
          <div className="menu d-flex center">
            <Menu_1.default />
          </div>

          <div className="content">
            <div className="main d-flex center">
              <Main_1.default />
            </div>
            <div className="footer">
              <Footer_1.default />
            </div>
          </div>
        </div>
      </div>);
    }
}
exports.default = Bai7;
