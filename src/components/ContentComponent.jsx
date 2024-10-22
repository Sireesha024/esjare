import React from 'react';
import PropTypes from 'prop-types';
import './../css/contentComp.css';

const ContentComp = ({ title, description, imageSrc, reverseLayout = false }) => {
    console.log("reverseLayout:", reverseLayout);  // Check if it's true when expected

  return (
    <section className="cloud-service-section">
        <div className="container" style={{ flexDirection: reverseLayout ? 'row-reverse' : 'row' }}>        
        <div className="row align-items-center">
          <div className="col-lg-6 text-content">
            <h2 className="section-title">{title}</h2>
            <p className="section-description">{description}</p>
          </div>
          <div className="col-lg-6 image-content">
            <img src={imageSrc} alt="Cloud Service" className="service-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

ContentComp.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  reverseLayout: PropTypes.bool,  // Optional boolean prop
};

export default ContentComp;
