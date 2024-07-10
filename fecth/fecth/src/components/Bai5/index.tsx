import React, { useEffect, useState } from "react";
import { createNewPost, getAllpost } from "../../service";
import { Post } from "../Bai2";

const Bai5 = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const newPost = {
    userId: 2,
    title: "Kha",
    body: "hahaa",
  };

  useEffect(() => {
    getAllpost().then((data) => {
      setPosts(data);
    });
  }, []);

  const addPost = () => {
    createNewPost(newPost).then((createdPost) => {
      setPosts((prevPosts) => [...prevPosts, createdPost]);
    });
  };

  return (
    <div>
      <h2>Posts</h2>
      {posts.map((post) => (
        <div key={post.id}>
          <p>ID: {post.id}</p>
          <p>Title: {post.title}</p>
          <p>Body: {post.body}</p>
        </div>
      ))}
      <button onClick={addPost}>Add post</button>
    </div>
  );
};

export default Bai5;
