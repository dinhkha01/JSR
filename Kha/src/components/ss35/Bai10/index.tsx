import React, { ChangeEvent, useState } from "react";

export default function Bai10() {
  const [checkedOptions, setCheckedOptions] = useState<{
    [key: string]: boolean;
  }>({});
  const [arr, setArr] = useState<string[]>([]);

  const changeSex = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setCheckedOptions({
      ...checkedOptions,
      [value]: checked,
    });

    if (checked) {
      setArr([...arr, value]);
    } else {
      setArr(arr.filter((item) => item !== value));
    }
  };

  return (
    <div>
      <h3>{arr.join(", ")}</h3>
      <form>
        <input
          type="checkbox"
          value="Nam"
          checked={checkedOptions["Nam"] || false}
          onChange={changeSex}
        />
        <label htmlFor="">Nam</label>
        <br />
        <input
          type="checkbox"
          value="Nữ"
          checked={checkedOptions["Nữ"] || false}
          onChange={changeSex}
        />
        <label htmlFor="">Nữ</label>
        <br />
        <input
          type="checkbox"
          value="BeDe"
          checked={checkedOptions["BeDe"] || false}
          onChange={changeSex}
        />
        <label htmlFor="">BeDe</label>
        <br />
        <input
          type="checkbox"
          value="Cu co gai"
          checked={checkedOptions["Cu co gai"] || false}
          onChange={changeSex}
        />
        <label htmlFor="">Cu co gai</label>
      </form>
    </div>
  );
}
