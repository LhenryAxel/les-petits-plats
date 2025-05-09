import React from 'react';
import '../styles/Header.css';
import SearchBar from './SearchBar'; 

const Header = ({ onSearch }) => {
  return (
    <header className="header">
      <div className="header-top">
      <img src="/images/Logo.png" alt="Logo Les Petits Plats" className="full-logo" />
      </div>

      <div className="overlay">
        <h1 className="title">
          CHERCHEZ PARMI PLUS DE 1500 RECETTES<br />
          DU QUOTIDIEN, SIMPLES ET DÉLICIEUSES
        </h1>

        <div className="searchbar-container">
          <SearchBar onSearch={onSearch} />
        </div>
      </div>
    </header>
  );
};

export default Header;
