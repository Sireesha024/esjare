import React from 'react';
import NavbarComponent from './NavbarComponent';
import HeroSection from './HeroSection';
import Footer from './Footer';
import './../css/homePage.css'

const HomePage = () => {
  return (
    <div className='homePage'>
      <NavbarComponent />
      <HeroSection />
      <Footer />
      </div>
  );
}

export default HomePage;
