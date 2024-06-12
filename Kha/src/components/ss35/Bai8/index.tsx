import React, { ChangeEvent, useState } from "react";

export default function Bai8() {
  const [data, setData] = useState<string>("");
  const outData = (e: ChangeEvent<HTMLSelectElement>) => {
    setData(e.target.value);
  };
  return (
    <div>
      <h3>Tỉnh: {data}</h3>
      <select name="" id="" value={data} onChange={outData}>
        <option value="HCM">HCM</option>
        <option value="Nghệ An">Nghệ An</option>
        <option value="Hà Nội">Hà Nội</option>
        <option value="Đồng Nai">Đồng Nai</option>
      </select>
    </div>
  );
}
