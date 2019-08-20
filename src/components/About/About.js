import React from 'react';
import Section from '../Section/Section';

const About = () => (
  <Section id="about" heading="ABOUT THE COMPANY">
    <div className="w3-row-padding w3-center">
      <div className="w3-quarter">
        <i className="fa fa-desktop w3-margin-bottom w3-jumbo w3-center" />
        <p className="w3-large">Responsive</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore.
        </p>
      </div>
      <div className="w3-quarter">
        <i className="fa fa-heart w3-margin-bottom w3-jumbo" />
        <p className="w3-large">Passion</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore.
        </p>
      </div>
      <div className="w3-quarter">
        <i className="fa fa-diamond w3-margin-bottom w3-jumbo" />
        <p className="w3-large">Design</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore.
        </p>
      </div>
      <div className="w3-quarter">
        <i className="fa fa-cog w3-margin-bottom w3-jumbo" />
        <p className="w3-large">Support</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore.
        </p>
      </div>
    </div>
  </Section>
);

export default About;
