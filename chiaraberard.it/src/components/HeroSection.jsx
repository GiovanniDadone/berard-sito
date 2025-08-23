// HeroSection.jsx
import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-image-container">
          <img
            src="/Santino_sovraimpressione_Chiara.png"
            alt="Chiara Berard Valle D'Aosta"
            className="hero-image"
          />
        </div>

        <div className="hero-text-container">
          <div className="hero-text-content">
            <h2 className="hero-title">Mi chiamo Chiara Berard</h2>
            <div className="hero-description">
              <p>
                Ho 26 anni e mi candido alle elezioni regionali del 28 settembre
                2025 con la lista Valle d'Aosta Aperta, perché voglio portare in
                Consiglio una voce che troppo spesso è rimasta fuori: la voce di
                chi vive precarietà, esclusione, silenzio.
              </p>
              <p>
                La voce di chi lotta ogni giorno per restare in questa terra
                senza rinunciare a dignità, diritti e futuro.
              </p>
            </div>
            <div className="hero-call">
              <h5>📆 Il 28 settembre alle elezioni regionali</h5>
              <h5>🗳️ vota la lista Valle d’Aosta Aperta</h5>
              <h5>✍️ E scrivi BERARD accanto al simbolo</h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
