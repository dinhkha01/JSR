import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
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
  const changeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
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
        <Form>
          <input type="text" value={title} onChange={(e) => changeInput(e)} />
          <Button type="submit" onClick={pushTodo}>
            Submit
          </Button>
        </Form>
        {data.map((todo) => {
          let color = Math.floor(Math.random() * 8);

          return (
            <Alert variant={colors[color]} key={todo.id}>
              <div className=" d-flex justify-content-between">
                <div className=" d-flex justify-content-between">
                  <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" defaultChecked={todo.statu} />
                  </Form.Group>
                  <p
                    className={todo.statu ? "text-decoration-line-through" : ""}
                  >
                    {todo.title}
                  </p>
                </div>
                <div>
                  <Button variant="outline-info">Sửa</Button>
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
