// Trong component, tạo một input cho phép người dùng nhập dữ liệu dạng text

// Lắng nghe sự kiện và lấy giá trị trong ô input mỗi khi người dùng nhập liệu

// Kết quả cần đạt được

import React, { Component } from "react";
type StateType = {
  out: string;
};
export default class Bai2 extends Component<{}, StateType> {
  constructor(props: {}) {
    super(props);
    this.state = {
      out: "",
    };
    this.changeInput = this.changeInput.bind(this);
  }
  changeInput(e: React.ChangeEvent<HTMLInputElement>) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState({
      ...this.state,
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        Bai 2:
        <h3>du lieu nhap: {this.state.out}</h3>
        <input
          type="text"
          value={this.state.out}
          name="out"
          onChange={(e) => {
            this.changeInput(e);
          }}
        />
      </div>
    );
  }
}
