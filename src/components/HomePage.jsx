import React from 'react';
import NavbarComponent from './NavbarComponent';
import HeroSection from './HeroSection';
import Services from './Services';
import About from './About';
import Footer from './Footer';

const HomePage = () => {
  return (
    <>
      <NavbarComponent />
      <HeroSection />
      <About />
      <Services />
      <Footer />
    </>
  );
}

export default HomePage;
