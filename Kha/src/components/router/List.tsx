import React from "react";
import { useNavigate } from "react-router-dom";

const List = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Danh sach san pham</h1>
      <button onClick={() => navigate("/profile/10/kha")}>
        Chuyển sang trang Products
      </button>
    </div>
  );
};

export default List;
