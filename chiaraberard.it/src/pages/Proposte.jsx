import React, { useEffect, useRef, useState, useCallback } from "react";
import "./Proposte.css";

function useDragScroll() {
  const ref = useRef(null);

  // Chrome-specific fix per forzare layout orizzontale
  useEffect(() => {
    const isChrome =
      /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);

    if (isChrome) {
      setTimeout(() => {
        const scrollContainers = document.querySelectorAll(
          ".carousel-container.scroll-x"
        );
        scrollContainers.forEach((container) => {
          // Forza le proprietà CSS per Chrome
          container.style.setProperty("display", "flex", "important");
          container.style.setProperty("flex-direction", "row", "important");
          container.style.setProperty("flex-wrap", "nowrap", "important");
          container.style.setProperty("overflow-x", "auto", "important");
          container.style.setProperty("overflow-y", "hidden", "important");

          // Forza le proprietà per gli item
          const items = container.querySelectorAll(".carousel-item");
          items.forEach((item) => {
            item.style.setProperty("flex", "0 0 350px", "important");
            item.style.setProperty("width", "350px", "important");
            item.style.setProperty("min-width", "350px", "important");
            item.style.setProperty("max-width", "350px", "important");
            item.style.setProperty("display", "flex", "important");
            item.style.setProperty("flex-direction", "column", "important");
          });
        });
      }, 100);
    }
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let isDown = false;
    let hasScrolled = false;
    let startX = 0;
    let startY = 0;
    let startScrollLeft = 0;
    let startTime = 0;

    const SCROLL_THRESHOLD = 10;
    const TIME_THRESHOLD = 200;

    const onTouchStart = (e) => {
      isDown = true;
      hasScrolled = false;
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
      startScrollLeft = el.scrollLeft;
      startTime = Date.now();
      el.classList.add("dragging");
    };

    const onTouchMove = (e) => {
      if (!isDown) return;
      const x = e.touches[0].clientX;
      const y = e.touches[0].clientY;
      const deltaX = Math.abs(x - startX);
      const deltaY = Math.abs(y - startY);

      if (deltaX > SCROLL_THRESHOLD && deltaX > deltaY) {
        hasScrolled = true;
        e.preventDefault();
        const walk = startX - x;
        // Chrome optimization: use requestAnimationFrame for smoother scrolling
        requestAnimationFrame(() => {
          el.scrollLeft = startScrollLeft + walk;
        });
        el.setAttribute("data-scrolling", "true");
      }
    };

    const onTouchEnd = (e) => {
      const endTime = Date.now();
      const duration = endTime - startTime;
      isDown = false;
      el.classList.remove("dragging");

      if (hasScrolled || duration > TIME_THRESHOLD) {
        e.preventDefault();
        e.stopPropagation();
        setTimeout(() => {
          el.removeAttribute("data-scrolling");
          hasScrolled = false;
        }, 150);
      } else {
        el.removeAttribute("data-scrolling");
      }
    };

    const isTouchDevice =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;

    const onMouseDown = (e) => {
      if (e.button !== 0) return;
      isDown = true;
      hasScrolled = false;
      startX = e.clientX;
      startScrollLeft = el.scrollLeft;
      startTime = Date.now();
      el.classList.add("dragging");
      e.preventDefault();
    };

    const onMouseMove = (e) => {
      if (!isDown) return;
      const x = e.clientX;
      const deltaX = Math.abs(x - startX);
      if (deltaX > SCROLL_THRESHOLD) {
        hasScrolled = true;
        const walk = startX - x;
        // Chrome optimization: use requestAnimationFrame
        requestAnimationFrame(() => {
          el.scrollLeft = startScrollLeft + walk;
        });
        el.setAttribute("data-scrolling", "true");
      }
    };

    const onMouseUp = (e) => {
      const endTime = Date.now();
      const duration = endTime - startTime;
      isDown = false;
      el.classList.remove("dragging");
      if (hasScrolled || duration > TIME_THRESHOLD) {
        e.preventDefault();
        e.stopPropagation();
        setTimeout(() => {
          el.removeAttribute("data-scrolling");
          hasScrolled = false;
        }, 100);
      } else {
        el.removeAttribute("data-scrolling");
      }
    };

    const onMouseLeave = () => {
      isDown = false;
      el.classList.remove("dragging");
      el.removeAttribute("data-scrolling");
    };

    el.addEventListener("touchstart", onTouchStart, { passive: false });
    el.addEventListener("touchmove", onTouchMove, { passive: false });
    el.addEventListener("touchend", onTouchEnd, { passive: false });

    if (!isTouchDevice) {
      el.addEventListener("mousedown", onMouseDown, { passive: false });
      el.addEventListener("mousemove", onMouseMove, { passive: false });
      el.addEventListener("mouseup", onMouseUp, { passive: false });
      el.addEventListener("mouseleave", onMouseLeave, { passive: true });
    }

    const preventImgDrag = (e) => e.preventDefault();
    const preventSelect = (e) => {
      if (isDown && hasScrolled) e.preventDefault();
    };

    el.querySelectorAll("img").forEach((img) => {
      img.addEventListener("dragstart", preventImgDrag);
    });
    el.addEventListener("selectstart", preventSelect);

    return () => {
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove", onTouchMove);
      el.removeEventListener("touchend", onTouchEnd);

      if (!isTouchDevice) {
        el.removeEventListener("mousedown", onMouseDown);
        el.removeEventListener("mousemove", onMouseMove);
        el.removeEventListener("mouseup", onMouseUp);
        el.removeEventListener("mouseleave", onMouseLeave);
      }

      el.querySelectorAll("img").forEach((img) => {
        img.removeEventListener("dragstart", preventImgDrag);
      });
      el.removeEventListener("selectstart", preventSelect);
    };
  }, []);

  return ref;
}

function useVideoLoop() {
  const handleVideoEnded = useCallback((e) => {
    e.target.currentTime = 0;
    e.target.play().catch(() => {
      // Silence autoplay errors in Chrome
    });
  }, []);

  return { handleVideoEnded };
}

const Proposte = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const scrollPositions = useRef({});
  const { handleVideoEnded } = useVideoLoop();
  const videoRefs = useRef(new Map());

  const saveScrollPosition = useCallback(() => {
    const containers = document.querySelectorAll(
      ".carousel-container.scroll-x"
    );
    containers.forEach((container, index) => {
      scrollPositions.current[index] = container.scrollLeft;
    });
  }, []);

  const restoreScrollPosition = useCallback(() => {
    setTimeout(() => {
      const containers = document.querySelectorAll(
        ".carousel-container.scroll-x"
      );
      containers.forEach((container, index) => {
        if (scrollPositions.current[index] !== undefined) {
          container.scrollLeft = scrollPositions.current[index];
        }
      });
    }, 50);
  }, []);

  // Optimized video handling for Chrome
  const handleVideoLoad = useCallback((video, itemId) => {
    if (video) {
      videoRefs.current.set(itemId, video);
      // Chrome optimization: preload video metadata
      video.preload = "metadata";
    }
  }, []);

  useEffect(() => {
    const handleMouseEnter = (e) => {
      const video = e.currentTarget.querySelector(".animated-gif");
      const staticImg = e.currentTarget.querySelector(".static-gif");
      const playOverlay = e.currentTarget.querySelector(".play-overlay");

      if (video && staticImg) {
        staticImg.style.opacity = "0";
        video.style.display = "block";
        video.style.opacity = "1";
        video.currentTime = 0;

        // Chrome optimization: better promise handling
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            console.log("Video autoplay failed:", error);
          });
        }

        if (playOverlay) playOverlay.style.opacity = "0";
      }
    };

    const handleMouseLeave = (e) => {
      const video = e.currentTarget.querySelector(".animated-gif");
      const staticImg = e.currentTarget.querySelector(".static-gif");
      const playOverlay = e.currentTarget.querySelector(".play-overlay");

      if (video && staticImg) {
        video.style.opacity = "0";
        video.style.display = "none";
        video.pause();
        video.currentTime = 0;
        staticImg.style.opacity = "1";
        if (playOverlay) playOverlay.style.opacity = "1";
      }
    };

    const items = document.querySelectorAll(".carousel-item");
    items.forEach((item) => {
      item.addEventListener("mouseenter", handleMouseEnter);
      item.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      items.forEach((item) => {
        item.removeEventListener("mouseenter", handleMouseEnter);
        item.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, [selectedItem]);

  const carouselData1 = [
    {
      id: 1,
      staticMedia: "/gif/8-stopped.jpg",
      animatedMedia: "/gif/8.mp4",
      title: "Salario Minimo",
      description:
        "Istruzione accessibile e di qualità, rafforzando orientamento e diritto allo studio. Investimenti in strutture moderne, formazione continua dei docenti e programmi innovativi per preparare i giovani valdostani alle sfide del futuro.",
    },
    {
      id: 2,
      staticMedia: "/gif/9-stopped.jpg",
      animatedMedia: "/gif/9.mp4",
      title: "Sanità",
      description:
        "Rete dei trasporti più efficiente e sostenibile per collegare meglio territori e persone. Potenziamento del trasporto pubblico, infrastrutture per la mobilità dolce e soluzioni innovative per i collegamenti montani.",
    },
    {
      id: 3,
      staticMedia: "/gif/5-stopped.jpg",
      animatedMedia: "/gif/5.mp4",
      title: "Ambiente",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      id: 4,
      staticMedia: "/gif/6-stopped.jpg",
      animatedMedia: "/gif/6.mp4",
      title: "Diritti",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
    },
    {
      id: 5,
      staticMedia: "/gif/10-stopped.jpg",
      animatedMedia: "/gif/10.mp4",
      title: "Tornare",
      description:
        "Investimenti su rinnovabili ed efficienza energetica per ridurre costi e impatto ambientale. Comunità energetiche, solare sui tetti pubblici e sostegno alle famiglie per la transizione verde.",
    },
    {
      id: 6,
      staticMedia: "/gif/7-stopped.jpg",
      animatedMedia: "/gif/7.mp4",
      title: "Palestina",
      description:
        "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi.",
    },
  ];

  const carouselData2 = [
    {
      id: 1,
      staticMedia: "/gif/1-stopped.jpg",
      animatedMedia: "/gif/1.mp4",
      title: "Proposta Sociale",
      description:
        "Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis.",
    },
    {
      id: 2,
      staticMedia: "/gif/2-stopped.jpg",
      animatedMedia: "/gif/2.mp4",
      title: "Proposta Cultura",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sviluppo di spazi culturali accessibili, sostegno agli artisti locali e valorizzazione del patrimonio storico della città.",
    },
    {
      id: 3,
      staticMedia: "/gif/3-stopped.jpg",
      animatedMedia: "/gif/3.mp4",
      title: "Proposta Turismo",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Promozione di un turismo sostenibile che valorizzi le eccellenze locali e crei opportunità di lavoro qualificate per i giovani.",
    },
    {
      id: 4,
      staticMedia: "/gif/4-stopped.jpg",
      animatedMedia: "/gif/4.mp4",
      title: "Proposta Sport",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium. Promozione di un turismo sostenibile che valorizzi le eccellenze locali e crei opportunità di lavoro qualificate per i giovani.",
    },
  ];

  const truncateText = (text, lines = 3) => {
    const words = text.split(" ");
    const approximateWordsPerLine = 12;
    const maxWords = lines * approximateWordsPerLine;
    if (words.length <= maxWords) return text;
    return words.slice(0, maxWords).join(" ") + "...";
  };

  const handleItemClick = useCallback(
    (item, e) => {
      const container = e.currentTarget.closest(".carousel-container");
      if (
        container &&
        (container.classList.contains("dragging") ||
          container.hasAttribute("data-scrolling"))
      ) {
        e.preventDefault();
        e.stopPropagation();
        return;
      }
      saveScrollPosition();
      setSelectedItem(item);
    },
    [saveScrollPosition]
  );

  const closeModal = useCallback(() => {
    setSelectedItem(null);
    restoreScrollPosition();
  }, [restoreScrollPosition]);

  const CarouselSection = ({ data, title, scrollX = false }) => {
    const scrollRef = useDragScroll();

    return (
      <section className="carousel-section">
        <h3 className="section-advocacy">{title}</h3>
        <div
          ref={scrollRef}
          className={`carousel-container ${scrollX ? "scroll-x" : ""}`}
        >
          {data.map((item) => (
            <div
              key={item.id}
              className="carousel-item"
              onClick={(e) => handleItemClick(item, e)}
            >
              <div className="gif-container">
                <img
                  src={item.staticMedia}
                  alt={item.title}
                  className="gif-image static-gif"
                  draggable="false"
                  loading="lazy"
                />
                <video
                  ref={(video) => handleVideoLoad(video, item.id)}
                  src={item.animatedMedia}
                  className="gif-image animated-gif"
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  onEnded={handleVideoEnded}
                  onError={(e) => console.log("Video error:", e)}
                />
                <div className="play-overlay">
                  <div className="play-button">▶</div>
                </div>
              </div>
              <div className="item-content">
                <h3>{item.title}</h3>
                <p className="truncated-text">
                  {truncateText(item.description)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };

  return (
    <div className="proposte-container">
      <div className="proposte-content">
        <section className="header-section">
          <h1>LE MIE PROPOSTE</h1>
          <h2 className="subtitle">PER UNA VALLE D'AOSTA DIVERSA</h2>
        </section>

        <section className="static-section">
          <div className="static-content">
            <div className="static-image">
              <img
                src="/profile-image.png"
                alt="Valle d'Aosta"
                loading="lazy"
              />
            </div>
            <div className="static-text">
              <h2 className="static-title">Il mio impegno per la Valle</h2>
              <p>
                Mi impegno perché sogno una Valle d'Aosta in cui nessuno venga
                lasciato indietro, dove le lotte per il lavoro, la salute,
                l'ambiente e i diritti siano parte di un'unica visione di
                futuro.
              </p>
              <p>
                Faccio politica perché credo che nessuno debba sentirsi
                invisibile. Perché la Valle d'Aosta ha bisogno di chi non ha
                paura di dire le cose come stanno.
              </p>
              <div className="quote-highlight">
                "Sono una giovane valdostana di sinistra e voglio portare in
                consiglio la voce di tutte le persone che non si sono mai
                sentite rappresentate."
              </div>
            </div>
          </div>
        </section>

        <CarouselSection
          data={carouselData1}
          title="PER LE REGIONALI"
          scrollX={true}
        />
        <CarouselSection
          data={carouselData2}
          title="PER LE COMUNALI DI AOSTA"
          scrollX={true}
        />

        {selectedItem && (
          <div className="modal-overlay" onClick={closeModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button
                className="modal-close"
                onClick={closeModal}
                aria-label="Chiudi"
              >
                ✕
              </button>
              <div className="modal-body">
                <div className="modal-gif">
                  <video
                    src={selectedItem.animatedMedia}
                    className="modal-gif-image"
                    autoPlay
                    muted
                    loop
                    playsInline
                    onEnded={handleVideoEnded}
                    onError={(e) => console.log("Modal video error:", e)}
                  />
                </div>
                <div className="modal-text">
                  <h3>{selectedItem.title}</h3>
                  <p>{selectedItem.description}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Proposte;
