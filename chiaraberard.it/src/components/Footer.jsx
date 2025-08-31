import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="social-links">
          <a
            href="https://instagram.com/adolescenzafumogeno"
            className="social-link"
          >
            Instagram
          </a>
          <a
            href="https://facebook.com/profile.php?id=61569104398518"
            className="social-link"
          >
            Facebook
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=scrivimi@chiaraberard.it"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            Mail
          </a>
        </div>
        <p className="copyright">
          &copy; {new Date().getFullYear()} Chiara Isabelle Berard. Tutti i
          diritti riservati.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
