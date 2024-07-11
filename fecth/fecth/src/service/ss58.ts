import { Girl } from "../components/Ss58";
import { createNewPost } from "./index";
import axios from "axios";

export const getAllGirl = async () => {
  const res = await axios.get("http://localhost:9998/products");
  if (res.status === 200) {
    return res.data;
  } else {
    throw new Error("Lỗi khi lấy dữ liệu");
  }
};

export const deleteGirl = async (id: number, newPost: {}) => {
  const res = await axios.put(`http://localhost:9998/products/${id}`, newPost, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (res.status === 200) {
    return res.data;
  } else {
    throw new Error("Lỗi khi cập nhật");
  }
};
export const createNewGirl = async (data: {}) => {
  const res = await axios.post("http://localhost:9998/products", data, {
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
