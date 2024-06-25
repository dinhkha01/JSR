import React from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { Apple } from "react-bootstrap-icons";

const Search = () => {
  return (
    <div>
      <Row className="align-items-center me-0">
        <Col md={6}>
          <InputGroup className="mb-2">
            <InputGroup.Text>
              <i className="fas fa-search"></i>
            </InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="Search"
              className="mr-sm-4"
            />
          </InputGroup>
        </Col>
        <Col md={4}></Col>
        <Col xs="auto">
          <i className="fas fa-bell" style={{ fontSize: "24px" }}></i>
        </Col>

        <Col xs="auto">
          <img
            src="https://i.pinimg.com/474x/c9/8b/6d/c98b6d9017c0ba2461fcc4926caee22e.jpg"
            alt="Profile"
            style={{ width: "40px", height: "40px", borderRadius: "50%" }}
          />
        </Col>
      </Row>
    </div>
  );
};

export default Search;
