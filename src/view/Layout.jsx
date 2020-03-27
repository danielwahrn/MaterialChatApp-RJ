import React, { Component } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";

import 'font-awesome/css/font-awesome.css';
import '../assets/css/styles.scss';

class Layout extends Component {

  render() {
    return (
      <div className={this.props.className}>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default Layout;
