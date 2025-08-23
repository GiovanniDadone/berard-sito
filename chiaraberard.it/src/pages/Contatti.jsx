import React from "react";
import "./Contatti.css";

const Contatti = () => {
  return (
    <div className="contacts-container">
      <div className="contacts-content">
        <section>
          <h1>CONTATTAMI</h1>
          <h4>
            Resta aggiornatə, partecipa, costruisci con noi. La mia campagna
            vive anche grazie a chi vuole esserci, informarsi e dare una mano.
            Iscriviti alla newsletter per ricevere aggiornamenti, materiali da
            condividere, appuntamenti sul territorio e contenuti esclusivi.
            Nessuno spam, solo cose che contano!
          </h4>
          <h2>
            Lasciami la tua mail e camminiamo insieme verso il 28 settembre.
          </h2>
        </section>

        <section className="contacts-main">
          <div className="contact-card">
            <div className="contact-icon facebook">📘</div>
            <h3>Facebook</h3>
            <p className="contact-text">
              Seguimi per <span className="highlight-teal">aggiornamenti</span>{" "}
              e<span className="highlight-red"> discussioni politiche</span>
            </p>
            <a
              href="https://facebook.com/chiaraberard"
              className="contact-link"
            >
              facebook.com/chiaraberard
            </a>
          </div>

          <div className="contact-card">
            <div className="contact-icon instagram">📷</div>
            <h3>Instagram</h3>
            <p className="contact-text">
              Scopri il <span className="highlight-teal">dietro le quinte</span>
              della mia campagna
            </p>
            <a
              href="https://instagram.com/chiara.berard"
              className="contact-link"
            >
              @chiara.berard
            </a>
          </div>

          <div className="contact-card">
            <div className="contact-icon tiktok">🎵</div>
            <h3>TikTok</h3>
            <p className="contact-text">
              Contenuti <span className="highlight-red">dinamici</span> e
              <span className="highlight-teal">coinvolgenti</span>
            </p>
            <a href="https://tiktok.com/@chiaraberard" className="contact-link">
              @chiaraberard
            </a>
          </div>

          <div className="contact-card">
            <div className="contact-icon whatsapp">💬</div>
            <h3>WhatsApp</h3>
            <p className="contact-text">
              Scrivimi per domande dirette e suggerimenti
            </p>
            <a href="https://wa.me/393901234567" className="contact-link">
              +39 390 123 4567
            </a>
          </div>

          <div className="contact-card">
            <div className="contact-icon email">✉️</div>
            <h3>Email</h3>
            <p className="contact-text">
              Per <span className="highlight-teal">collaborazioni</span> e
              <span className="highlight-teal">proposte ufficiali</span>
            </p>
            <a
              href="mailto:chiara.berard@valleostaaperta.it"
              className="contact-link"
            >
              chiara.berard@valleostaaperta.it
            </a>
          </div>
        </section>

        <section>
          <div className="quote-box">
            <p>
              "La politica si fa insieme. Ogni voce conta, ogni messaggio è
              importante"
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contatti;
