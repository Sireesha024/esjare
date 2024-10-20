import React, { useRef, useEffect } from 'react';
import './../css/about.css'; // Assuming you have a CSS file for styling
import { useLocation } from 'react-router-dom';
import Footer from "./Footer";
import NavigationBar from "./NavbarComponent";


const About = ({ section }) => {
  const historyRef = useRef(null);
  const missionRef = useRef(null);
  const chooseUsRef = useRef(null);

  const location = useLocation();

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    // Scroll to the relevant section based on the route
    if (section === 'mission') {
      scrollToSection(missionRef);
    } else if (section === 'chooseUs') {
      scrollToSection(chooseUsRef);
    } else if (section === 'history') {
      scrollToSection(historyRef);
    }
  }, [section]);

  return (
    <>
    <NavigationBar/>
    <div className="about-page">
      <section ref={historyRef} className="about-section">
        <h2>Our History</h2>
        <img src="path/to/history-image.jpg" alt="Our History" />
        <p>Welcome to Emerovate...</p>
      </section>

      <section ref={missionRef} className="about-section">
        <h2>Our Mission</h2>
        <img src="path/to/mission-image.jpg" alt="Our Mission" />
        <p>At Emerovate, our mission is...</p>
      </section>

      <section ref={chooseUsRef} className="about-section">
        <h2>Why Choose Us?</h2>
        <img src="path/to/choose-us-image.jpg" alt="Why Choose Us" />
        <p>At Emerovate, you get the best IT services...</p>
      </section>
    </div>

    <Footer />

    </>
  );
};

export default About;
