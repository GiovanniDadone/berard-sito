// Header.jsx
import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header bg-teal-85 sticky-top">
      <div className="container flex-between py-2">
        <a href="/" className="logo-link">
          <img 
            src="/icona_sito.png" 
            alt="Chiara Berard - Elezioni Regionali Valle d'Aosta" 
            className="logo-image"
          />
        </a>
        
        <nav className="nav">
          <ul className="nav-list flex-center gap-4">
            <li><a href="/chi-sono" className="nav-link">Chi sono</a></li>
            <li><a href="/cosa-faccio" className="nav-link">Cosa faccio</a></li>
            <li><a href="/contatti" className="nav-link">Contatti</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;