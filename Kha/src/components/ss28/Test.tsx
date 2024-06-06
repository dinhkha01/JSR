// import React, { Component } from "react";

// type ProType = {
//   props: string;
// };

// type StateTypes = {
//   companyState: string;
// };

// export default class Test extends Component<ProType, StateTypes> {
//   constructor(props: ProType) {
//     super(props);
//     this.state = {
//       companyState: "Kha",
//     };
//   }

//   switch = () => {
//     this.setState({
//       companyState: "Hà",
//     });
//   };

//   render() {
//     return (
//       <div>
//         <h3>{this.state.companyState}</h3>
//         <button onClick={this.switch}>Bấm đê</button>
//       </div>
//     );
//   }
// }
import React, { Component } from "react";
type PropsType = {
  id: number;
  name: string;
  printf: () => void;
  callBack: (a: string) => void;
};
type StateTypes = {
  name: string;
  dob: string;
  count: number;
};

export default class Test extends Component<PropsType, StateTypes> {
  constructor(props: PropsType) {
    super(props);
    this.state = {
      name: "Kha",
      dob: "",
      count: 0,
    };
  }

  render() {
    let keyword = "Hà";

    return (
      <div>
        <p>{this.props.id}</p>
        <p>{this.props.name}</p>
        <p>{this.state.name}</p>
        <p>{this.state.count}</p>
        <button onClick={() => this.props.callBack(keyword)}> click</button>
        <br />
        <button onClick={() => this.setState({ ...this.state, name: "Hà" })}>
          {" "}
          click
        </button>
        <br />
        <button
          onClick={() =>
            this.setState({ ...this.state, count: this.state.count + 10 })
          }
        >
          bu
        </button>
      </div>
    );
  }
}
