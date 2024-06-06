import React, { Component } from "react";
import Con2 from "./Con2";
type StateType = {
  name: string;
};
export default class Bai11 extends Component<{}, StateType> {
  constructor(props: {}) {
    super(props);
    this.state = {
      name: "Kha",
    };
    this.witch = this.witch.bind(this);
  }
  witch() {
    this.setState({
      name: "Bé Hà",
    });
  }

  render() {
    return (
      <div>
        <h3>Bài 11:</h3>
        <Con2 name={this.state.name} witch={this.witch} />
      </div>
    );
  }
}
