import React, { useState } from "react";

const Bai7 = () => {
  const [count, setCount] = useState(0);
  const [oldcount, setOldcount] = useState(0);
  const HandleButtonClick = () => {
    setOldcount(count);
    setCount(count + 1);
  };

  return (
    <div>
      <p>gia tri cu: {oldcount}</p>
      <p>gia tri moi: {count}</p>
      <button onClick={HandleButtonClick}> tang</button>
    </div>
  );
};

export default Bai7;
