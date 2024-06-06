import React, { Component } from "react";
type PropsType = {
  name: string;
  witch: () => void;
};
export default class Con2 extends Component<PropsType> {
  render() {
    return (
      <div>
        <h5>Ten: {this.props.name}</h5>
        <button onClick={this.props.witch}>Change</button>
      </div>
    );
  }
}
