import React, { useState } from "react";

export default function Bai3() {
  const [color, setColor] = useState<string>("red");
  const doiColor = () => {
    setColor("pink");
  };
  return (
    <div>
      <h3 style={{ color: color }}>HEHEHEEE</h3>
      <button onClick={doiColor}>Doi mau choi</button>
    </div>
  );
}
