import React from "react";
import NavigationBar from "./NavbarComponent";
import HeroSection from "./HeroSection";
import Footer from "./Footer";
import './../css/homePage.css';

const HomePage = () => {
  return (
      <div className="homePage">
        <NavigationBar />
        <HeroSection />
        <Footer />
      </div>
  );
};

export default HomePage;
