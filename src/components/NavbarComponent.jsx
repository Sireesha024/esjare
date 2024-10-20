import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import './../css/navbar.css';
import './../assets/logo.jpeg';

const NavigationBar = () => {
  const [showAboutDropdown, setShowAboutDropdown] = useState(false);
  const [showServicesDropdown, setShowServicesDropdown] = useState(false);

  const handleMouseEnterAbout = () => setShowAboutDropdown(true);
  const handleMouseLeaveAbout = () => setShowAboutDropdown(false);

  const handleMouseEnterServices = () => setShowServicesDropdown(true);
  const handleMouseLeaveServices = () => setShowServicesDropdown(false);

  return (
    <>
      {/* Top Navbar */}
      <Navbar className="top-navbar" expand="lg">
        <Container className="justify-content-between">
          <div className="contact-info">
            <span className="phone">
              <i className="fas fa-phone-alt"></i> 630-506-8634
            </span>
            <span className="email">
              <i className="fas fa-envelope"></i> support@emerovate.com
            </span>
          </div>
          <div className="social-icons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-linkedin-in"></i>
          </div>
        </Container>
      </Navbar>

      {/* Main Navbar */}
      <Navbar expand="lg" className="main-navbar" sticky="top">
        <Container>
          <Navbar.Brand href="home">
            <img
              src="./../assets/logo.jpeg"
              alt="Emerovate Logo"
              className="navbar-logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="home" className="nav-link-no">Home</Nav.Link>

              {/* About Dropdown */}
              <NavDropdown
                title="About"
                id="about-dropdown"
                show={showAboutDropdown}
                onMouseEnter={handleMouseEnterAbout}
                onMouseLeave={handleMouseLeaveAbout}
                className="nav-link"
              >
                <NavDropdown.Item href="/about/mission">Our Mission</NavDropdown.Item>
                <NavDropdown.Item href="/about/choose-us">Why Choose Us</NavDropdown.Item>
                <NavDropdown.Item href="/about/story">Our Story</NavDropdown.Item>
              </NavDropdown>

              {/* Services Dropdown */}
              <NavDropdown
                title="Services"
                id="services-dropdown"
                show={showServicesDropdown}
                onMouseEnter={handleMouseEnterServices}
                onMouseLeave={handleMouseLeaveServices}
                className="nav-link"
              >
                <NavDropdown.Item href="it-support">IT Support</NavDropdown.Item>
                <NavDropdown.Item href="cloud-services">Cloud Services</NavDropdown.Item>
                <NavDropdown.Item href="data-recovery">Data Recovery</NavDropdown.Item>
                <NavDropdown.Item href="cyber-security">Cyber Security</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="contact" className="nav-link-no">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
