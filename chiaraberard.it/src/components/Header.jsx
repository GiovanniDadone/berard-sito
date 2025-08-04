import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        {/* Logo */}
        <div className="header-logo">
          <a href="/">Chiara Isabelle Berard</a>
        </div>
        
        {/* Navigazione */}
        <nav className="header-nav">
          <ul className="nav-list">
            <li className="nav-item">
              <a href="/chi-sono" className="nav-link">Chi sono</a>
            </li>
            <li className="nav-item">
              <a href="/cosa-faccio" className="nav-link">Cosa faccio</a>
            </li>
            <li className="nav-item">
              <a href="/contatti" className="nav-link">Contatti</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;