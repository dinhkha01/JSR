import React, { useState } from "react";

export default function Bai4() {
  const [p, setP] = useState<boolean>(false);
  const doi = () => {
    setP(!p);
  };

  return (
    <div>
      <button onClick={doi}>Bam choi</button>
      <h5>{p ? "tieude" : ""}</h5>
    </div>
  );
}
