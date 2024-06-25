import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Mid = () => {
  return (
    <div className="p-3">
      <h3 className="mb-4">Sales Information</h3>
      <Row>
        <Col sm={6} lg={3} className="mb-3">
          <Form.Group controlId="customer">
            <Form.Label>Customer</Form.Label>
            <Form.Control type="text" placeholder="Enter Customer Name" />
          </Form.Group>
        </Col>
        <Col sm={6} lg={3} className="mb-3">
          <Form.Group controlId="invoiceId">
            <Form.Label>Invoice ID</Form.Label>
            <Form.Control type="text" placeholder="Enter Invoice ID" />
          </Form.Group>
        </Col>
        <Col sm={6} lg={3} className="mb-3">
          <Form.Group controlId="startDate">
            <Form.Label>Start Date</Form.Label>
            <Form.Control type="date" placeholder="Enter Start Date" />
          </Form.Group>
        </Col>
        <Col sm={6} lg={3} className="mb-3">
          <Form.Group controlId="endDate">
            <Form.Label>End Date</Form.Label>
            <Form.Control type="date" placeholder="Enter End Date" />
          </Form.Group>
        </Col>
      </Row>
    </div>
  );
};

export default Mid;
