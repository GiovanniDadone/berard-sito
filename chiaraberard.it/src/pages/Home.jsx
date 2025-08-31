import Banner from "../components/Banner";
import HeroSection from "../components/HeroSection";
import "./Home.css";

const Home = () => {
  return (
    <main className="main-container">
      <HeroSection />

      {/* Banner attaccato senza spazi */}
      <Banner />

      {/* Stats section immediatamente dopo */}
      <section className="stats-section">
        <h2 className="stats-title">Insieme per il cambiamento</h2>
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
      </section>
    </main>
  );
};

export default Home;
