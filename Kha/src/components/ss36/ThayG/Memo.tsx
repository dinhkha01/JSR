import React, { useCallback, useMemo, useState } from "react";
import ConMemo from "./ConMemo";

const Memo = () => {
  const [count, setCount] = useState(0);
  const [arr, setArr] = useState([1, 2, 3]);

  const title = useMemo(() => {
    return arr.reduce((temp, num) => temp + num, 0);
  }, [arr]);

  const random = () => {
    let a = Math.floor(Math.random() * 100);
    setArr([...arr, a]);
  };
  const handlebutton = useCallback(() => {
    console.log("e");
    setCount(count + 1);
  }, []);

  return (
    <div>
      <ConMemo count={count} handlebutton={handlebutton} />
      <p>{title}</p>
      <button onClick={random}>them so</button>
    </div>
  );
};

export default Memo;
