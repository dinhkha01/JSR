import React, { Component } from "react";
import Con1 from "./Con1";

type StateType = {
  name: string;
};

export default class Bai4 extends Component<{}, StateType> {
  constructor(props: {}) {
    super(props);
    this.state = {
      name: "Nguyễn Đình Kha ",
    };
  }
  render() {
    return (
      <div>
        Bài 4:
        <Con1 name={this.state.name} />
      </div>
    );
  }
}
