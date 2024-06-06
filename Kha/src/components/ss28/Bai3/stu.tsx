import React, { Component } from "react";
import { Stu } from ".";
type PropsType = {
  list: Stu[];
};

export default class Stu1 extends Component<PropsType> {
  constructor(props: PropsType) {
    super(props);
  }

  render() {
    return (
      <div>
        <table border={1}>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Address</th>
          </tr>
          {this.props.list.map((item, index) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.address}</td>
            </tr>
          ))}
        </table>
      </div>
    );
  }
}
