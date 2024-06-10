import React, { ChangeEvent, Component } from "react";

type StateType = {
  arr: string[];
  inputValue: string;
};

export default class Bai7 extends Component<{}, StateType> {
  constructor(props: {}) {
    super(props);
    this.state = {
      arr: [],
      inputValue: "",
    };
  }

  handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    this.setState({
      ...this.state,
      inputValue: value,
    });
  };

  handleSave = () => {
    this.setState({
      arr: [...this.state.arr, this.state.inputValue],
      inputValue: "",
    });
  };
  render() {
    return (
      <div>
        <h3>Array: {this.state.arr.join(", ")}</h3>
        <input
          type="number"
          name="inputValue"
          value={this.state.inputValue}
          onChange={this.handleInput}
        />
        <button onClick={this.handleSave}>Save</button>
      </div>
    );
  }
}
