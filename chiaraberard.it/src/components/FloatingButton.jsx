import React, { useState, useEffect } from "react";
import { motion as Motion } from "framer-motion";
import "./FloatingButton.css";
import petizioneIcon from "/petizione.png"; // verifica il path

const FloatingButton = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  // aggiorna stato quando cambia la dimensione finestra
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClick = () => {
    window.open("https://example.com/placeholder-link", "_blank");
  };

  return (
    <Motion.button
      className="floating-button"
      onClick={handleClick}
      aria-label="Supporta la campagna"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      animate={{
        width: isHovered ? (isMobile ? 160 : 220) : isMobile ? 65 : 80,
        borderRadius: isHovered ? "20px" : "50%",
      }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
    >
      <Motion.img
        src={petizioneIcon}
        alt="Petizione"
        className="floating-button-icon"
        animate={
          isHovered
            ? {
                scale: [1, 1.4, 1], // battito
                rotate: [0, -10, 10, -10, 10, -6, 6, 0], // shake
              }
            : { scale: 1, rotate: 0 }
        }
        transition={{
          delay: 0.4,
          duration: 1,
          ease: "easeInOut",
        }}
      />
      {isHovered && (
        <span className="floating-button-text">Firma la petizione!</span>
      )}
    </Motion.button>
  );
};

export default FloatingButton;
