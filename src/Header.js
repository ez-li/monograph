import React from 'react';
import logo from './logo.png';
import './Header.css';

function Header(props) {

  const { width } = props;

  return (
    <header className="header">
       <div className="header-logo"></div>
      <p className="header-content">
        We'd love a review
      </p>
      { width < 800 ? null :<img src={logo} className="header-illustration" alt="illustration" /> }
    </header>
  );
}

export default Header;
