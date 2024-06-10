import React, { Component } from "react";

export default class Bai12 extends Component<{}, { isOpen: boolean }> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }
  changeIsOpen = (status: boolean) => {
    this.setState({ isOpen: status });
  };

  render() {
    return (
      <div>
        <div
          onMouseOver={() => this.changeIsOpen(true)}
          onMouseOut={() => this.changeIsOpen(false)}
        >
          chọt vô đây
        </div>

        <button
          onClick={() => this.changeIsOpen(true)}
          style={{
            backgroundColor: "pink",
            color: "black",
            padding: "4px 10px",
            border: "none",
            borderRadius: "2px",
          }}
        >
          Show Notification
        </button>
        {this.state.isOpen && (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "20px",
              maxWidth: "200px",
              backgroundColor: "lightblue",
              padding: "10px",
              borderRadius: "5px",
              boxShadow: "0px 0px 0px 5px 2px black",
              position: "absolute",
              top: "10px",
              right: "10px",
            }}
          >
            <p>Thông báo nè </p>
            <span
              onClick={() => this.changeIsOpen(false)}
              style={{ color: "red" }}
            >
              X
            </span>
          </div>
        )}
      </div>
    );
  }
}
