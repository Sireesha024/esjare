import React from 'react';
import NavigationBar from '../NavbarComponent.jsx';
import Footer from '../Footer.jsx';
import PageHeroSection from '../PageHeroSection.jsx';
import ContentComp from './../ContentComponent.jsx';
import imageUrl from './../../assets/backgroundImage.jpeg'; // Importing the image


const AmbulanceServices = () => {

    const breadcrumbs = [   
        { name: 'Services', link: '/' },
        { name: 'Ambulance Services', link: 'services' },
    ];
  return (
    <>
        <NavigationBar />
        <PageHeroSection pageTitle="Ambulance Services" breadcrumbs={breadcrumbs} />

        <ContentComp
            title="Ambulance Services"
            description="EsJare’s AI-powered system optimizes ambulance services by predicting the most efficient routes using real-time traffic data and prioritizing emergency cases based on patient condition. During transit, the system continuously monitors patient vitals and provides live updates to hospital teams. Integrated with hospital emergency departments, this solution enables real-time communication, allowing medical staff to prepare in advance for incoming patients. As a result, ambulance response times are reduced by 20%, and hospitals are better equipped to deliver timely and effective emergency care."
            imageSrc={imageUrl}
        />

        <Footer />
      </>
  );
}

export default AmbulanceServices;
