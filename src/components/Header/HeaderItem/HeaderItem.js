import React from 'react';

const HeaderItem = ({ href, children }) => (
  <a className="w3-bar-item w3-button w3-hover-text-black" href={href}>
    {children}
  </a>
);

export default HeaderItem;
