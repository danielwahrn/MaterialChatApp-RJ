import React, { Component } from "react";

class SiteLogo extends Component {

  render() {
    return (
      <div className="logo">
        <img src={require("../../assets/images/logo.png")} alt="img" />
        <h2 className="site-title">youchamp</h2>
      </div>
    );
  }
}

export default SiteLogo;