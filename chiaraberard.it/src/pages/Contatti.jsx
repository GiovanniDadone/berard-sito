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
            <div className="contact-icon facebook">
              <img src="/facebook.png" alt="Facebook" />
            </div>
            <h3>Facebook</h3>
            <p className="contact-text">
              Seguimi per <span className="highlight-teal">aggiornamenti</span>{" "}
              e<span className="highlight-red"> discussioni politiche</span>
            </p>
            <a
              href="https://facebook.com/profile.php?id=61569104398518"
              className="contact-link"
            >
              facebook.com/chiaraberard
            </a>
          </div>
          <div className="contact-card">
            <div className="contact-icon instagram">
              <img src="/instagram.png" alt="Instagram" />
            </div>
            <h3>Instagram</h3>
            <p className="contact-text">
              Scopri il <span className="highlight-teal">dietro le quinte</span>
              della mia campagna
            </p>
            <a
              href="https://instagram.com/adolescenzafumogeno"
              className="contact-link"
            >
              @adolescenzafumogeno
            </a>
          </div>
          <div className="contact-card">
            <div className="contact-icon tiktok">
              <img src="/tiktok.png" alt="TikTok" />
            </div>
            <h3>TikTok</h3>
            <p className="contact-text">
              Contenuti <span className="highlight-red">dinamici</span> e
              <span className="highlight-teal">coinvolgenti</span>
            </p>
            <a
              href="https://tiktok.com/@chiaraisabelle"
              className="contact-link"
            >
              @chiaraisabelle
            </a>
          </div>
          <div className="contact-card">
            <div className="contact-icon whatsapp">
              <img src="/whatsapp.png" alt="WhatsApp" />
            </div>
            <h3>WhatsApp</h3>
            <p className="contact-text">
              Scrivimi per domande dirette e suggerimenti
            </p>
            <a href="https://wa.me/393901234567" className="contact-link">
              +39 390 123 4567
            </a>
          </div>
          <div className="contact-card">
            <div className="contact-icon email">
              <img src="/mail.png" alt="Email" />
            </div>
            <h3>Email</h3>
            <p className="contact-text">
              Per <span className="highlight-teal">collaborazioni</span> e
              <span className="highlight-teal">proposte ufficiali</span>
            </p>
            <a href="mailto:scrivimi@chiaraberard.it" className="contact-link">
              scrivimi@chiaraberard.it
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
