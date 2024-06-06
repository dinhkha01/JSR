import React, { Component } from "react";
import { User } from ".";
type PropsType = {
  userr: User;
};
export default class Concuano extends Component<PropsType> {
  render() {
    let { id, name, address, email } = this.props.userr;
    return (
      <div>
        <p>Id: {id}</p>
        <p>Name: {name}</p>
        <p>Address: {address}</p>
        <p>email: {email}</p>
      </div>
    );
  }
}
