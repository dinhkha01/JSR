import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Alert } from "react-bootstrap";
import { ChangeEvent, FormEvent, useState } from "react";

type Todo = {
  id: number;
  title: string;
  statu: boolean;
};

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

export default function Bai1() {
  const [title, setTitle] = useState<string>("");
  const [data, setData] = useState<Todo[]>([
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
  const [editingTodo, setEditingTodo] = useState<Todo | null>(null);
  const [editTitle, setEditTitle] = useState<string>("");

  const changeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const changeEditInput = (e: ChangeEvent<HTMLInputElement>) => {
    setEditTitle(e.target.value);
  };

  const pushTodo = (e: FormEvent) => {
    e.preventDefault();
    const newTodo: Todo = {
      id: data.length + 1,
      title: title,
      statu: false,
    };
    setData([...data, newTodo]);
    setTitle("");
  };

  const startEditing = (todo: Todo) => {
    setEditingTodo(todo);
    setEditTitle(todo.title);
  };

  const cancelEditing = () => {
    setEditingTodo(null);
    setEditTitle("");
  };

  const saveEdit = (e: FormEvent) => {
    e.preventDefault();
    if (editingTodo) {
      const updatedTodos = data.map((item) =>
        item.id === editingTodo.id ? { ...item, title: editTitle } : item
      );
      setData(updatedTodos);
      setEditingTodo(null);
      setEditTitle("");
    }
  };

  const changeStatus = (id: number) => {
    const updatedTodos = data.map((item) =>
      item.id === id ? { ...item, statu: !item.statu } : item
    );
    setData(updatedTodos);
  };

  const Delete = (id: number) => {
    if (window.confirm("may muon xao ?????")) {
      const updateDelete = data.filter((item) => item.id !== id);
      setData(updateDelete);
    }
  };

  return (
    <div>
      <div>
        <h3>Danh sách công việc</h3>
        <Form onSubmit={pushTodo}>
          <input type="text" value={title} onChange={changeInput} />
          <Button type="submit">Submit</Button>
        </Form>
        {data.map((todo) => {
          let color = Math.floor(Math.random() * 8);
          return (
            <Alert variant={colors[color]} key={todo.id}>
              <div className="d-flex justify-content-between">
                <div className="d-flex justify-content-between">
                  <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check
                      type="checkbox"
                      checked={todo.statu}
                      onChange={() => changeStatus(todo.id)}
                    />
                  </Form.Group>
                  {editingTodo?.id === todo.id ? (
                    <Form onSubmit={saveEdit}>
                      <Form.Control
                        type="text"
                        value={editTitle}
                        onChange={changeEditInput}
                      />
                      <Button variant="outline-success" type="submit">
                        Save
                      </Button>
                      <Button variant="outline-danger" onClick={cancelEditing}>
                        Cancel
                      </Button>
                    </Form>
                  ) : (
                    <p
                      className={
                        todo.statu ? "text-decoration-line-through" : ""
                      }
                    >
                      {todo.title}
                    </p>
                  )}
                </div>
                <div>
                  <Button
                    variant="outline-info"
                    onClick={() => startEditing(todo)}
                  >
                    Sửa
                  </Button>
                  <Button
                    variant="outline-light"
                    onClick={() => Delete(todo.id)}
                  >
                    Xóa
                  </Button>
                </div>
              </div>
            </Alert>
          );
        })}
      </div>
    </div>
  );
}
