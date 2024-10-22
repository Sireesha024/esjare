import React from 'react';
import NavigationBar from '../NavbarComponent.jsx';
import Footer from '../Footer.jsx';
import PageHeroSection from '../PageHeroSection.jsx';
import ContentComp from './../ContentComponent.jsx';
import imageUrl from './../../assets/backgroundImage.jpeg'; // Importing the image


const PatientMonitoring = () => {
    const breadcrumbs = [   
        { name: 'Services', link: '/' },
        { name: 'AI-Driven Patient Monitoring', link: 'services' },
    ];
  return (
    <>
        <NavigationBar />
        <PageHeroSection pageTitle="AI-Driven Patient Monitoring" breadcrumbs={breadcrumbs} />

        <ContentComp
            title="Patient Monitoring"
            description="For hospitals and ambulance services, AI technology monitors patient vitals, prioritizes emergency cases, and sends predictive alerts to medical teams. The system provides real-time updates to hospital emergency departments, allowing medical teams to be fully prepared for high-risk patients before they arrive. This, in turn, enables ambulance services to improve response times for critical cases by 25%, while hospitals can prioritize care for the most urgent patients, significantly enhancing survival rates in emergency situations."
            imageSrc={imageUrl}
          />


        <Footer />
      </>
  );
}

export default PatientMonitoring;
