import React from "react";
import { Button, Col, Form, InputGroup, Row } from "react-bootstrap";
import { Search as SearchIcon, Bell } from "react-bootstrap-icons";

const Search = () => {
  return (
    <div className="py-3">
      <Row className="align-items-center">
        <Col md={6} lg={8}>
          <InputGroup>
            <InputGroup.Text>
              <SearchIcon />
            </InputGroup.Text>
            <Form.Control type="text" placeholder="Search" />
          </InputGroup>
        </Col>
        <Col md={6} lg={4}>
          <Row className="justify-content-end align-items-center">
            <Col xs="auto">
              <Bell size={24} className="me-4" />
            </Col>
            <Col xs="auto">
              <img
                src="https://i.pinimg.com/474x/c9/8b/6d/c98b6d9017c0ba2461fcc4926caee22e.jpg"
                alt="Profile"
                style={{ width: "40px", height: "40px", borderRadius: "50%" }}
              />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Search;
