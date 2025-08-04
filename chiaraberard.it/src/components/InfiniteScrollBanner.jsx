import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './InfiniteMarquee.css';

const InfiniteMarquee = ({ text }) => {
  const firstTextRef = useRef(null);
  const secondTextRef = useRef(null);

  useEffect(() => {
    // Duplica il contenuto in due elementi separati
    const firstText = firstTextRef.current;
    const secondText = secondTextRef.current;
    
    firstText.innerHTML = `${text} • `;
    secondText.innerHTML = `${text} • `;
    
    const textWidth = firstText.scrollWidth;
    const duration = textWidth / 50; // 50px al secondo

    // Animazione PERFETTA senza pause
    gsap.to([firstText, secondText], {
      x: `-=${textWidth}`,
      duration: duration,
      ease: 'none',
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize(gsap.utils.wrap(-textWidth, 0))
      }
    });

    return () => gsap.killTweensOf([firstText, secondText]);
  }, [text]);

  return (
    <div className="marquee-container">
      <div className="marquee-track">
        <span ref={firstTextRef} className="marquee-text"></span>
        <span ref={secondTextRef} className="marquee-text"></span>
      </div>
    </div>
  );
};

export default InfiniteMarquee;