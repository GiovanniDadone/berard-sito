import React from "react";
import "./StorySection.css";

const StorySection = () => {
  return (
    <div className="story-container">
      <div className="story-content">
        <section>
          <h1>CHIARA BERARD</h1>
          <h2>VALLE D'AOSTA APERTA</h2>
        </section>

        <section className="story-main">
          <div className="story-column">
            <h3>La mia storia</h3>
            <p className="story-text">
              Nata e cresciuta in Valle d'Aosta, combatto da anni per{" "}
              <span className="highlight-red">giustizia sociale</span> e{" "}
              <span className="highlight-teal">ambientale</span>. La mia
              battaglia contro il{" "}
              <span className="highlight-bold">pirogassificatore</span> è solo
              una delle tante.
            </p>
          </div>

          <div className="story-column">
            <h3>I miei valori</h3>
            <ul>
              <li>
                <span className="value-icon">✊</span>
                <span>Diritti LGBTQIA+</span>
              </li>
              <li>
                <span className="value-icon">🏥</span>
                <span>Sanità accessibile</span>
              </li>
              <li>
                <span className="value-icon">💼</span>
                <span>Lavoro dignitoso</span>
              </li>
              <li>
                <span className="value-icon">🌿</span>
                <span>Tutela ambientale</span>
              </li>
            </ul>
          </div>
        </section>

        <section>
          <div className="quote-box">
            <p>
              "Mi candido per portare in Consiglio la voce di chi non ha mai
              avuto spazio.
              <span className="highlight-purple">
                Insieme possiamo cambiare la Valle d'Aosta
              </span>
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default StorySection;
