// Contatti.jsx
import { Helmet } from "@vuer-ai/react-helmet-async";
import "./Contatti.css";

const Contatti = () => {
  // SEO per la pagina contatti

  // Dati strutturati per i contatti
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    mainEntity: {
      "@type": "Person",
      name: "Chiara Berard",
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+39-390-123-4567",
          contactType: "customer service",
          availableLanguage: ["Italian", "French"],
        },
        {
          "@type": "ContactPoint",
          email: "scrivimi@chiaraberard.it",
          contactType: "customer service",
        },
      ],
      sameAs: [
        "https://instagram.com/adolescenzafumogeno",
        "https://facebook.com/profile.php?id=61569104398518",
        "https://wa.me/393901234567",
      ],
    },
    about: {
      "@type": "Thing",
      name: "Campagna Elettorale Valle d'Aosta 2025",
      description:
        "Contatti per partecipazione, collaborazioni e informazioni sulla campagna elettorale",
    },
  };

  return (
    <div className="contacts-container">
      <Helmet>
        {/* Titolo e descrizione */}
        <title>
          Chiara Berard - Candidata Valle d'Aosta Aperta | Elezioni Regionali
          2025
        </title>
        <meta
          name="description"
          content="Sognare, lottare, restare. Chiara Berard candidata Valle d'Aosta Aperta per elezioni regionali 2025. Salario minimo, sanità pubblica, ambiente."
        />
        <meta
          name="keywords"
          content="Chiara Berard, Valle d'Aosta, elezioni regionali 2025, politica, salario minimo, sanità pubblica, ambiente, diritti"
        />
        <link rel="canonical" href="https://chiaraberard.it/proposte" />

        {/* Open Graph (Facebook / LinkedIn / WhatsApp) */}
        <meta
          property="og:title"
          content="Chiara Berard - Candidata Valle d'Aosta Aperta | Elezioni Regionali 2025"
        />
        <meta
          property="og:description"
          content="Le proposte di Chiara Berard per la Valle d'Aosta: salario minimo, sanità pubblica, ambiente, diritti e molto altro."
        />
        <meta property="og:url" content="https://chiaraberard.it/proposte" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://chiaraberard.it/profile-image.png"
        />
        <meta property="og:locale" content="it_IT" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Chiara Berard - Candidata Valle d'Aosta Aperta"
        />
        <meta
          name="twitter:description"
          content="Scopri le proposte di Chiara Berard per una Valle più giusta, ecologica e solidale."
        />
        <meta
          name="twitter:image"
          content="https://chiaraberard.it/profile-image.png"
        />
        <meta name="twitter:creator" content="@adolescenzafumogeno" />

        {/* JSON-LD Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
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
