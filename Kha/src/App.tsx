import "bootstrap/dist/css/bootstrap.min.css";

import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Admin from "./components/ss39/Admin";
import Dashboard from "./components/ss39/Admin/Doashboard";
import Router from "./components/ss39/Router";
import AdminAll from "./components/ss39/AdminAll";

function App() {
  return (
    <div>
      <AdminAll />
    </div>
  );
}

export default App;
