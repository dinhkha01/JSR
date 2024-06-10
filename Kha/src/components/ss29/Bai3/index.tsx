import React, { Component } from "react";
type StateType = {
  date: string;
};
export default class Bai3 extends Component<{}, StateType> {
  constructor(props: {}) {
    super(props);
    this.state = {
      date: "",
    };
    this.InputDate = this.InputDate.bind(this);
  }
  InputDate(e: React.ChangeEvent<HTMLInputElement>) {
    let value = e.target.value;
    this.setState({
      date: value,
    });
  }
  render() {
    return (
      <div>
        <h3>Date: {this.state.date}</h3>
        <input
          type="date"
          value={this.state.date}
          name="date"
          onChange={(e) => {
            this.InputDate(e);
          }}
        />
      </div>
    );
  }
}
