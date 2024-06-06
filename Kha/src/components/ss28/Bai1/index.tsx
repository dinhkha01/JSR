import React, { Component } from "react";

type Name = {
  name: string;
};

export default class Bai1 extends Component<{}, Name> {
  constructor(props: {}) {
    super(props);
    this.state = {
      name: "Nguyễn Đình Kha",
    };
  }
  render() {
    return (
      <div>
        Bài 1:
        <h3>{this.state.name}</h3>
      </div>
    );
  }
}
