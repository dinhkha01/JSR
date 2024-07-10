import React, { useEffect, useState } from "react";
import { getPostId } from "../../service";

interface Post {
  id: number;
  title: string;
  body: string;
}

const Bai3 = () => {
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    getPostId(4).then((data) => setPost(data));
  }, []);

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <p>ID: {post.id}</p>
      <p>Title: {post.title}</p>
      <p>Body: {post.body}</p>
    </div>
  );
};

export default Bai3;
