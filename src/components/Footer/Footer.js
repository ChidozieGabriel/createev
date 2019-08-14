import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faFacebook,
  faLinkedin,
  faGoogle,
  faTwitter
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => (
  <div className="w3-blue w3-container w3-padding-large w3-row w3-center">
    <span className="w3-third">&copy; destlab 2019</span>
    <p className="w3-third" />
    <div className="w3-third">
      <a
        className="w3-margin-left w3-hover-text-black"
        href="https://web.facebook.com/gravityopposer"
      >
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a
        className="w3-margin-left w3-hover-text-black"
        href="https://twitter.com/UchechukwuMich4"
      >
        <FontAwesomeIcon icon={faTwitter} />
      </a>
      <a
        className="w3-margin-left w3-hover-text-black"
        href="https://www.linkedin.com/in/nnabugwu-michael/"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a
        className="w3-margin-left w3-hover-text-black"
        href="https://www.linkedin.com/in/nnabugwu-michael/"
      >
        <FontAwesomeIcon icon={faGoogle} />
      </a>
    </div>
  </div>
);

export default Footer;
