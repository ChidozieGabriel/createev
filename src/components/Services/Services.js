import React from 'react';
import image from './assets/120.png';
import Card from './Card/Card';

const Services = () => (
  <div className="w3-container w3-content w3-section" id="about">
    <h2 className="w3-center w3-wide">OUR SERVICES</h2>
    <div className="w3-row w3-center">
      <div className="w3-third w3-container w3-margin-bottom">
        <Card
          image={image}
          description="We code and code and code and ... and play game :-)"
        >
          Website Designing and Development
        </Card>
      </div>
      <div className="w3-third w3-container w3-margin-bottom">
        <Card
          image={image}
          description="We code and code and code and ... and play game :-)"
        >
          Mobile Application
        </Card>
      </div>
      <div className="w3-third w3-container w3-margin-bottom">
        <Card
          image={image}
          description="We code and code and code and ... and play game :-)"
        >
          Web Portal
        </Card>
      </div>

      <div className="w3-third w3-container w3-margin-bottom" />

      <div className="w3-third w3-container w3-margin-bottom">
        <Card
          image={image}
          description="We code and code and code and ... and play game :-)"
        >
          SEO and Social Media Marketing
        </Card>
      </div>
    </div>
  </div>
);

export default Services;
