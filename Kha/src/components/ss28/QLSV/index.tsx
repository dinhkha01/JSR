import React, { Component } from "react";
import List from "./List";
export interface IStudent {
  id: number;
  name: string;
  dob: string;
  address: string;
  phone: string;
  sex: boolean;
}
type StateType = {
  data: IStudent[];
};
export default class QLSV extends Component<{}, StateType> {
  constructor(props: {}) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          name: "Kha",
          dob: "08-11-2003",
          address: "Đồng Nai",
          phone: "0902956579",
          sex: true,
        },
        {
          id: 2,
          name: "Hà",
          dob: "01-03-2005",
          address: "Đồng Nai",
          phone: "0902956579",
          sex: false,
        },
      ],
    };
  }
  render() {
    return (
      <div>
        <List list={this.state.data} />
      </div>
    );
  }
}
