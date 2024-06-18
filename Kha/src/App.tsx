import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeContext } from "./components/ss37/Bai1_4/ThemeContext";
import Button from "./components/ss37/Bai1_4/Button";
import Bai5 from "./components/ss37/Bai5";
import Bai6 from "./components/ss37/Bai6";
import Bai7 from "./components/ss37/Bai7";

function App() {
  return (
    <>
      <ThemeContext.Provider value="pink">
        <Button />
      </ThemeContext.Provider>
      <ThemeContext.Provider value="red">
        <Button />
      </ThemeContext.Provider>
      <Bai5 />
      <Bai6 />
      <Bai7 />
    </>
  );
}

export default App;
