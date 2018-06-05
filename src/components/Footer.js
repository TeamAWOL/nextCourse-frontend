import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import '../css/Footer.css';

class CustomFooter extends React.Component {
  render() {
    return(
      <div className="footer">

<Navbar fixedBottom>

  <Nav>
    <NavItem eventKey={1} href="./about">
      About Us
    </NavItem>
    <NavItem eventKey={2} href="./team">
      Our Team
    </NavItem>
    <NavItem eventKey={2} href="./contact">
      Contact Us
    </NavItem>
  </Nav>
</Navbar>

</div>
);
}
}

export default CustomFooter;
