import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Table } from "react-bootstrap";
import Student from "./Student";
import { IStudent } from ".";
interface PropsType {
  list: IStudent[];
}

export default class List extends Component<PropsType> {
  constructor(props: PropsType) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Danh sách sinh viên</h2>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>dob</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Sex</th>
              <th colSpan={2}>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.props.list.map((item, index) => (
              <Student key={item.id} item={item} />
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
