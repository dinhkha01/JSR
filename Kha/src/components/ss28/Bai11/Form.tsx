import React, { Component } from "react";

type StateTypes = {
  name: string;
  address: string;
  date: string;
  formData: { id: number; name: string; address: string; date: string }[];
};

export default class Form extends Component<{}, StateTypes> {
  constructor(props: {}) {
    super(props);
    this.state = {
      name: "",
      address: "",
      date: "",
      formData: [],
    };
    this.onChaneInput = this.onChaneInput.bind(this);
    this.handleSave = this.handleSave.bind(this);
  }
  onChaneInput(e: React.ChangeEvent<HTMLInputElement>) {
    let value = e.target.value;
    let name = e.target.name;
    this.setState({
      ...this.state,
      [name]: value,
    });
  }
  handleSave(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const { name, address, date, formData } = this.state;
    const newFormData = [...formData, { id: Date.now(), name, address, date }];
    this.setState({ formData: newFormData, name: "", address: "", date: "" });
  }
  render() {
    const { formData } = this.state;
    return (
      <div>
        <form action="" onSubmit={(e) => this.handleSave(e)}>
          <table border={1}>
            <tbody>
              <tr>
                <th>
                  <label htmlFor="">Name</label>
                </th>
                <td>
                  <input
                    name="name"
                    type="text"
                    onChange={(e) => {
                      this.onChaneInput(e);
                    }}
                    value={this.state.name}
                  />
                </td>
              </tr>
              <tr>
                <th>
                  <label htmlFor="">address</label>
                </th>
                <td>
                  <input
                    name="address"
                    type="text"
                    onChange={this.onChaneInput}
                    value={this.state.address}
                  />
                </td>
              </tr>
              <tr>
                <th>
                  <label htmlFor="">date</label>
                </th>
                <td>
                  <input
                    name="date"
                    type="date"
                    onChange={this.onChaneInput}
                    value={this.state.date}
                  />
                </td>
              </tr>
              <tr>
                <th colSpan={2}>
                  <button type="submit">Lưu</button>
                </th>
              </tr>
            </tbody>
          </table>
        </form>
        <br />
        <div>
          <table border={1}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Address</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {formData.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.address}</td>
                  <td>{item.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
