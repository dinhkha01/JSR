import React, { useState } from "react";

export default function Bai1() {
  const [name, setName] = useState<string>("Kha");
  const switchName = () => {
    setName("Be Ha");
  };
  return (
    <div>
      <h3>{name}</h3>
      <button onClick={switchName}>click</button>
    </div>
  );
}
/// effect(()=>{})/// hoạt động khi render hoặc render lại
/// effect(()=>{}[])/// mảng rỗng ko phụ thuộc chỉ chạy 1 lần
/// effect(()=>{}[name])/// mảng rỗng phụ thuộc, hoạt động khi biến truyền vào thay đổi
