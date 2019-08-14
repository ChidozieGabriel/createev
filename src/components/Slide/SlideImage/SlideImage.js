import React from 'react';
import './SlideImage.css';

const SlideImage = ({ src, alt = '' }) => (
  <img src={src} alt={alt} className="w3-animate-left w3-greyscale-min" />
);

export default SlideImage;
