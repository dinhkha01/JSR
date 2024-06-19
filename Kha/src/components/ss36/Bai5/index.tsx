import React, { useEffect, useState } from "react";

const Bai5 = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    setInterval(() => {
      setTime(new Date());
    }, 1000);
  });

  return (
    <div>
      <h5>{time.toLocaleTimeString()}</h5>
    </div>
  );
};

export default Bai5;
