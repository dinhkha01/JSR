import React, { Component } from "react";
type StateType = {
  a: boolean;
};
export default class Bai5 extends Component<{}, StateType> {
  constructor(props: {}) {
    super(props);
    this.state = {
      a: true,
    };
    this.witch = this.witch.bind(this);
  }
  witch() {
    this.setState((prevState) => ({
      a: !prevState.a,
    }));
  }
  render() {
    return (
      <div>
        <button onClick={this.witch}>{this.state.a ? "Hiện " : "Ẩn"}</button>
      </div>
    );
  }
}
