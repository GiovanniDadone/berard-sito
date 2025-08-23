import React from "react";
import "./StorySection.css";

const StorySection = () => {
  return (
    <div className="story-container">
      <div className="story-content">
        {/* Sezione Titolo */}
        <section className="story-header">
          <h1 className="story-title">
            <span className="name">Chiara</span>
            <span className="surname">BERARD</span>
          </h1>
          <h2 className="story-subtitle">
            <span className="region">VALLE D'AOSTA</span>
            <span className="list">AYERTA</span>
          </h2>
        </section>

        {/* Sezione Contenuto */}
        <section className="story-main">
          <div className="story-column">
            <h3 className="section-heading">La mia storia</h3>
            <p className="story-text">
              Nata e cresciuta in Valle d'Aosta, combatto da anni per <span className="highlight-red">giustizia sociale</span> e <span className="highlight-teal">ambientale</span>. La mia battaglia contro il <span className="highlight-bold">pirogassificatore</span> è solo una delle tante.
            </p>
          </div>

          <div className="story-column">
            <h3 className="section-heading">I miei valori</h3>
            <ul className="value-list">
              <li className="value-item">
                <span className="value-icon">✊</span>
                <span>Diritti LGBTQIA+</span>
              </li>
              <li className="value-item">
                <span className="value-icon">🏥</span>
                <span>Sanità accessibile</span>
              </li>
              <li className="value-item">
                <span className="value-icon">💼</span>
                <span>Lavoro dignitoso</span>
              </li>
              <li className="value-item">
                <span className="value-icon">🌿</span>
                <span>Tutela ambientale</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Sezione Citazione */}
        <section className="story-quote">
          <div className="quote-box">
            <p className="quote-text">
              "Mi candido per portare in Consiglio la voce di chi non ha mai avuto spazio. <span className="highlight-purple">Insieme possiamo cambiare la Valle d'Aosta</span>."
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default StorySection;