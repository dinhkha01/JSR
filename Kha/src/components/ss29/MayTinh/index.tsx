import React, { Component } from "react";
import "./index.css";

export default class MayTinh extends Component<
  {},
  { express: string[]; result: number }
> {
  constructor(props: {}) {
    super(props);
    this.state = {
      express: [],
      result: 0,
    };
  }
  handelClick = (e: string) => {
    this.setState({
      express: [...this.state.express, e],
    });
  };
  kq = () => {
    let result = eval(this.state.express.join(""));
    this.setState({
      ...this.state,
      result: result,
    });
  };
  render() {
    return (
      <div>
        <div className="container">
          <div>
            <div>
              <span>{this.state.express.join("")}</span>
              <br />
              <span>{this.state.result}</span>
            </div>
            <div className="c1">
              <button onClick={() => this.handelClick("1")}>1</button>
              <button onClick={() => this.handelClick("2")}>2</button>
              <button onClick={() => this.handelClick("3")}>3</button>
              <button onClick={() => this.handelClick("+")}>+</button>
            </div>
            <div className="c2">
              <button onClick={() => this.handelClick("4")}>4</button>
              <button onClick={() => this.handelClick("5")}>5</button>
              <button onClick={() => this.handelClick("6")}>6</button>
              <button onClick={() => this.handelClick("-")}>-</button>
            </div>
            <div className="c3">
              <button onClick={() => this.handelClick("7")}>7</button>
              <button onClick={() => this.handelClick("8")}>8</button>
              <button onClick={() => this.handelClick("9")}>9</button>
              <button onClick={() => this.handelClick("*")}>*</button>
            </div>
            <div className="c4">
              <button onClick={() => this.handelClick("0")}>0</button>
              <button onClick={this.kq}>=</button>
              <button onClick={() => this.handelClick("")}>/</button>
              <button>DELETE</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
