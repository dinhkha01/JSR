import React, { Component } from "react";

type StateType = {
  num: number;
};
export default class Bai8 extends Component<{}, StateType> {
  constructor(props: {}) {
    super(props);
    this.state = {
      num: 0,
    };
  }
  updateNum = () => {
    this.setState({
      num: this.state.num + 1,
    });
  };
  render() {
    return (
      <div>
        <button onClick={this.updateNum}>Click {this.state.num}</button>
      </div>
    );
  }
}
