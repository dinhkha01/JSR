import React, { useEffect, useState } from "react";

const Bai1 = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    document.title = data;
  }, [data]);

  const changeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData(e.target.value);
  };

  return (
    <div>
      <input type="text" value={data} onChange={changeInput} />
    </div>
  );
};

export default Bai1;
