import EngagementSection from "../components/EngagementSection";
import Banner from "../components/Banner";
import HeroSection from "../components/HeroSection";
import StorySection from "../components/StorySection";
import "./ChiSono.css";

const ChiSono = () => {
  return (
    <main className="main-container">
      {/* Hero Section */}
      <HeroSection />
      <Banner />

      {/* Content Section */}
      <section className="content-section">
        <div className="content-inner">
          {/* Story Section */}
          <StorySection />

          {/* Engagement Section (Hashtags + Social Proof) */}
          <EngagementSection />
        </div>
      </section>
    </main>
  );
};

export default ChiSono;
