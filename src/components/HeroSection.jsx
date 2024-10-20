import React from 'react';
import './../css/heroSection.css'

const HeroSection = () => {
  return (
    <section className="home">
      <section className="description">
        <p>
          Welcome to Emerovate- Trusted IT Managed Services Provider, we are based in Illinois, USA. Our staff work both onsite and remote. The Companies that we support are: Health Care, Legal, Manufacturing, Education, Non-Profit Organizations, Construction, Financial Sector, Retails, Government Agencies, Real Estate, Restaurants, and more.
        </p>
      </section>
      <section className="services">
        <h1>
          Services we provide
        </h1>
        <p>
          Choose Emerovate-Your Trusted Partner for IT Managed Services .
        </p>
        <p>
          Our IT managed services are designed to reduce downtime, increase productivity, and optimize your technology
          infrastructure. With Emerovate as your trusted partner, you can expect:
        </p>
        <div className="services-list">
          <div className="service-box">
            <h2>Proactive Support</h2>
            <p>Our team adopts a proactive approach to IT support, monitoring your systems 24/7, and resolving
              potential issues before they impact your operations. We prioritize preventative maintenance and
              continuous monitoring to ensure maximum uptime and minimize disruptions..</p>
          </div>
          <div className="service-box">
            <h2>Customized Solutions</h2>
            <p>We understand that every business has unique IT requirements. That's why we offer tailored solutions
              that align with your specific needs and goals. From network security and cloud services to data
              backup and recovery, our experts provide reliable solutions that address your IT challenges.</p>
          </div>
          <div className="service-box">
            <h2>Expertise and Experience</h2>
            <p>Our team of skilled engineers brings years of experience and industry expertise to the table. They
              stay up-to-date with the latest technological advancements to deliver cutting-edge solutions. You
              can trust our experts to handle all your IT needs with precision and professionalism.</p>
          </div>
        </div>
      </section>
      <section className="boxes">
        <div className="box1">
          <div className="box-image">

          </div>
          <div className="box-text">

          </div>
        </div>
      </section>
    </section>
  );
}

export default HeroSection;

{/* <section id="home">
<h1>Welcome to Emerovate</h1>
<p>Your Trusted IT Managed Services Provider</p>
<button>Get Started</button>
</section> */}