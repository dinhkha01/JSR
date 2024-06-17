import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { FormEvent, useState } from "react";

const Formtodo = ({ add }: { add: Function }) => {
  const [title, setTitle] = useState("");
  const handleForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    add(title);
    setTitle("");
  };
  return (
    <div>
      <Form onSubmit={handleForm}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};

export default Formtodo;
