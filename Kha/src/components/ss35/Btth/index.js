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
const Formtodo_1 = __importDefault(require("./Formtodo"));
const List_1 = __importDefault(require("./List"));
const data_1 = require("./data");
const Btth = () => {
    const [todos, setTodos] = (0, react_1.useState)(data_1.data);
    const addTodo = (title) => {
        const newTodo = {
            id: todos.length + 1,
            title: title,
            status: false,
        };
        setTodos([...todos, newTodo]);
    };
    const deleteTodo = (id) => {
        const newData = todos.filter((item) => item.id != id);
        setTodos(newData);
    };
    const status = (id) => {
        const updateStatus = todos.map((item) => item.id === id ? Object.assign(Object.assign({}, item), { status: !item.status }) : item);
        setTodos(updateStatus);
    };
    return (<div>
      <h3>Danh sach cong viec</h3>
      <Formtodo_1.default add={addTodo}/>
      <List_1.default todos={todos} deleteTodo={deleteTodo} statu={status}/>
    </div>);
};
exports.default = Btth;
