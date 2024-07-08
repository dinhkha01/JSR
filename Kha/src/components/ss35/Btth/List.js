"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_bootstrap_1 = require("react-bootstrap");
const List = ({ todos, deleteTodo, statu }) => {
    return (<div>
      <react_bootstrap_1.ListGroup>
        {todos.map((item) => (<react_bootstrap_1.ListGroup.Item key={item.id}>
            <react_bootstrap_1.Form.Check type="checkbox" checked={item.status} onChange={() => statu(item.id)}/>
            <p>{item.id}</p>
            <p className={item.status ? "text-decoration-line-through" : ""}>
              {item.title}
            </p>
            <button>Sua</button>
            <button onClick={() => deleteTodo(item.id)}>Xoa</button>
          </react_bootstrap_1.ListGroup.Item>))}
      </react_bootstrap_1.ListGroup>
    </div>);
};
exports.default = List;
