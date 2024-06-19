import React, { useState } from "react";

const Bai3 = () => {
  const [color, setColor] = useState("tt");

  const handleClick = (section: string) => {
    setColor(section);
  };

  const getBackgroundColor = (section: string) => {
    return color === section ? "gray" : "";
  };

  return (
    <div>
      <div className="d-flex ">
        <p
          style={{ margin: 10, backgroundColor: getBackgroundColor("tt") }}
          onClick={() => handleClick("tt")}
        >
          Trang chu
        </p>
        <p
          style={{ margin: 10, backgroundColor: getBackgroundColor("sp") }}
          onClick={() => handleClick("sp")}
        >
          San pham
        </p>
        <p
          style={{ margin: 10, backgroundColor: getBackgroundColor("gt") }}
          onClick={() => handleClick("gt")}
        >
          Gioi thieu
        </p>
        <p
          style={{ margin: 10, backgroundColor: getBackgroundColor("lh") }}
          onClick={() => handleClick("lh")}
        >
          Lien he
        </p>
      </div>
    </div>
  );
};

export default Bai3;
