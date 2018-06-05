import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import '../css/Footer.css';

class CustomFooter extends React.Component {
  render() {
    return(
      <div className="footer">

<Navbar fixedBottom>

  <Nav>
    <NavItem eventKey={1} href="#">
      About Us
    </NavItem>
    <NavItem eventKey={2} href="#">
      Our Team
    </NavItem>
    <NavItem eventKey={2} href="#">
      Contact Us
    </NavItem>
  </Nav>
</Navbar>

</div>
);
}
}

export default CustomFooter;
