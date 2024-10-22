import React from 'react';
import NavigationBar from '../NavbarComponent.jsx';
import Footer from '../Footer.jsx';
import PageHeroSection from '../PageHeroSection.jsx';
import ContentComp from './../ContentComponent.jsx';
import imageUrl from './../../assets/backgroundImage.jpeg'; // Importing the image


const DSModelBuilder = () => {
    const breadcrumbs = [   
        { name: 'Services', link: '/' },
        { name: 'Custom Data Science Modal Builder', link: 'services' },
    ];

  return (
    <>
        <NavigationBar />
        <PageHeroSection pageTitle="Custom Data Science Modal Builder" breadcrumbs={breadcrumbs} />

        <ContentComp
            title="Custom Data Science Modal Builder"
            description="Facilitates intuitive querying of unstructured data, such as clinical notes and patient reports, to enhance decision-making speed. With EsJare’s NLP tool, the institution can efficiently search and filter relevant information from unstructured clinical reports, automatically categorizing insights like patient outcomes and side effects. This reduces data querying time by 40%, allowing the research team to more quickly identify key trends, thereby accelerating their research and publication timelines."
            imageSrc={imageUrl}
          />

        <Footer />
      </>
  );
}

export default DSModelBuilder;
