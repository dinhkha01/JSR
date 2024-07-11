import axios from "axios";

export const getPostWithPaginate = async (page: number, perPage: number) => {
  const res = await axios.get(
    `http://localhost:9998/products?_page=${page}&_limit=${perPage}`
  );
  if (res.status === 200) {
    return res.data;
  } else {
    throw new Error("loi");
  }
};
