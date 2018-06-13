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
                <a href='./login'><img id="logo" src={logo} alt="logo"/></a>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav>
                <NavItem eventKey={1} className='pull-right' href="../logout">Log Out</NavItem>
                <NavItem eventKey={2} className='pull-right' href="../sign_up">Register</NavItem>
                <NavItem eventKey={3} className='pull-right' href="../login">Login</NavItem>
                <NavItem eventKey={4} className='pull-right' href="../EditProfile">Edit Profile</NavItem>
                <NavItem eventKey={5} className='pull-right' href="../Feed">Feed</NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
      </div>
    );
  }
}


export default CustomHeader;
