import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './../css/footer.css'; // SCSS styles

const Footer = () => {
  return (
    <footer className="footer bg-white text-dark w-100">
      <div className="container-fluid">
        <Row>
          <Col md={4}>
            <h4 className="about-heading">About Us</h4>
            <p className="about-content">
              Welcome to EsJare - EsJare HealthAI Solutions LLC is a USA-based data science and AI-driven healthcare company. We build custom AI models that transform complex healthcare data into predictive insights, empowering healthcare organizations and ambulance services to improve patient care, operational efficiency, and decision-making.
            </p>
          </Col>
          <Col md={4}>
            <h4>Quick Links</h4>
            <ul className="list-unstyled">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about-us">About Us</a>
              </li>
              <li>
                <a href="/contact-us">Contact Us</a>
              </li>
            </ul>
          </Col>
          <Col md={4}>
            <h4>Important</h4>
            <ul className="list-unstyled">
              <li>
                <a href="/privacy-policy">Privacy Policy</a>
              </li>
              <li>
                <a href="/cookies">Cookies</a>
              </li>
              <li>
                <a href="/terms-of-use">Terms of Use</a>
              </li>
            </ul>
          </Col>
        </Row>
      </div>
      <div className="copyright text-center py-3">
        <p className="text-blue">&copy; 2024 Esjare, LLC, All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
