import React from 'react';
import '../styles/Header.css';
import logo from '../images/Logo.png';

const Header = () => {
  return (
    <header className="header">
     <div className="header-top">
        <img src={logo} alt="Logo Les Petits Plats" className="full-logo" />
      </div>

      <div className="overlay">
        <h1 className="title">
          CHERCHEZ PARMI PLUS DE 1500 RECETTES<br />
          DU QUOTIDIEN, SIMPLES ET DÉLICIEUSES
        </h1>
      </div>
    </header>
  );
};

export default Header;
