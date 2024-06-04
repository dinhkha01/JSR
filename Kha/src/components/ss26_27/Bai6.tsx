import React, { Component } from "react";

export default class Bai6 extends Component {
  fullName(user: User1) {
    return user.fistName + user.lastName;
  }
  render() {
    return <div>họ và tên: {this.fullName(uuser)}</div>;
  }
}

class User1 {
  fistName: string;
  lastName: string;
  constructor(fistName: string, lastName: string) {
    this.fistName = fistName;
    this.lastName = lastName;
  }
}

let uuser: User1 = {
  fistName: "Nguyễn Đình ",
  lastName: "Kha",
};
