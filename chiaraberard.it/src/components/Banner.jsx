import React from "react";
import Marquee from "react-fast-marquee";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-container">
      <Marquee
        speed={45}
        pauseOnHover={false}
        gradient={false}
        className="marquee-container"
      >
        <span className="banner-text">Sognare. Lottare. Restare.</span>
        <span>.......</span>
        <span className="banner-text">
          Vota Valle d'Aosta Aperta, scrivi Berard!
        </span>
        <span>.......</span>
        <span className="banner-text">Sondjé. Se battre. Reusté.</span>
        <span>.......</span>
        <span className="banner-text">
          Per una Valle d'Aosta che non lascia indietro nessunə.
        </span>
        <span>.......</span>
      </Marquee>
    </div>
  );
};

export default Banner;
