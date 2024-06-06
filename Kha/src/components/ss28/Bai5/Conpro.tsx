import React, { Component } from "react";
import { Product } from ".";

type PropsType = {
  pro: Product;
};

export default class Conpro extends Component<PropsType> {
  render() {
    const { id, name, price, quantity } = this.props.pro;
    return (
      <div>
        <p>ID: {id}</p>
        <p>Name: {name}</p>
        <p>Gia: {price}</p>
        <p>So luong: {quantity}</p>
      </div>
    );
  }
}
