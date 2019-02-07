import React, { Component } from 'react';

class NavBar extends Component {
  state = {
    keyName1: "value1",
    keyname2: "value2"
  };

  render() {
    return (
      <h1>NavBar {this.state.keyName1}.</h1>
    );
  }
}


export default NavBar;
