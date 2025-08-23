import EngagementSection from "../components/EngagementSection";
import FastNewsBanner from "../components/FastNewsBanner";
import HeroSection from "../components/HeroSection";
import StorySection from "../components/StorySection";
import "./ChiSono.css";

const ChiSono = () => {
  return (
    <main className="main-container">
      {/* Hero Section */}
      <HeroSection />
      <FastNewsBanner />

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
