import React, { Component } from "react";

export default class Bai2 extends Component {
  constructor(props: any) {
    super(props);
  }
  sum(a: number, b: number): any {
    let sum = a + b;
    return `${a} + ${b}=${sum}`;
  }
  tru(a: number, b: number) {
    let tru = a - b;
    return `${a} - ${b}=${tru}`;
  }
  nhan(a: number, b: number) {
    let nhan = a * b;
    return `${a} * ${b}=${nhan}`;
  }
  chia(a: number, b: number) {
    let chia = a / b;
    return `${a} / ${b}=${chia}`;
  }

  render() {
    return (
      <div>
        <h5>Bài 2:</h5>
        <h3>Danh sách kết quả</h3>
        <ul>
          <li>{this.sum(3, 2)} </li>
          <li>{this.tru(3, 2)}</li>
          <li>{this.nhan(3, 2)}</li>
          <li>{this.chia(10, 2)}</li>
        </ul>
      </div>
    );
  }
}
