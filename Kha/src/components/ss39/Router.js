"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const Dashboard_1 = __importDefault(require("./Dashboard"));
const Admin_1 = __importDefault(require("./Admin"));
const Appointment_1 = __importDefault(require("./Appointment"));
const MedicineOrder_1 = __importDefault(require("./MedicineOrder"));
const Router = () => {
    return (<div>
      <react_router_dom_1.Routes>
        <react_router_dom_1.Route path="/admin" element={<Admin_1.default />}/>
        <react_router_dom_1.Route path="/dashboard" element={<Dashboard_1.default />}/>
        <react_router_dom_1.Route path="/appointment" element={<Appointment_1.default />}/>
        <react_router_dom_1.Route path="/medicineorder" element={<MedicineOrder_1.default />}/>
      </react_router_dom_1.Routes>
    </div>);
};
exports.default = Router;
