import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
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
              <i className="fas fa-envelope"></i> support@esjare.com
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
          <LinkContainer to="/">
            <Navbar.Brand>
              <img
                src="./../assets/logo.jpeg"
                alt="Emerovate Logo"
                className="navbar-logo"
              />
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <LinkContainer to="/">
                <Nav.Link className="nav-link-no">Home</Nav.Link>
              </LinkContainer>

              {/* About Dropdown */}
              <NavDropdown
                title="About"
                id="about-dropdown"
                show={showAboutDropdown}
                onMouseEnter={handleMouseEnterAbout}
                onMouseLeave={handleMouseLeaveAbout}
                className="nav-link"
              >
                <LinkContainer to="/about/mission">
                  <NavDropdown.Item>Our Mission</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/about/choose-us">
                  <NavDropdown.Item>Why Choose Us</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/about/story">
                  <NavDropdown.Item>Our Story</NavDropdown.Item>
                </LinkContainer>
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
                <LinkContainer to="/services/ds-model-builder">
                  <NavDropdown.Item>Custom Data Science Model Builder</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/services/analytics-model">
                  <NavDropdown.Item>Predictive Analytics Models</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/services/patient-monitoring">
                  <NavDropdown.Item>AI-Driven Patient Monitoring</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/services/nlp">
                  <NavDropdown.Item>Natural Language Processing (NLP)</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/services/ambulance-services">
                  <NavDropdown.Item>Integrated AI for Ambulance Services</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>

              <LinkContainer to="/contact">
                <Nav.Link className="nav-link-no">Contact Us</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavigationBar;
