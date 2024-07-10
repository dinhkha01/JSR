import { useEffect, useState } from "react";
import "./App.css";
import { getAllpost, updatePost } from "./service";
import Bai2 from "./components/Bai2";
import Bai3 from "./components/Bai3";
import Bai4 from "./components/Bai4";
import Bai5 from "./components/Bai5";
import Bai6 from "./components/Bai6";

function App() {
  return (
    <>
      {/* <Bai2 /> */}
      <Bai5 />
      <Bai6 />
    </>
  );
}

export default App;
