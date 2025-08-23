import React from "react";
import Marquee from "react-fast-marquee";
import "@fontsource/press-start-2p";

const FastNewsBanner = () => {
  return (
    <>
      <style>{`
        @font-face {
         font-family: 'PixelFont';
         src: local('Press Start 2P'), 
         url('https://fonts.gstatic.com/s/pressstart2p/v15/e3t4euO8T-267oIAQAu6jDQyK3nVivM.woff2') format('woff2'),
         local('Courier New');
         font-display: swap;
        }
        
        .fast-news-container {
          background: var(--primary-dark);
          border: 3px solid var(--primary-purple);
          padding: 6px 0;
          margin: 16px 0;
          box-shadow: 0 0 0 2px var(--primary-dark),
                      0 0 0 4px var(--primary-purple),
                      0 0 10px rgba(132, 71, 255, 0.4);
          position: relative;
          overflow: hidden;
          image-rendering: pixelated;
        }

        .fast-news-text {
          font-family: 'PixelFont', monospace;
          font-size: 14px;
          color: var(--primary-teal);
          margin: 0 16px;
          padding: 5px 10px;
          background: var(--primary-dark);
          position: relative;
          text-transform: uppercase;
          letter-spacing: 1px;
          line-height: 1.4;
          text-shadow: 2px 2px 0 var(--primary-purple);
        }

        /* Pixel art separators */
        .fast-news-text::before {
          content: '>>';
          color: var(--primary-red);
          margin-right: 8px;
          font-size: 12px;
        }

        .fast-news-text::after {
          content: '<<';
          color: var(--primary-red);
          margin-left: 8px;
          font-size: 12px;
        }

        /* Pixel grid overlay */
        .fast-news-container::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image: 
            linear-gradient(rgba(34, 191, 172, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34, 191, 172, 0.05) 1px, transparent 1px);
          background-size: 4px 4px;
          pointer-events: none;
          opacity: 0.4;
        }

        /* Animated scanline effect */
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
        
        .fast-news-container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: rgba(254, 11, 11, 0.3);
          animation: scanline 4s linear infinite;
          z-index: 2;
        }

        .marquee-container {
          padding: 3px 0;
        }
      `}</style>

      <div className="fast-news-container">
        <Marquee
          speed={40}
          pauseOnHover={false}
          gradient={false}
          className="marquee-container"
        >
          <span className="fast-news-text">
            Sognare. Lottare. Restare.
          </span>
          <span>
            .........................
          </span>
          <span className="fast-news-text">
            Per una Valle d’Aosta che non lascia indietro nessunə.
          </span>
        </Marquee>
      </div>
    </>
  );
};

export default FastNewsBanner;
