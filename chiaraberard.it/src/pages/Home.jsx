import Banner from "../components/Banner";
import HeroSection from "../components/HeroSection";
import "./Home.css";

const Home = () => {
  return (
    <main className="main-container">
      <HeroSection />
      <Banner />
      
      <section className="stats-section">
        <h2 className="stats-title">Insieme per il cambiamento</h2>
        <div className="stats-grid">
          <div className="stat-card stat-card--red" data-bg="political">
            <span className="stat-number">13</span>
            <span className="stat-label">Anni di impegno socio-politico</span>
          </div>
          <div className="stat-card stat-card--teal" data-bg="pride">
            <span className="stat-number">1°</span>
            <span className="stat-label">Pride in VdA</span>
          </div>
          <div className="stat-card stat-card--purple" data-bg="passion">
            <span className="stat-number">∞</span>
            <span className="stat-label">Passione</span>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;