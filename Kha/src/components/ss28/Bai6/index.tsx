import React, { Component } from "react";
import Concuano from "./Concuano";

export interface User {
  id: number;
  name: string;
  address: string;
  email: string;
}

type StateType = {
  user: User;
};

export default class Bai6 extends Component<{}, StateType> {
  constructor(props: {}) {
    super(props);
    this.state = {
      user: {
        id: 1,
        name: "Dinh Kha",
        address: "Dong Nai",
        email: "a@gmail.com",
      },
    };
  }
  render() {
    return (
      <div>
        <Concuano userr={this.state.user} />
      </div>
    );
  }
}
