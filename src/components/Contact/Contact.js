import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapMarker,
  faPhone,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons';
import Section from '../Section/Section';

const Contact = () => (
  <Section id="contact" heading="CONTACT">
    <div className="w3-row w3-margin-bottom">
      <div className="w3-third">
        <span>
          <FontAwesomeIcon icon={faMapMarker} className="w3-text-blue" /> Ago
          Valley, Isolo, Lagos, NG
        </span>
      </div>
      <div className="w3-third">
        <span>
          <FontAwesomeIcon icon={faPhone} className="w3-text-blue" /> Phone:
          +234 812 345 6789
        </span>
      </div>
      <div className="w3-third">
        <span>
          <FontAwesomeIcon icon={faEnvelope} className="w3-text-blue" /> Email:
          mail@mail.com
        </span>
      </div>
    </div>

    <form>
      <div className="w3-row-padding">
        <div className="w3-third w3-margin-bottom">
          <textarea
            className="w3-input w3-border"
            type="text"
            placeholder="Message"
            required
            name="Message"
          />
        </div>
        <div className="w3-third w3-margin-bottom">
          <input
            className="w3-input w3-border"
            type="text"
            placeholder="Email"
            required
            name="Email"
          />
        </div>
        <div className="w3-third w3-margin-bottom">
          <button className="w3-button w3-blue" type="submit">
            SEND
          </button>
        </div>
      </div>
    </form>
  </Section>
);

export default Contact;
