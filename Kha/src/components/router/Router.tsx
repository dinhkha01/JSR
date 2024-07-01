import { Routes, Route } from "react-router-dom";
import About from "./About";
import Products from "./Products";
import Profile from "./Profile";
import Home from "./Home";
import List from "./List";
import Add from "./Add";
import Edit from "./Edit";

const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />}>
          <Route index element={<List />} />
          <Route path="add" element={<Add />} />
          <Route path="edit" element={<Edit />} />
        </Route>
        <Route path="/profile/:id/:name" element={<Profile />} />
      </Routes>
    </div>
  );
};

export default Router;
