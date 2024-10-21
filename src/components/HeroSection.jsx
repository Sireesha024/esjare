import React from 'react';
import './../css/heroSection.css'
import { servicesData } from '../data/HeroSectionServiceData';
import {coreData} from './../data/HeroSectionCoreData';

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
        {Object.entries(coreData).map(([title, description]) => (
          <div className="coredata-box" key={title}>
            <h2>{title}</h2>
            <p>{description}</p>
          </div>
        ))}
        </div>
      </section>

      <section className="services-container">
      {servicesData.map(({ id, imageUrl, text ,title}) => (
        <div className={`service-box ${id}`} key={id}>
          <div className="box-image">
            <img src={imageUrl} alt={text} /> {/* Render the image */}
          </div>
          <div className="box-text">
          <h3>{title}</h3>
          <p>{text}</p>
           <a href="#">Read More</a>
          </div>
        </div>
      ))}
      </section>
    </section>
  );
}

export default HeroSection;
