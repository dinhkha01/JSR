import React, { useState } from "react";

const Bai3 = () => {
  const [tt, setTt] = useState("");
  const [sp, setSp] = useState("");
  const [gt, setGt] = useState("");
  const [lh, setLh] = useState("");

  const ttc = () => {
    setTt("gray");
    setSp("");
    setGt("");
    setLh("");
  };
  const spc = () => {
    setTt("");
    setSp("gray");
    setGt("");
    setLh("");
  };
  const gtc = () => {
    setTt("");
    setSp("");
    setGt("gray");
    setLh("");
  };
  const lhc = () => {
    setTt("");
    setSp("");
    setGt("");
    setLh("gray");
  };

  return (
    <div>
      <div className="d-flex ">
        <p style={{ margin: 10, backgroundColor: tt }} onClick={ttc}>
          Trang chu
        </p>
        <p style={{ margin: 10, backgroundColor: sp }} onClick={spc}>
          San pham
        </p>
        <p style={{ margin: 10, backgroundColor: gt }} onClick={gtc}>
          Gioi thieu
        </p>
        <p style={{ margin: 10, backgroundColor: lh }} onClick={lhc}>
          Lien he
        </p>
      </div>
    </div>
  );
};

export default Bai3;
