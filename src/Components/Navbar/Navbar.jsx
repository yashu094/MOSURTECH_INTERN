// Navbarr.js
import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import custom CSS file

const Navbarr = () => {
  return (
    <Navbar className="custom-navbar" expand="lg">
      <Navbar.Brand as={Link} to="/login" style={{ marginLeft: '30px' }}>INNOLEND</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto" style={{ gap: '30px' }}>
          <Nav.Link as={Link} to="/home">Home</Nav.Link>
          <Nav.Link as={Link} to="/borrow">Borrow</Nav.Link>
          <Nav.Link as={Link} to="/invest">Invest</Nav.Link>
          <NavDropdown title="Services" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/services/digital">Digital Services</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/services/advisory">Advisory Services</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/services/virtual-augmentation">Virtual Augmentation Services</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={Link} to="/insurance">Insurance</Nav.Link>
          <Nav.Link as={Link} to="/knowledge">Knowledge</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
        </Nav>
        <Nav className="ms-auto" style={{ marginRight: '50px' }}>
          <button type="button" className="btn btn-outline-danger">Login</button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navbarr;
