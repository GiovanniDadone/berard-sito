// HeroSection.jsx
import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-image-wrapper">
            <div className="hero-image-container">
              <img
                src="/Santino_sovraimpressione_Chiara.png"
                className="hero-image"
                loading="eager"
              />
            </div>
          </div>
          
          <div className="hero-text-section">
            <div className="hero-text-content">
              
              <h1 className="hero-title">
                Mi chiamo <span className="title-highlight">Chiara Berard</span>
              </h1>
              
              <div className="hero-description">
                <p>Una voce autentica per la Valle d'Aosta, con 13 anni di impegno per i diritti civili e il progresso sociale.</p>
              </div>
              
              <div className="hero-call-to-action">
                <div className="cta-item">
                  <div className="cta-icon">📆</div>
                  <div className="cta-content">
                    <h3>28 settembre</h3>
                    <p>Ricorda la data!</p>
                  </div>
                </div>
                
                <div className="cta-item">
                  <div className="cta-icon">✍️</div>
                  <div className="cta-content">
                    <h3>Scrivi BERARD</h3>
                    <p>Accanto al simbolo</p>
                  </div>
                </div>
              </div>
              
              <div className="hero-buttons">
                <button className="btn-primary">Scopri il programma</button>
                <button className="btn-secondary">Contattami</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;