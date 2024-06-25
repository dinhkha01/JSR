import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import {
  Grid3x3GapFill,
  Calendar3,
  Capsule,
  Envelope,
  Wallet2,
  Gear,
  QuestionCircle,
  Bank,
} from "react-bootstrap-icons";

const Dashboard = () => {
  return (
    <div>
      <Navbar
        bg="light"
        variant="light"
        expand="lg"
        className="flex-column vh-100"
      >
        <Container className="p-0">
          <Navbar.Brand href="#home" className="text-primary mb-4 ">
            Sales.
          </Navbar.Brand>
        </Container>
        <div className="d-flex flex-column  h-100 ">
          <Nav className="flex-column">
            <Nav.Link className="mb-2 d-flex align-items-center">
              <Grid3x3GapFill className="me-2" /> Dashboard
            </Nav.Link>
            <Nav.Link className="mb-2 d-flex align-items-center">
              <Bank className="me-2" /> Lab Test
            </Nav.Link>
            <Nav.Link className="mb-2 d-flex align-items-center">
              <Calendar3 className="me-2" /> Appointment
            </Nav.Link>
            <Nav.Link className="mb-2 d-flex align-items-center">
              <Capsule className="me-2" /> Medicine Order
            </Nav.Link>
            <Nav.Link className="mb-2 d-flex align-items-center">
              <Envelope className="me-2" /> Message
            </Nav.Link>
            <Nav.Link className="mb-2 d-flex align-items-center">
              <Wallet2 className="me-2" /> Payment
            </Nav.Link>
            <Nav.Link className="mb-2 d-flex align-items-center">
              <Gear className="me-2" /> Settings
            </Nav.Link>
          </Nav>
          <Nav className="flex-column mt-auto">
            <Nav.Link className="d-flex align-items-center">
              <QuestionCircle className="me-2" /> Help
            </Nav.Link>
          </Nav>
        </div>
      </Navbar>
    </div>
  );
};

export default Dashboard;
