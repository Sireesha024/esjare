import React from "react";
import NavigationBar from "./NavbarComponent";
import HeroSection from "./HeroSection";
import Footer from "./Footer";

const HomePage = () => {
  return (
      <>
        <NavigationBar />
        <HeroSection />

        <h1>in Home Page</h1>
        <Footer />
      </>
  );
};

export default HomePage;
