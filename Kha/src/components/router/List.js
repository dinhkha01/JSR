"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const List = () => {
    const navigate = (0, react_router_dom_1.useNavigate)();
    return (<div>
      <h1>Danh sach san pham</h1>
      <button onClick={() => navigate("/profile/10/kha")}>
        Chuyển sang trang Products
      </button>
    </div>);
};
exports.default = List;
