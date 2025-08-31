// Contatti.jsx
import "./Contatti.css";

const Contatti = () => {
  return (
    <div className="contacts-container">
      <div className="contacts-content">
        <section className="intro-section">
          <h1 className="contact-title">CONTATTAMI</h1>
          <h4 className="contact-intro-text">
            Resta aggiornatə, partecipa, costruisci con noi. La mia campagna
            vive anche grazie a chi vuole esserci, informarsi e dare una mano.
            Iscriviti alla newsletter per ricevere aggiornamenti, materiali da
            condividere, appuntamenti sul territorio e contenuti esclusivi.
            Nessuno spam, solo cose che contano!
          </h4>
          <h2 className="contact-reach">
            Lasciami la tua mail e camminiamo insieme verso il 28 settembre.
          </h2>
        </section>

        <section className="contacts-main">
          <div className="contact-card">
            <div className="contact-icon">
              <img src="/facebook.png" alt="Facebook" />
            </div>
            <h3>Facebook</h3>
            <p className="contact-text">
              Seguimi per aggiornamenti e discussioni politiche
            </p>
            <a
              href="https://facebook.com/profile.php?id=61569104398518"
              className="contact-link"
            >
              facebook.com/chiaraberard
            </a>
          </div>
          <div className="contact-card">
            <div className="contact-icon">
              <img src="/instagram.png" alt="Instagram" />
            </div>
            <h3>Instagram</h3>
            <p className="contact-text">
              Scopri il dietro le quinte della mia campagna
            </p>
            <a
              href="https://instagram.com/adolescenzafumogeno"
              className="contact-link"
            >
              @adolescenzafumogeno
            </a>
          </div>
          <div className="contact-card">
            <div className="contact-icon">
              <img src="/tiktok.png" alt="TikTok" />
            </div>
            <h3>TikTok</h3>
            <p className="contact-text">Contenuti dinamici e coinvolgenti</p>
            <a
              href="https://tiktok.com/@chiaraisabelle"
              className="contact-link"
            >
              @chiaraisabelle
            </a>
          </div>
          <div className="contact-card">
            <div className="contact-icon">
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
            <div className="contact-icon">
              <img src="/mail.png" alt="Email" />
            </div>
            <h3>Email</h3>
            <p className="contact-text">
              Per collaborazioni e proposte ufficiali
            </p>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=scrivimi@chiaraberard.it"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
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
