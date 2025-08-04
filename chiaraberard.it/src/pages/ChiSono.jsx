import React from 'react';
import HeroSection from '../components/HeroSection';
import StorySection from '../components/StorySection';
import EngagementSection from '../components/EngagementSection';
import InfiniteScrollBanner from '../components/InfiniteScrollBanner';
import './ChiSono.css';

const ChiSono = () => {
  return (
    <main className="main-container">
      {/* Hero Section */}
      <HeroSection />
      <InfiniteScrollBanner
        text="Sognare, lottare, restare"
      />

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