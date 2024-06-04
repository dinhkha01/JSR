import React, { Component } from "react";

export default class Bai3 extends Component {
  render() {
    return (
      <div>
        <h3>Thông tin cá nhân</h3>
        <ul>
          <li>{user.id}</li>
          <li>{user.name}</li>
          <li>{user.gmail}</li>
          <li>{user.date}</li>
        </ul>
      </div>
    );
  }
}
class User {
  id: number;
  name: string;
  gmail: string;
  date: string;
  constructor(id: number, name: string, gmail: string, date: string) {
    this.id = id;
    this.name = name;
    this.gmail = gmail;
    this.date = date;
  }
}

let user = new User(1, "Kha", "a@gmail", "8/11/2003");
