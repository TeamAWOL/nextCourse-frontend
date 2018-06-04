import React from 'react';
import { Navbar, Nav, MenuItem, NavDropdown, NavItem } from 'react-bootstrap';

class CustomHeader extends React.Component {
  render() {
    return(
      <div>
        <Navbar  collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <a href='./login'>NextCourse</a>
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
                <NavItem eventKey={2} href="./feed">
                  Profile Feed
                </NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
      </div>
    );
  }
}


export default CustomHeader;
