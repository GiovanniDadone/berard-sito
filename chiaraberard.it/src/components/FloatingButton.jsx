import React, { useState, useEffect } from "react";
import "./FloatingButton.css";
import petizioneIcon from "/petizione.png";

const FloatingButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    window.open("https://actionnetwork.org/forms/salario-minimo-valdostano/", "_blank");
  };

  return (
    <button
      className={`floating-button ${isHovered ? 'hovered' : ''}`}
      onClick={handleClick}
      aria-label="Supporta la campagna"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={petizioneIcon}
        alt="Petizione"
        className="floating-button-icon"
      />
      <span className="floating-button-text">SALARIO MINIMO? ORA!</span>
    </button>
  );
};

export default FloatingButton;