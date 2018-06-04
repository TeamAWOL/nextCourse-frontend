import React, { Component } from 'react';
import logo from '../logo.png'


class Header extends Component {
  render() {
    return (
      <div id="app-header">
        <br/><img id="logo" src={logo} /><br/><br/>
      </div>
    )
  }
}

export default Header;
