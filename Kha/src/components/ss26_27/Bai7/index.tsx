import React, { Component } from "react";
import Header from "./Header";
import Menu from "./Menu";
import Main from "./Main";
import Footer from "./Footer";
import "./bai7.css";
export default class Bai7 extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="menu d-flex center">
            <Menu />
          </div>

          <div className="content">
            <div className="main d-flex center">
              <Main />
            </div>
            <div className="footer">
              <Footer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
