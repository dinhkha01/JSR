// Tạo một component đặt tên theo tùy ý. Ví dụ: Exercise03

// Trong component, tạo một input cho phép người dùng nhập dữ liệu dạng date

// Lắng nghe sự kiện và lấy giá trị trong ô input mỗi khi người dùng nhập liệu

// Kết quả cần đạt được

import React, { ChangeEvent, Component } from "react";
type StateType = {
  date: string;
};
export default class Bai3 extends Component<{}, StateType> {
  constructor(props: {}) {
    super(props);
    this.state = {
      date: "",
    };
  }
  onchangeIn = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    this.setState({
      date: value,
    });
  };
  render() {
    return (
      <div>
        <p>{this.state.date}</p>
        <input type="date" value={this.state.date} onChange={this.onchangeIn} />
      </div>
    );
  }
}
