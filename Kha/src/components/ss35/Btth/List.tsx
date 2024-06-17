import React from "react";
import { Form, ListGroup } from "react-bootstrap";
import { Todo } from "./data";
type PropsType = {
  todos: Todo[];
  deleteTodo: (id: number) => void;
  statu: (id: number) => void;
};
const List = ({ todos, deleteTodo, statu }: PropsType) => {
  return (
    <div>
      <ListGroup>
        {todos.map((item) => (
          <ListGroup.Item key={item.id}>
            <Form.Check
              type="checkbox"
              checked={item.status}
              onChange={() => statu(item.id)}
            />
            <p>{item.id}</p>
            <p className={item.status ? "text-decoration-line-through" : ""}>
              {item.title}
            </p>
            <button>Sua</button>
            <button onClick={() => deleteTodo(item.id)}>Xoa</button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default List;
