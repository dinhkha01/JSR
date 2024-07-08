"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
const Product_1 = __importDefault(require("../pages/admin/Product"));
const ProductList_1 = __importDefault(require("../layout/ProductList"));
const ProductAdd_1 = __importDefault(require("../layout/ProductAdd"));
const ProductEdit_1 = __importDefault(require("../layout/ProductEdit"));
const HomePage_1 = __importDefault(require("../pages/user/HomePage"));
const Router = () => {
    return (<div>
      <react_router_dom_1.Routes>
        <react_router_dom_1.Route path="/home" element={<HomePage_1.default />}/>
        <react_router_dom_1.Route path="/admin/product" element={<Product_1.default />}/>
        <react_router_dom_1.Route index element={<ProductList_1.default />}/>
        <react_router_dom_1.Route path="add" element={<ProductAdd_1.default />}/>
        <react_router_dom_1.Route path="edit" element={<ProductEdit_1.default />}/>
      </react_router_dom_1.Routes>
    </div>);
};
exports.default = Router;
