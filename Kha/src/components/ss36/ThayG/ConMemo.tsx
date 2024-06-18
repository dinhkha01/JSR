import React, { memo } from "react";
type PropType = {
  count: number;
  handlebutton: () => void;
};

const ConMemo = ({ count, handlebutton }: PropType) => {
  return (
    <div>
      <p>{count}</p>
      <button onClick={() => handlebutton}>tang 1</button>
    </div>
  );
};

export default memo(ConMemo);
