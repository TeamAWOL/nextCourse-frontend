import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import logo from '../images/logo.png'


class CustomHeader extends React.Component {
  render() {
    return(
      <div>
        <Navbar  collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <a href='./login'><img id="logo" src={logo} /></a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <NavItem eventKey={1} href="./login">
                  Login
                </NavItem>
                <NavItem eventKey={2} href="./sign_up">
                  Register
                </NavItem>
                <NavItem eventKey={3} href="./Feed">
                  Feed
                </NavItem>
                <NavItem eventKey={4} className='pull-right' href="./logout">
                  Log Out
                </NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
      </div>
    );
  }
}


export default CustomHeader;
