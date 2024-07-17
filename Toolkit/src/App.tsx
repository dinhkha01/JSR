import { useSelector } from "react-redux";
import "./App.css";
import { useDispatch } from "react-redux";
import { actions } from "./redux/store/reducers/t";

function App() {
  const state = useSelector((state: { count: number }) => state);
  const dispatch = useDispatch();
  return (
    <>
      <p>{state.count}</p>
      <button onClick={() => dispatch(actions.increment(null))}>+</button>
      <button onClick={() => dispatch(actions.decrement(null))}>-</button>
    </>
  );
}

export default App;
