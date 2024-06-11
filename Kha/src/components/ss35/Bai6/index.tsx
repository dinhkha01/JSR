import React, { useState } from "react";

export default function Bai6() {
  const [cout, setCout] = useState<number>(0);
  const increase = () => {
    setCout(cout + 1);
  };
  return (
    <div>
      <h5>số lần bấm là {cout}</h5>
      <button onClick={increase}>click</button>
    </div>
  );
}
