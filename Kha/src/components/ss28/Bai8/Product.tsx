import React, { Component } from "react";
import { product } from ".";

type PropsType = {
  card: product[];
};

export default class Product extends Component<PropsType> {
  render() {
    return (
      <div>
        {this.props.card.map((item) => (
          <div>
            <p>Id: {item.id}</p>
            <p>Xe: {item.name}</p>
            <p>Giá: {item.price}</p>
            <p>Số lượng: {item.quantity}</p>
          </div>
        ))}
      </div>
    );
  }
}
