import React, { useReducer } from "react";
// các thành phần:
// reducer: là nơi xử lí các action và cập nhật lại state
//action: đại diện cho chức năng cần xử lí
// state: trạng thái của reducer
const reducer = (state = 0, action: string) => {
  switch (action) {
    case "increment1":
      return state + 1;
    case "increment2":
      return state + 2;
    case "increment3":
      return state + 3;
    default:
      return state;
  }
};

const Reducer = () => {
  const [count, dispatch] = useReducer(reducer, 0, undefined);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch("increment1")}>Bam de</button>
      <button onClick={() => dispatch("increment2")}>Bam t ne</button>
      <button onClick={() => dispatch("increment3")}>Bam di dcmm</button>
    </div>
  );
};

export default Reducer;
