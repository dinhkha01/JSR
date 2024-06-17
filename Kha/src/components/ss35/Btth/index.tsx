import React, { useState } from "react";
import Trytifi from "./Trytifi";
import Formtodo from "./Formtodo";
import List from "./List";
import { data } from "./data";

const Btth = () => {
  const [todos, setTodos] = useState(data);
  const addTodo = (title: string) => {
    const newTodo = {
      id: todos.length + 1,
      title: title,
      status: false,
    };
    setTodos([...todos, newTodo]);
  };
  const deleteTodo = (id: number) => {
    const newData = todos.filter((item) => item.id != id);
    setTodos(newData);
  };
  const status = (id: number) => {
    const updateStatus = todos.map((item) =>
      item.id === id ? { ...item, status: !item.status } : item
    );
    setTodos(updateStatus);
  };
  return (
    <div>
      <h3>Danh sach cong viec</h3>
      <Formtodo add={addTodo} />
      <List todos={todos} deleteTodo={deleteTodo} statu={status} />
    </div>
  );
};

export default Btth;
