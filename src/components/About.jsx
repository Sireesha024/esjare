import React, { useRef, useEffect } from 'react';
// import './../css/about.css'; // Assuming you have a CSS file for styling
import './../css/contentComp.css';

import { useLocation } from 'react-router-dom';
import Footer from "./Footer";
import NavigationBar from "./NavbarComponent";
import PageHeroSection from './PageHeroSection.jsx';
import ContentComp from './ContentComponent.jsx';
import imageUrl from './../assets/backgroundImage.jpeg'; // Importing the image

const About = () => {
  const historyRef = useRef(null);
  const missionRef = useRef(null);
  const chooseUsRef = useRef(null);

  const location = useLocation();

  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // Extract the hash from URL (e.g., "#mission")
    const hash = location.hash.substring(1); // Remove the '#' character
    if (hash === 'mission') {
      scrollToSection(missionRef);
    } else if (hash === 'chooseUs') {
      scrollToSection(chooseUsRef);
    } else if (hash === 'history') {
      scrollToSection(historyRef);
    }
  }, [location]);

  const breadcrumbs = [   
    { name: 'Home', link: '/' },
    { name: 'About', link: 'about' },
  ];

  return (
    <>
      <NavigationBar />
      <PageHeroSection pageTitle="About" breadcrumbs={breadcrumbs} />
      <div className="about-page">
        <section ref={historyRef} className="about-section">
          <ContentComp
            title="Our History"
            description="Welcome to EsJare.."
            imageSrc={imageUrl}
          />
        </section>

        <section ref={missionRef} className="about-section">
          <ContentComp
            title="Our Mission"
            description="At EsJare, Our mission is .."
            imageSrc={imageUrl}
            reverseLayout={true}
          />
        </section>

        <section ref={chooseUsRef} className="about-section">
          <ContentComp
            title="Why Choose Us"
            description="At EsJare, you get the best IT services..."
            imageSrc={imageUrl}
          />
        </section>
      </div>

      <Footer />
    </>
  );
};

export default About;
