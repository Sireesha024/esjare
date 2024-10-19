import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import './navbar.css'; // Ensure you import your CSS file

const NavigationBar = () => {
  const [showAboutDropdown, setShowAboutDropdown] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);

  const handleMouseEnterAbout = () => setShowAboutDropdown(true);
  const handleMouseLeaveAbout = () => setShowAboutDropdown(false);

  const handleMouseEnterServices = () => setShowServicesDropdown(true);
  const handleMouseLeaveServices = () => setShowServicesDropdown(false);

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Emerovate</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>

          {/* About Dropdown */}
          <NavDropdown
            title="About"
            id="about-dropdown"
            show={showAboutDropdown}
            onMouseEnter={handleMouseEnterAbout}
            onMouseLeave={handleMouseLeaveAbout}
          >
            <NavDropdown.Item href="#about">Our Mission</NavDropdown.Item>
            <NavDropdown.Item href="#team">Why choose Us</NavDropdown.Item>
            <NavDropdown.Item href="#story">Our Story</NavDropdown.Item>
          </NavDropdown>

          {/* Services Dropdown */}
          <NavDropdown
            title="Services"
            id="services-dropdown"
            show={showServicesDropdown}
            onMouseEnter={handleMouseEnterServices}
            onMouseLeave={handleMouseLeaveServices}
          >
            <NavDropdown.Item href="#it-support">IT Support</NavDropdown.Item>
            <NavDropdown.Item href="#cloud-services">Cloud Services</NavDropdown.Item>
            <NavDropdown.Item href="#data-recovery">Data Recovery</NavDropdown.Item>
            <NavDropdown.Item href="#cyber-security">Cyber Security</NavDropdown.Item>
          </NavDropdown>

          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
