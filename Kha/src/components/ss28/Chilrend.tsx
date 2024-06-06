import React, { Component } from "react";
import Test from "./Test";

export default class Chilrend extends Component {
  render() {
    let id = 1;
    let name = "Kha";
    const callBack = (keyword: string) => {
      console.log(keyword);
    };

    return (
      <div>
        <Test
          callBack={callBack}
          id={id}
          name={name}
          printf={() => console.log("kha")}
        />
      </div>
    );
  }
}
