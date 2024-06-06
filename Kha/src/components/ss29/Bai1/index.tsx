// Tạo một component đặt tên theo tùy ý. Ví dụ: Exercise01

// Trong component đó, tạo một button có nội dung là “Click me”

// Bắt sự kiện onClick trên button và in ra màn hình console nội dung “Clicked”
import React, { Component } from "react";

type StateType = {
  out: string;
};

export default class Bai1 extends Component<{}, StateType> {
  constructor(props: {}) {
    super(props);
    this.state = {
      out: "",
    };
    this.out = this.out.bind(this);
  }
  out() {
    this.setState({ out: "click qq" });
  }

  render() {
    return (
      <div>
        <h3>{this.state.out}</h3>
        <button onClick={this.out}>click tao</button>
      </div>
    );
  }
}
