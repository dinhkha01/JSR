"use strict";
// import React, { Component } from "react";
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
// type ProType = {
//   props: string;
// };
// type StateTypes = {
//   companyState: string;
// };
// export default class Test extends Component<ProType, StateTypes> {
//   constructor(props: ProType) {
//     super(props);
//     this.state = {
//       companyState: "Kha",
//     };
//   }
//   switch = () => {
//     this.setState({
//       companyState: "Hà",
//     });
//   };
//   render() {
//     return (
//       <div>
//         <h3>{this.state.companyState}</h3>
//         <button onClick={this.switch}>Bấm đê</button>
//       </div>
//     );
//   }
// }
const react_1 = __importStar(require("react"));
class Test extends react_1.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Kha",
            dob: "",
            count: 0,
        };
    }
    render() {
        let keyword = "Hà";
        return (<div>
        <p>{this.props.id}</p>
        <p>{this.props.name}</p>
        <p>{this.state.name}</p>
        <p>{this.state.count}</p>
        <button onClick={() => this.props.callBack(keyword)}> click</button>
        <br />
        <button onClick={() => this.setState(Object.assign(Object.assign({}, this.state), { name: "Hà" }))}>
          {" "}
          click
        </button>
        <br />
        <button onClick={() => this.setState(Object.assign(Object.assign({}, this.state), { count: this.state.count + 10 }))}>
          bu
        </button>
      </div>);
    }
}
exports.default = Test;
