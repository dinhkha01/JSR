"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Form_1 = __importDefault(require("react-bootstrap/Form"));
const Button_1 = __importDefault(require("react-bootstrap/Button"));
const react_1 = require("react");
const Formtodo = ({ add }) => {
    const [title, setTitle] = (0, react_1.useState)("");
    const handleForm = (e) => {
        e.preventDefault();
        add(title);
        setTitle("");
    };
    return (<div>
      <Form_1.default onSubmit={handleForm}>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
        <Button_1.default type="submit">Submit</Button_1.default>
      </Form_1.default>
    </div>);
};
exports.default = Formtodo;
