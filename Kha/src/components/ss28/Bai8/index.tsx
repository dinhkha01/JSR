// Tạo một component đặt tên là ListProduct.

// Sử dụng state để lưu trữ danh sách các sản phẩm. Mỗi sản phẩm bao gồm các thông tin như: id, name, price, quantity

// Tạo một component đặt tên là Product là component con và nhận dữ liệu từ component ListProduct

// Hiển thị danh sách các sản phẩm ra ngoài giao diện

import React, { Component } from "react";
import Product from "./Product";
export interface product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}
type StateType = {
  infoProduct: product[];
};
export default class Bai8 extends Component<{}, StateType> {
  constructor(props: {}) {
    super(props);
    this.state = {
      infoProduct: [
        {
          id: 1,
          name: "Mes",
          price: 20000000,
          quantity: 100,
        },
        {
          id: 2,
          name: "BMW",
          price: 30000000,
          quantity: 400,
        },
        {
          id: 3,
          name: "Porcher",
          price: 20034444,
          quantity: 200,
        },
      ],
    };
  }
  render() {
    return (
      <div>
        <h3>Bài 8</h3>
        <Product card={this.state.infoProduct} />
      </div>
    );
  }
}
