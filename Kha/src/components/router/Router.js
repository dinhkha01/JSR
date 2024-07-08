"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_router_dom_1 = require("react-router-dom");
const About_1 = __importDefault(require("./About"));
const Products_1 = __importDefault(require("./Products"));
const Profile_1 = __importDefault(require("./Profile"));
const Home_1 = __importDefault(require("./Home"));
const List_1 = __importDefault(require("./List"));
const Add_1 = __importDefault(require("./Add"));
const Edit_1 = __importDefault(require("./Edit"));
const Router = () => {
    return (<div>
      <react_router_dom_1.Routes>
        <react_router_dom_1.Route path="/home" element={<Home_1.default />}/>
        <react_router_dom_1.Route path="/about" element={<About_1.default />}/>
        <react_router_dom_1.Route path="/products" element={<Products_1.default />}>
          <react_router_dom_1.Route index element={<List_1.default />}/>
          <react_router_dom_1.Route path="add" element={<Add_1.default />}/>
          <react_router_dom_1.Route path="edit" element={<Edit_1.default />}/>
        </react_router_dom_1.Route>
        <react_router_dom_1.Route path="/profile/:id/:name" element={<Profile_1.default />}/>
      </react_router_dom_1.Routes>
    </div>);
};
exports.default = Router;
