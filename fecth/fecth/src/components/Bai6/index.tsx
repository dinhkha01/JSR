import React from "react";
import { updatePost } from "../../service";

const Bai6 = () => {
  const upPost = {
    userId: 2,
    title: "Kha",
    body: "hooooo",
  };

  updatePost(upPost, 1);
  return <div></div>;
};

export default Bai6;
