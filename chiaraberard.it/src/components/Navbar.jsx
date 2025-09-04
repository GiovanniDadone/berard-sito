import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Funzione per aprire Gmail
  const handleEmailClick = () => {
    window.open('https://mail.google.com/mail/?view=cm&fs=1&to=scrivimi@chiaraberard.it', '_blank');
  };
  
  return (
    <header className="header bg-teal-85 sticky-top">
      <div className="container flex-between py-2">
        <Link to="/" className="logo-link">
          <img
            src="/Santino_sovraimpressione.png"
            alt="Chiara Berard - Elezioni Regionali Valle d'Aosta"
            className="logo-image"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="nav desktop-nav">
          <ul className="nav-list flex-center gap-4">
            <li><Link to="/chi-sono" className="nav-link">Chi sono</Link></li>
            <li><Link to="/proposte" className="nav-link">Le mie proposte</Link></li>
            <li><Link to="/contatti" className="nav-link">Contatti</Link></li>
            <button className="button-link" onClick={handleEmailClick}>Scrivimi</button>
          </ul>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Mobile Navigation */}
        <nav className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
          <ul className="mobile-nav-list">
            <li><Link to="/chi-sono" className="mobile-nav-link" onClick={closeMenu}>Chi sono</Link></li>
            <li><Link to="/proposte" className="mobile-nav-link" onClick={closeMenu}>Le mie proposte</Link></li>
            <li><Link to="/contatti" className="mobile-nav-link" onClick={closeMenu}>Contatti</Link></li>
            <li>
              <button 
                className="mobile-button-link" 
                onClick={() => {
                  handleEmailClick();
                  closeMenu();
                }}
              >
                Scrivimi
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;