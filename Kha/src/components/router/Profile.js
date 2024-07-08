"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const Profile = () => {
    const { id, name } = (0, react_router_dom_1.useParams)();
    return (<div>
      <h1>
        {id} : {name}
      </h1>
    </div>);
};
exports.default = Profile;
