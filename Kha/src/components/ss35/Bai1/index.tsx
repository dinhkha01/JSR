import React, { useState } from "react";

export default function Bai1() {
  const [name, setName] = useState<string>("Kha");
  const switchName = () => {
    setName("Be Ha");
  };
  return (
    <div>
      <h3>{name}</h3>
      <button onClick={switchName}>click</button>
    </div>
  );
}
