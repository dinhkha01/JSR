"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_bootstrap_1 = require("react-bootstrap");
const react_bootstrap_icons_1 = require("react-bootstrap-icons");
const react_router_dom_1 = require("react-router-dom");
const Dashboard = () => {
    return (<div>
      <react_bootstrap_1.Navbar bg="light" variant="light" expand="lg" className="flex-column vh-100">
        <react_bootstrap_1.Container className="p-0">
          <react_bootstrap_1.Navbar.Brand href="#home" className="text-primary mb-4 ">
            Sales.
          </react_bootstrap_1.Navbar.Brand>
        </react_bootstrap_1.Container>
        <div className="d-flex flex-column  h-100 ">
          <react_bootstrap_1.Nav className="flex-column">
            <react_router_dom_1.NavLink className="nav-link mb-2 d-flex align-items-center" to="/admin">
              <react_bootstrap_icons_1.Bank className="me-2"/> Lab Test
            </react_router_dom_1.NavLink>
            <react_router_dom_1.NavLink className="nav-link mb-2 d-flex align-items-center" to="/dashboard">
              <react_bootstrap_icons_1.Grid3x3GapFill className="me-2"/> Dashboard
            </react_router_dom_1.NavLink>
            <react_router_dom_1.NavLink className="nav-link mb-2 d-flex align-items-center" to="/appointment">
              <react_bootstrap_icons_1.Calendar3 className="me-2"/> Appointment
            </react_router_dom_1.NavLink>
            <react_router_dom_1.NavLink className="nav-link mb-2 d-flex align-items-center" to="/medicineorder">
              <react_bootstrap_icons_1.Capsule className="me-2"/> Medicine Order
            </react_router_dom_1.NavLink>
            <react_router_dom_1.NavLink className="nav-link mb-2 d-flex align-items-center" to="/message">
              <react_bootstrap_icons_1.Envelope className="me-2"/> Message
            </react_router_dom_1.NavLink>
            <react_router_dom_1.NavLink className="nav-link mb-2 d-flex align-items-center" to="/payment">
              <react_bootstrap_icons_1.Wallet2 className="me-2"/> Payment
            </react_router_dom_1.NavLink>
            <react_router_dom_1.NavLink className="nav-link mb-2 d-flex align-items-center" to="/settings">
              <react_bootstrap_icons_1.Gear className="me-2"/> Settings
            </react_router_dom_1.NavLink>
          </react_bootstrap_1.Nav>
          <react_bootstrap_1.Nav className="flex-column mt-auto">
            <react_router_dom_1.NavLink className="nav-link d-flex align-items-center" to="/help">
              <react_bootstrap_icons_1.QuestionCircle className="me-2"/> Help
            </react_router_dom_1.NavLink>
          </react_bootstrap_1.Nav>
        </div>
      </react_bootstrap_1.Navbar>
    </div>);
};
exports.default = Dashboard;
