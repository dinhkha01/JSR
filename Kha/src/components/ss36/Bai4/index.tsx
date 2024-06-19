import React, { useEffect, useRef } from "react";

const Bai4 = () => {
  const input = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (input.current) {
      input.current.focus();
    }
  }, []);

  return (
    <div>
      <input type="text" ref={input} />
    </div>
  );
};

export default Bai4;
