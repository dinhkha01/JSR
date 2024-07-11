import { createNewPost } from "./index";
import axios from "axios";
// lấy dữ all liệu
export const getAllPosts = async () => {
  const res = await axios.get("http://localhost:9998/products");
  if (res.status == 200) {
    return res.data;
  } else {
    throw new Error("loi");
  }
};
// lấy dữ liệu theo id
export const getPostsId = async (id: number) => {
  const res = await axios.get("http://localhost:9998/products/" + id);
  if (res.status == 200) {
    return res.data;
  } else {
    throw new Error("loi");
  }
};
/// thêm mới
export const createNewPosts = async (newPost: {}) => {
  const res = await axios.post("http://localhost:9998/products", newPost, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (res.status == 201) {
    return res.data;
  } else {
    throw new Error("loi vl");
  }
};
/// xóa
export const DeleteId = async (id: number) => {
  const res = await axios.delete("http://localhost:9998/products/" + id);
  if (res.status === 200) {
    return res.data;
  } else {
    throw new Error("loi vl");
  }
};
// sửa
export const editPosts = async (newPost: {}, id: number) => {
  const res = await axios.put("http://localhost:9998/products/" + id, newPost, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log(res);

  if (res.status == 200) {
    return res.data;
  } else {
    throw new Error("loi vl");
  }
};
