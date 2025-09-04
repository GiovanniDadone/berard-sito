// src/pages/Home.jsx
import { Helmet } from "@vuer-ai/react-helmet-async";
import Banner from "../components/Banner";
import HeroSection from "../components/HeroSection";
import "./Home.css";

const Home = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Chiara Berard",
    jobTitle: "Candidata Consiglio Regionale Valle d'Aosta",
    description:
      "Candidata alle elezioni regionali 2025 per Valle d'Aosta Aperta. Attivista per i diritti LGBTQ+, co-fondatrice Aosta Pride.",
    url: "https://chiaraberard.it",
    image: "https://chiaraberard.it/profile-image.png",
    sameAs: [
      "https://www.instagram.com/adolescenzafumogeno",
      "https://facebook.com/profile.php?id=61569104398518",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Aosta",
      addressRegion: "Valle d'Aosta",
      addressCountry: "IT",
    },
    affiliation: {
      "@type": "Organization",
      name: "Valle d'Aosta Aperta",
    },
    knowsAbout: [
      "Politiche sociali",
      "Diritti LGBTQ+",
      "Ambiente",
      "Sanità pubblica",
      "Salario minimo",
    ],
  };

  return (
    <main className="main-container">
      <Helmet>
        <title>
          Chiara Berard - Candidata Valle d'Aosta Aperta | Elezioni Regionali
          2025
        </title>
        <meta
          name="description"
          content="Sognare, lottare, restare. Chiara Berard candidata Valle d'Aosta Aperta per elezioni regionali 2025. Salario minimo, sanità pubblica, ambiente, diritti LGBTQ+."
        />
        <link rel="canonical" href="https://chiaraberard.it/" />
        <meta
          property="og:title"
          content="Chiara Berard - Valle d'Aosta Aperta"
        />
        <meta
          property="og:description"
          content="Sognare, lottare, restare. Chiara Berard candidata Valle d'Aosta Aperta per elezioni regionali 2025."
        />
        <meta
          property="og:image"
          content="https://chiaraberard.it/profile-image.png"
        />
        <meta property="og:type" content="website" />
        <meta
          name="keywords"
          content="Chiara Berard, Valle d'Aosta, elezioni regionali 2025, politica, salario minimo, sanità pubblica, ambiente, LGBTQ+, Aosta Pride"
        />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      <HeroSection />
      <Banner />

      <section className="stats-section">
        <h2 className="stats-title">Insieme per il cambiamento</h2>
        <div className="stats-title">
          <h3>Testo di prova</h3>
          {/* DA METTERE QUI IL TESTO */}
        </div>
        <div className="stats-grid">
          <div className="stat-card stat-card--red" data-bg="political">
            <div className="stat-content">
              <span className="stat-number">13</span>
              <span className="stat-label">Anni di impegno socio-politico</span>
            </div>
          </div>
          <div className="stat-card stat-card--teal" data-bg="pride">
            <div className="stat-content">
              <span className="stat-number">1°</span>
              <span className="stat-label">Pride in VdA</span>
            </div>
          </div>
          <div className="stat-card stat-card--purple" data-bg="passion">
            <div className="stat-content">
              <span className="stat-number">∞</span>
              <span className="stat-label">Passione</span>
            </div>
          </div>
        </div>
        <img
          src="/finto_santino.png"
          className="santino"
          loading="eager"
          alt="Chiara Berard"
        />
      </section>
    </main>
  );
};

export default Home;
