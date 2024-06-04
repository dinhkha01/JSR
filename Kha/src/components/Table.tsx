import React, { Component } from "react";
import "./css/table.css";
export default class Table extends Component {
  
  render() {
    return (
      <div>
        <table className="hi">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Class</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Kha</td>
              <td>Thành Công</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
