import React, { Component } from "react";
interface User {
  id: number;
  name: string;
  gmail: string;
  date: string;
  sex: boolean;
}

export default class Bai3 extends Component {
  render() {
    let user: User = {
      id: 1,
      name: "kha",
      gmail: "a@gmail",
      date: "8/11/2003",
      sex: true,
    };
    return (
      <div>
        <h5>Bài 3:</h5>
        <h3>Thông tin cá nhân</h3>
        <ul>
          <li>{user.id}</li>
          <li>{user.name}</li>
          <li>{user.gmail}</li>
          <li>{user.date}</li>
          <li>{user.sex ? "nam" : "nữ"}</li>
        </ul>
      </div>
    );
  }
}
