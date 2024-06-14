import React, { ChangeEvent, useState } from "react";

export default function Bai9() {
  const [sex, setSex] = useState<string>("");

  const changeSex = (e: ChangeEvent<HTMLInputElement>) => {
    setSex(e.target.value);
  };

  return (
    <div>
      <h3>{sex}</h3>
      <form>
        <input type="checkbox" value={"Nam"} onChange={changeSex} />
        <label htmlFor="">Nam</label>
        <br />

        <input type="checkbox" value={"Nữ"} onChange={changeSex} />
        <label htmlFor="">Nữ</label>
        <br />
        <input type="checkbox" value={"NOT"} onChange={changeSex} />
        <label htmlFor="">Not Sex</label>
      </form>
    </div>
  );
}
