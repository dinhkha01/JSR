import "bootstrap/dist/css/bootstrap.min.css";

import { Col, Container, Row } from "react-bootstrap";
import Dashboard from "./components/ss39/Admin/Doashboard";
import Search from "./components/ss39/Admin/Search";
import Mid from "./components/ss39/Admin/Mid";
import List from "./components/ss39/Admin/List";
import "./components/ss39/Admin/admin.css";

function App() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col xs={2}>
            <Dashboard />
          </Col>

          <Col xs={10}>
            <Search />
            <Mid />
            <List />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
