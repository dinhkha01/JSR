import React, { Component } from "react";

type StateType = {
  tinh: string;
};

export default class Bai4 extends Component<{}, StateType> {
  constructor(props: {}) {
    super(props);
    this.state = {
      tinh: "",
    };
    this.out = this.out.bind(this);
  }

  out(e: React.ChangeEvent<HTMLSelectElement>) {
    let value = e.target.value;
    this.setState({
      tinh: value,
    });
  }

  render() {
    return (
      <div>
        <h3>Tỉnh {this.state.tinh}</h3>
        <select name="tinh" id="" value={this.state.tinh} onChange={this.out}>
          <option value="">Select a value</option>
          <option value="hi">hi</option>
          <option value="ho">ho</option>
          <option value="ha">ha</option>
          <option value="hiii">hiii</option>
          <option value="hiaaaa">hiaaaa</option>
          <option value="hissss">hissss</option>
          <option value="hffffi">hffffi</option>
          <option value="higgggg">higgggg</option>
        </select>
      </div>
    );
  }
}
