import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Mid = () => {
  return (
    <div className="p-3">
      <h3>Sales Information</h3>
      <Row>
        <Col xs={3} className="mb-3">
          <Form.Label htmlFor="customer">Customer</Form.Label>
          <Form.Control
            type="text"
            id="customer"
            aria-describedby="customerHelpBlock"
            placeholder="Enter Customer Name"
          />
        </Col>
        <Col xs={3} className="mb-3">
          <Form.Label htmlFor="invoiceId">Invoice ID</Form.Label>
          <Form.Control
            type="text"
            id="invoiceId"
            aria-describedby="invoiceIdHelpBlock"
            placeholder="Enter Invoice ID"
          />
        </Col>
        <Col xs={3} className="mb-3">
          <Form.Label htmlFor="startDate">Start Date</Form.Label>
          <Form.Control
            type="text"
            id="startDate"
            aria-describedby="startDateHelpBlock"
            placeholder="Enter Start Date"
          />
        </Col>
        <Col xs={3} className="mb-3">
          <Form.Label htmlFor="endDate">End Date</Form.Label>
          <Form.Control
            type="text"
            id="endDate"
            aria-describedby="endDateHelpBlock"
            placeholder="Enter End Date"
          />
        </Col>
      </Row>
    </div>
  );
};

export default Mid;
