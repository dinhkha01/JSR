import React, { useState, useEffect } from "react";

const Bai10 = () => {
  const [keyInfo, setKeyInfo] = useState("");
  const [code, setCode] = useState("");
  useEffect(() => {
    const handleKey = (e: any) => {
      setKeyInfo(e.key);
      setCode(e.keyCode);
    };
    window.addEventListener("keydown", handleKey);
  }, []);

  return (
    <div style={{ padding: "20px", fontSize: "18px" }}>
      <p>Bạn đã nhấn phím: {keyInfo}</p>
      <p>Mã phím: {code}</p>
    </div>
  );
};

export default Bai10;
