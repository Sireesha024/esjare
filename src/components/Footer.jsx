import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import './../css/footer.css'; // SCSS styles

const Footer = () => {
  return (
     <><section className="footer-area">
      <div className="container">
        <div className="row-blocks">
          <div className="aboutus">
            <h2 className="col-heading">About Us</h2>
            <p className="aboutus-content">
            Welcome to Emerovate- Trusted IT Managed Services Provider, we are based in Illinois, USA. Our staff work both onsite and remote. The Companies that we support are: Health Care, Legal, Manufacturing, Education, Non-Profit Organizations, Construction, Financial Sector, Retails, Government Agencies, Real Estate, Restaurants, and more
            </p>
            <div className="social-media">
            {/* <i className="fab fa-facebook-f"></i>
                <i className="fab fa-instagram"></i>
                <i className="fab fa-linkedin-in"></i>
                <i className="fab fa-twitter"></i> */}
              {/* links add */}
              <a href="https://www.facebook.com/" target="_blank" aria-label="Instagram"><i className="fab fa-facebook-f"></i></a>
              <a href="https://www.instagram.com/" target="_blank" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              <a href="https://www.twitter.com/" target="_blank" aria-label="Instagram"><i className="fab fa-twitter"></i></a>
              <a href="https://www.linkedin.com/" target="_blank" aria-label="Instagram"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
          <div className="quick-links">
            <h2 className="col-heading">Quick Links</h2>
            <ul>
              <li><a href="">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>
          <div className="Important">
            <h2 className="col-heading">Important</h2>
            <ul>
              <li><a href="">Privacy policy</a></li>
              <li><a href="">Cookies</a></li>
              <li><a href="">Terms of Use</a></li>
            </ul>
          </div>
        </div>
      </div>
    </section><section className="copyright">
        <div className="container">
          <p>Copyright 2024 Esjare, LLC, All Rights Reserved. </p>
        </div>
      </section></>
  )
};

export default Footer;
