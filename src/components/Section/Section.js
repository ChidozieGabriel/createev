import React from 'react';

const Section = ({ id, heading, children }) => (
  <div className="w3-container w3-content w3-section" id={id}>
    <h2 className="w3-center w3-wide">{heading}</h2>
    {children}
  </div>
);

export default Section;
