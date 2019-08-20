import React from 'react';
import image from './assets/120.png';
import Card from './Card/Card';
import Section from '../Section/Section';

const Services = () => (
  <Section id="services" heading="OUR SERVICES">
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
  </Section>
);

export default Services;
