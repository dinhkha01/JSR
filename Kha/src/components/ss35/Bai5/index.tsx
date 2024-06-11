import React, { ChangeEvent, useState } from "react";

export default function Bai5() {
  const [data, setData] = useState<string>("");
  const changeData = (e: ChangeEvent<HTMLInputElement>) => {
    setData(e.target.value);
  };
  return (
    <div>
      <input type="text" value={data} onChange={changeData} />
      <h3>{data}</h3>
    </div>
  );
}
