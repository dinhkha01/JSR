// lấy dữ liệu
export const getAllpost = async () => {
  const response = await fetch("http://localhost:9998/post"); /// mặc định là GET
  if (!response.ok) {
    throw new Error(response.statusText);
  } else {
    return await response.json();
  }
};
// lay du lieu theo id
export const getPostId = async (id: number) => {
  const response = await fetch("http://localhost:9998/post/" + id);
  return response.json();
};
// thêm mới
// export const createNewPost = async (data: {}) => {
//   const response = await fetch("http://localhost:9998/post", {
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   });
//   return response.json();
// };

export const createNewPost = async (data: {}) => {
  const response = await fetch("http://localhost:9998/post", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
};
// xóa
export const Delete = async (id: number) => {
  const response = await fetch("http://localhost:9998/post/" + id, {
    method: "DELETE",
  });
  return response.json();
};

/// update
export const updatePost = async (data: any, id: any) => {
  const response = await fetch("http://localhost:9998/post/" + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
};
