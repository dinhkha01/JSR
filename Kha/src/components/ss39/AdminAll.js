"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_bootstrap_1 = require("react-bootstrap");
const Router_1 = __importDefault(require("./Router"));
const Doashboard_1 = __importDefault(require("./Admin/Doashboard"));
const AdminAll = () => {
    return (<div>
      <react_bootstrap_1.Row>
        <react_bootstrap_1.Col xs={2}>
          <Doashboard_1.default />
        </react_bootstrap_1.Col>
        <react_bootstrap_1.Col xs={10}>
          <Router_1.default />
        </react_bootstrap_1.Col>
      </react_bootstrap_1.Row>
    </div>);
};
exports.default = AdminAll;
