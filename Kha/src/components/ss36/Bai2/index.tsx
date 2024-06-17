import React, { useEffect, useState } from "react";

const Bai2 = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = `${count}`;
  }, [count]);

  const click = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <button onClick={click}>click: {count}</button>
    </div>
  );
};

export default Bai2;
