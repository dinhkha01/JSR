"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./App.css");
const router_1 = __importDefault(require("./router"));
function App() {
    return (<>
      <router_1.default />
      <img src=" https://scontent-hkg4-1.xx.fbcdn.net/v/t39.30808-6/448992437_393499887082176_7542152922471563653_n.jpg?stp=dst-jpg_p960x960&_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=e_RcaiGHbm8Q7kNvgE_w5je&_nc_ht=scontent-hkg4-1.xx&oh=00_AYCg07cdd6_IogVxO7OMfOUK0NV4O0IinLsZeTl9utNlog&oe=668AA4F5" style={{ width: 500, height: 500, objectFit: "cover" }}/>
    </>);
}
exports.default = App;
