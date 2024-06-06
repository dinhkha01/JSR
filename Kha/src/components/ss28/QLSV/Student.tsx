import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { IStudent } from ".";
type PropsType = {
  item: IStudent;
};

export default class Student extends Component<PropsType> {
  constructor(props: PropsType) {
    super(props);
  }
  render() {
    let { id, name, dob, address, phone, sex } = this.props.item;
    return (
      <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{dob}</td>

        <td>{address}</td>
        <td>{phone}</td>
        <td>{sex ? "Nam" : "Nữ"}</td>
        <td>
          <Button variant="danger">xóa</Button>
        </td>
        <td>
          <Button variant="info">edit</Button>
        </td>
      </tr>
    );
  }
}
