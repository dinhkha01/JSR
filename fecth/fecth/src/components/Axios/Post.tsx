import React from "react";
import { Button, Card } from "react-bootstrap";
import { Post } from "../Bai2";

const Posts = ({ data }: { data: Post }) => {
  return (
    <div>
      <Card>
        <Card.Header>#{data.id}</Card.Header>
        <Card.Body>
          <Card.Title>{data.name}</Card.Title>
          <Card.Text>
            <img
              src={data.img}
              alt=""
              className="img-thumbnail"
              style={{ height: 80, width: 80 }}
            />
          </Card.Text>
          <Button variant="info">CHON</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Posts;
