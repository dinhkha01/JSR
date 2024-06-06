import React, { Component } from "react";
type ProType = {
  props: string;
};

type Name = {
  name: string;
};

export default class Bai1 extends Component<ProType, Name> {
  constructor(props: ProType) {
    super(props);
    this.state = {
      name: "Nguyễn Đình Kha",
    };
  }
  render() {
    return (
      <div>
        <h3>{this.state.name}</h3>
      </div>
    );
  }
}
