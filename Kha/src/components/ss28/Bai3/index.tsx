import React, { Component } from "react";
import Stu1 from "./stu";
export interface Stu {
  id: number;
  name: string;
  address: string;
}
type StateType = {
  user: Stu[];
};

export default class Bai3 extends Component<{}, StateType> {
  constructor(props: {}) {
    super(props);
    this.state = {
      user: [
        { id: 1, name: "Kha", address: "Đồng Nai" },
        { id: 2, name: "Ha", address: "Đồng Nai" },
        { id: 3, name: "Hao", address: "Đồng Nai" },
        { id: 4, name: "Khai", address: "Đồng Nai" },
      ],
    };
  }
  render() {
    return (
      <div>
        <Stu1 list={this.state.user} />
      </div>
    );
  }
}
