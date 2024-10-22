import React from 'react';
import PropTypes from 'prop-types';
import './../css/pageherosection.css';

const PageHeroSection = ({ pageTitle, breadcrumbs }) => {
  return (
    <section className="hero-section bg-light py-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <h1 className="hero-title">{pageTitle}</h1>
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                {breadcrumbs.map((breadcrumb, index) => (
                  <li
                    key={index}
                    className={`breadcrumb-item ${index === breadcrumbs.length - 1 ? 'active' : ''}`}
                    aria-current={index === breadcrumbs.length - 1 ? 'page' : undefined}
                  >
                    {index !== breadcrumbs.length - 1 ? (
                      <a href={breadcrumb.link}>{breadcrumb.name}</a>
                    ) : (
                      breadcrumb.name
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
};

PageHeroSection.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      link: PropTypes.string,
    })
  ).isRequired,
};

export default PageHeroSection;
