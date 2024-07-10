import React, { useEffect } from "react";
import { Delete } from "../../service";

const Bai4 = () => {
  useEffect(() => {
    Delete(10);
  });
  return <div></div>;
};

export default Bai4;
