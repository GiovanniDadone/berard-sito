import EngagementSection from "../components/EngagementSection";
import Banner from "../components/Banner";
import StorySection from "../components/StorySection";
import "./ChiSono.css";

const ChiSono = () => {
  return (
    <main className="main-container">
      {/* Banner Section */}
      <Banner />
      
      {/* Content Section */}
      <section className="content-section">
        <div className="content-inner">
          {/* Story Section */}
          <StorySection />
          
        </div>
      </section>
    </main>
  );
};

export default ChiSono;