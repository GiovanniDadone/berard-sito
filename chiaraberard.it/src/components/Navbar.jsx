// Navbar.jsx
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <header className="header bg-teal-85 sticky-top">
      <div className="container flex-between py-2">
        <a href="/" className="logo-link">
          <img 
            src="/Santino_sovraimpressione.png" 
            alt="Chiara Berard - Elezioni Regionali Valle d'Aosta" 
            className="logo-image"
          />
        </a>
        
        <nav className="nav">
          <ul className="nav-list flex-center gap-4">
            <li><a href="/chi-sono" className="nav-link">Chi sono</a></li>
            <li><a href="/proposte" className="nav-link">Le mie proposte</a></li>
            <li><a href="/contatti" className="nav-link">Contatti</a></li>
            <button className="button-link">Scrivimi</button>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;