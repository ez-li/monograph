import React from 'react';
import logo from './logo.png';
import './Header.css';

function Header(props) {

  const { width, isMobile } = props;

  return (
    <header className={ isMobile ? "header-mobile" : "header"}>
       <div className="header-logo"></div>
      <p className="header-content" style={ isMobile ? {fontSize:'32px'} : {} }>
        We'd love a review
      </p>
      { width < 900 ? null : <img src={logo} className="header-illustration" alt="illustration" /> }
    </header>
  );
}

export default Header;
