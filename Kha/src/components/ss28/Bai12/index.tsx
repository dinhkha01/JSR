import React, { Component } from "react";

type StateType = {
  name: string;
};
export default class Bai12 extends Component<{}, StateType> {
  constructor(props: {}) {
    super(props);
    this.state = {
      name: "",
    };
    this.Input = this.Input.bind(this);
  }
  Input(e: React.ChangeEvent<HTMLInputElement>) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState({
      ...this.state,
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        <h3>Dữ Liệu: {this.state.name}</h3>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={(e) => {
            this.Input(e);
          }}
        />
      </div>
    );
  }
}
