import React, { ChangeEvent, Component, FormEvent } from "react";

type StateType = {
  gmail: string;
  pass: string;
  check: boolean;
};
export default class Bai9 extends Component<{}, StateType> {
  constructor(props: {}) {
    super(props);
    this.state = { gmail: "", pass: "", check: false };
  }
  in = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    let name = e.target.name;
    this.setState({
      ...this.state,
      [name]: value,
    });
  };
  out = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    this.setState({
      ...this.state,
      check: true,
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.out}>
          <label htmlFor="">Email:</label>

          <input
            name="gmail"
            type="text"
            onChange={this.in}
            value={this.state.gmail}
          />
          <br />
          <label htmlFor="">Mat Khau</label>

          <input
            name="pass"
            type="text"
            onChange={this.in}
            value={this.state.pass}
          />
          <br />
          <button type="submit"> Submit</button>
          {this.state.check && (
            <>
              <p>Gmail: {this.state.gmail}</p>
              <p>Pass:{this.state.pass}</p>
            </>
          )}
        </form>
      </div>
    );
  }
}
