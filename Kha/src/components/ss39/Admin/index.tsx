import "bootstrap/dist/css/bootstrap.min.css";

import { Col, Container, Row } from "react-bootstrap";

import Dashboard from "./Doashboard";

import Mid from "./Mid";
import Search from "./Search";
import List from "./List";

function Admin() {
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

export default Admin;
