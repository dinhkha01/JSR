"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Form_1 = __importDefault(require("react-bootstrap/Form"));
const Button_1 = __importDefault(require("react-bootstrap/Button"));
const react_bootstrap_1 = require("react-bootstrap");
const react_1 = require("react");
const colors = [
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
];
function Bai1() {
    const [title, setTitle] = (0, react_1.useState)("");
    const [data, setData] = (0, react_1.useState)([
        {
            id: 1,
            title: "hoc toan",
            statu: true,
        },
        {
            id: 2,
            title: "hoc code",
            statu: false,
        },
    ]);
    const [editingTodo, setEditingTodo] = (0, react_1.useState)(null);
    const [editTitle, setEditTitle] = (0, react_1.useState)("");
    const [completedCount, setCompletedCount] = (0, react_1.useState)(0);
    (0, react_1.useEffect)(() => {
        const count = data.filter((todo) => todo.statu).length;
        setCompletedCount(count);
    }, [data]);
    const changeInput = (e) => {
        setTitle(e.target.value);
    };
    const changeEditInput = (e) => {
        setEditTitle(e.target.value);
    };
    const pushTodo = (e) => {
        e.preventDefault();
        const newTodo = {
            id: data.length + 1,
            title: title,
            statu: false,
        };
        setData([...data, newTodo]);
        setTitle("");
    };
    const startEditing = (todo) => {
        setEditingTodo(todo);
        setEditTitle(todo.title);
    };
    const cancelEditing = () => {
        setEditingTodo(null);
        setEditTitle("");
    };
    const saveEdit = (e) => {
        e.preventDefault();
        if (editingTodo) {
            const updatedTodos = data.map((item) => item.id === editingTodo.id ? Object.assign(Object.assign({}, item), { title: editTitle }) : item);
            setData(updatedTodos);
            setEditingTodo(null);
            setEditTitle("");
        }
    };
    const changeStatus = (id) => {
        const updatedTodos = data.map((item) => item.id === id ? Object.assign(Object.assign({}, item), { statu: !item.statu }) : item);
        setData(updatedTodos);
    };
    const Delete = (id) => {
        if (window.confirm("may muon xao ?????")) {
            const updateDelete = data.filter((item) => item.id !== id);
            setData(updateDelete);
        }
    };
    return (<div>
      <div>
        <h3>Danh sách công việc</h3>
        <Form_1.default onSubmit={pushTodo}>
          <input type="text" value={title} onChange={changeInput}/>
          <Button_1.default type="submit">Submit</Button_1.default>
        </Form_1.default>
        <p>Số công việc đã hoàn thành: {completedCount}</p>
        {data.map((todo) => {
            let color = Math.floor(Math.random() * 8);
            return (<react_bootstrap_1.Alert variant={colors[color]} key={todo.id}>
              <div className="d-flex justify-content-between">
                <div className="d-flex justify-content-between">
                  <Form_1.default.Group className="mb-3" id="formGridCheckbox">
                    <Form_1.default.Check type="checkbox" checked={todo.statu} onChange={() => changeStatus(todo.id)}/>
                  </Form_1.default.Group>
                  {(editingTodo === null || editingTodo === void 0 ? void 0 : editingTodo.id) === todo.id ? (<Form_1.default onSubmit={saveEdit}>
                      <Form_1.default.Control type="text" value={editTitle} onChange={changeEditInput}/>
                      <Button_1.default variant="outline-success" type="submit">
                        Save
                      </Button_1.default>
                      <Button_1.default variant="outline-danger" onClick={cancelEditing}>
                        Cancel
                      </Button_1.default>
                    </Form_1.default>) : (<p className={todo.statu ? "text-decoration-line-through" : ""}>
                      {todo.title}
                    </p>)}
                </div>
                <div>
                  <Button_1.default variant="outline-info" onClick={() => startEditing(todo)}>
                    Sửa
                  </Button_1.default>
                  <Button_1.default variant="outline-light" onClick={() => Delete(todo.id)}>
                    Xóa
                  </Button_1.default>
                </div>
              </div>
            </react_bootstrap_1.Alert>);
        })}
      </div>
    </div>);
}
exports.default = Bai1;
