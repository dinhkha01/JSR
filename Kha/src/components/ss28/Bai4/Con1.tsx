import React, { Component } from "react";

type PropsType = {
  name: string;
};
type StateType = {
  name: string;
};

export default class Con1 extends Component<PropsType, StateType> {
  constructor(props: PropsType) {
    super(props);
    this.state = {
      name: "Bé Hà Cute",
    };
  }

  render() {
    return (
      <div>
        <h3>dữ liệu con là: {this.props.name}</h3>
        <h3>dữ liệu cha là: {this.state.name}</h3>
      </div>
    );
  }
}
