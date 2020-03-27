import React, { Component } from "react";
import { Container } from '@material-ui/core';

import 'font-awesome/css/font-awesome.css';
import '../assets/css/styles.scss';

class LayoutBlank extends Component {

  render() {
    return (
      <div className={this.props.className}>
        <Container >
          {this.props.children}
        </Container>
      </div>
    );
  }
}

export default LayoutBlank;
