import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import NavigationBar from "./NavbarComponent.jsx";
import PageHeroSection from './PageHeroSection.jsx';
import Footer from "./Footer.jsx";

function ContactPage() {
  const breadcrumbs = [   
    { name: 'Home', link: '/' },
    { name: 'Contact Us', link: 'contactus' },
];
  return (
    <>
    <NavigationBar/>
    <PageHeroSection pageTitle="Contact Us" breadcrumbs={breadcrumbs} />
    <Container className="my-5">
      <Row className="mt-5">
        <Col md={6}>
          <h2 className="mb-4">
            Ready to Experience the EsJare Difference?
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
    <Footer/>
    </>
  );
}

export default ContactPage;
