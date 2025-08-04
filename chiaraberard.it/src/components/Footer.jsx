import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="social-links">
          <a href="#" className="social-link">LinkedIn</a>
          <a href="#" className="social-link">Twitter</a>
          <a href="#" className="social-link">Instagram</a>
        </div>
        <p className="copyright">
          &copy; {new Date().getFullYear()} Chiara Isabelle Berard. Tutti i diritti riservati.
        </p>
      </div>
    </footer>
  );
};

export default Footer;