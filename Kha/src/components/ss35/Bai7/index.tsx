import React, { ChangeEvent, useState } from "react";

export default function Bai7() {
  const [data, setData] = useState<string>("");
  const changeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setData(e.target.value);
  };

  return (
    <div>
      <input type="text" value={data} onChange={changeInput} />
      <h3>Do dai ki tu: {data.length}</h3>
    </div>
  );
}
