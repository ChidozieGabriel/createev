import React from 'react';
import HeaderItem from './HeaderItem/HeaderItem';

const Header = () => (
  <div className="w3-bar w3-blue">
    <HeaderItem>DesT-LAB</HeaderItem>
    <div className="w3-right">
      <HeaderItem>HOME</HeaderItem>
      <HeaderItem href="#about">ABOUT US</HeaderItem>
      <HeaderItem>PORTFOLIO</HeaderItem>
    </div>
  </div>
);

export default Header;
