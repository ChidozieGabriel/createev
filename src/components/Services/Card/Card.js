import React from 'react';
import './Card.css';

const Card = ({ image, children, description, href }) => (
  <div className="w3-card w3-padding-16">
    <div className="w3-container w3-section w3-center">
      <img className="card-img" src={image} alt="" />
      <br />
      <hr />

      <h5 className="w3-text-blue w3-cell w3-cell-middle card-header">
        {children}
      </h5>

      <hr />
      <span className="w3-opacity-min">{description}</span>
      <br />
      <br />
      <a className="w3-text-light-blue w3-right w3-button" href={href}>
        read more...
      </a>
    </div>
  </div>
);

export default Card;
