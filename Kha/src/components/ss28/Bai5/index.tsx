import React, { Component } from "react";
import Conpro from "./Conpro";

export interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

type StateType = {
  product: Product;
};

export default class extends Component<{}, StateType> {
  constructor(props: {}) {
    super(props);
    this.state = {
      product: {
        id: 1,
        name: "Kha",
        price: 10,
        quantity: 30,
      },
    };
  }
  render() {
    return (
      <div>
        <Conpro pro={this.state.product} />
      </div>
    );
  }
}
