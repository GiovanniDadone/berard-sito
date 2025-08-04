import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-inner">
          {/* Profile Image */}
          <div className="profile-container">
            <div className="profile-wrapper">
              <img
                src="/profile-image.jpg"
                alt="Chiara Isabelle Berard"
                className="profile-image"
              />
              <div className="profile-verified">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Titles */}
          <h1 className="main-title">Mi candido al consiglio</h1>
          <h2 className="subtitle">regionale della Valle D'Aosta</h2>

          {/* Animated dots */}
          <div className="dots-container">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
