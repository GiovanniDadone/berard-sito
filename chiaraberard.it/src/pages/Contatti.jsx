// Contatti.jsx
import { useSEO, useStructuredData } from "../utils/seo";
import "./Contatti.css";

const Contatti = () => {
  // SEO per la pagina contatti
  useSEO({
    title: "Contatti - Chiara Berard Valle d'Aosta Aperta | Scrivi e Partecipa",
    description: "Contatta Chiara Berard per domande, collaborazioni e partecipazione alla campagna elettorale 2025. WhatsApp, email, Instagram e Facebook.",
    canonical: "https://chiaraberard.it/contatti",
    ogImage: "https://chiaraberard.it/contatti-og.jpg",
    keywords: "contatti Chiara Berard, WhatsApp, email, Instagram, Facebook, campagna elettorale, Valle d'Aosta",
    ogType: "website"
  });

  // Dati strutturati per i contatti
  useStructuredData({
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "Person",
      "name": "Chiara Berard",
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+39-390-123-4567",
          "contactType": "customer service",
          "availableLanguage": ["Italian", "French"]
        },
        {
          "@type": "ContactPoint", 
          "email": "scrivimi@chiaraberard.it",
          "contactType": "customer service"
        }
      ],
      "sameAs": [
        "https://instagram.com/adolescenzafumogeno",
        "https://facebook.com/profile.php?id=61569104398518",
        "https://wa.me/393901234567"
      ]
    },
    "about": {
      "@type": "Thing",
      "name": "Campagna Elettorale Valle d'Aosta 2025",
      "description": "Contatti per partecipazione, collaborazioni e informazioni sulla campagna elettorale"
    }
  });

  return (
    <div className="contacts-container">
      <div className="contacts-content">
        <section className="intro-section">
          <h1 className="contact-title">CONTATTAMI</h1>
          <h4 className="contact-intro-text">
            Resta aggiornato, partecipa, costruisci con noi. La mia campagna
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
        </section>

        <section>
          <div className="quote-box">
            <p>Come Aiutarmi</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Contatti;