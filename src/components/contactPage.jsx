import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import NavigationBar from "./NavbarComponent.jsx";

function ContactPage() {
  return (
    <>
    <NavigationBar/>
    
    <Container className="my-5">
      <h1 className="mb-4">Contact Us</h1>
      <p>Home | Contact Us</p>
      <Row className="mt-5">
        <Col md={6}>
          <h2 className="mb-4">
            Ready to Experience the Emerovate Difference?
          </h2>
          <p>
            Contact Emerovate today to explore how our IT managed services can
            empower your business.
          </p>
          <p>Choose Emerovate—Your Trusted Partner for IT Managed Services.</p>
          <div className="contact-details mt-4">
            <h3 className="mt-3">Phone</h3>
            <p>630-506-8634</p>
            <h3 className="mt-3">Email</h3>
            <p>
              <a href="mailto:support@emerovate.com">support@emerovate.com</a><br/>
              <a href="mailto:info@emerovate.com">info@emerovate.com</a>
            </p>
          </div>
        </Col>
        <Col md={6}>
          <Image
            src="https://via.placeholder.com/500x300"
            alt="Contact Us"
            fluid
          />
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default ContactPage;
