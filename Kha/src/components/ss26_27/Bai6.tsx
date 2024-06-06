import React, { Component } from "react";
interface User1 {
  fistName: string;
  lastName: string;
}

export default class Bai6 extends Component {
  fullName(user: User1) {
    return user.fistName + user.lastName;
  }
  render() {
    let uuser: User1 = {
      fistName: "Nguyễn Đình  ",
      lastName: "Kha",
    };
    return (
      <div>
        <h5>Bài 6:</h5>
        <h3>họ và tên: {this.fullName(uuser)}</h3>
      </div>
    );
  }
}
