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
require("bootstrap/dist/css/bootstrap.min.css");
const react_bootstrap_1 = require("react-bootstrap");
const Student_1 = __importDefault(require("./Student"));
class List extends react_1.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<div>
        <h2>Danh sách sinh viên</h2>
        <react_bootstrap_1.Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>dob</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Sex</th>
              <th colSpan={2}>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.props.list.map((item, index) => (<Student_1.default key={item.id} item={item}/>))}
          </tbody>
        </react_bootstrap_1.Table>
      </div>);
    }
}
exports.default = List;
