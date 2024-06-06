import React, { Component } from "react";

type StateType = {
  name: string;
  id: number;
  date: string;
};

export default class Bai2 extends Component<{}, StateType> {
  constructor(props: {}) {
    super(props);
    this.state = {
      name: "Nguyễn Đình Kha",
      id: 1,
      date: "08/11/2003",
    };
  }
  render() {
    return (
      <div>
        <h3>{this.state.name}</h3>
        <h3>{this.state.id}</h3>
        <h3>{this.state.date}</h3>
      </div>
    );
  }
}
