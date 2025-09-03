import Banner from "../components/Banner";
import HeroSection from "../components/HeroSection";
import { useSEO } from "../utils/seo";
import "./Home.css";

const Home = () => {
  useSEO({
    title:
      "Chiara Berard - Candidata Valle d'Aosta Aperta | Elezioni Regionali 2025",
    description:
      "Sognare, lottare, restare. Chiara Berard candidata Valle d'Aosta Aperta per elezioni regionali 2025. Salario minimo, sanità pubblica, ambiente.",
    canonical: "https://chiaraberard.it/",
    ogImage: "https://chiaraberard.it/profile-image.png",
    keywords:
      "Chiara Berard, Valle d'Aosta, elezioni regionali, politica, salario minimo",
  });

  return (
    <main className="main-container">
      <HeroSection />

      {/* Banner attaccato senza spazi */}
      <Banner />

      {/* Stats section immediatamente dopo */}
      <section className="stats-section">
        <h2 className="stats-title">Insieme per il cambiamento</h2>
        <div className="stats-title">
          <h3>Testo di prova</h3>
          {/*DA METTERE QUI IL TESTO*/}
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
