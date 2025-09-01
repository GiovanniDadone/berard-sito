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
        "In Valle d’Aosta vivere costa più che altrove, ma migliaia di persone che lavorano nei settori del turismo, della ristorazione, del commercio e dei servizi ricevono stipendi troppo bassi per garantire una vita dignitosa. Per fermare quest’ingiustizia e la fuga delle nuove generazioni costrette a emigrare, la proposta prevede l’introduzione di un salario minimo di 12 euro l’ora, superiore alla soglia nazionale di 9 euro, così da adeguarlo al reale costo della vita valdostana. La misura si articola su due livelli: negli appalti pubblici della Regione dovrà essere garantito il rispetto dei contratti collettivi e di una soglia minima inderogabile di 12 euro, per combattere i contratti “pirata” e lo sfruttamento con soldi pubblici. Sul versante privato, invece, verrà istituito un Registro del Salario Minimo Valdostano: le imprese che si impegnano volontariamente a garantire almeno 12 euro l’ora potranno iscriversi, ottenendo trasparenza verso i lavoratori e priorità nei bandi e nei contributi regionali. In questo modo chi paga “salari giusti” sarà sostenuto e riconosciuto, contribuendo a costruire una Valle più equa e solidale",
    },
    {
      id: 2,
      staticMedia: "/gif/9-stopped.jpg",
      animatedMedia: "/gif/9.mp4",
      title: "Sanità",
      description:
        "La salute è un diritto e deve essere garantita a tuttɘ. Non è più possibile accettare che venga trattata come un privilegio per chi può permetterselo. Per questo lotterò per maggiori investimenti nella sanità pubblica e un piano straordinario di assunzione di personale medico, infermieristico e tecnico, oggi insufficiente, anche a causa del blocco degli aumenti salariali e contrattuali. È urgente rafforzare i servizi territoriali e combattere con decisione il fenomeno delle liste d’attesa, che costringe troppe persone a rivolgersi al privato, alla sanità fuori regione o a rinunciare alle cure.Accanto alla cura del corpo, serve prendersi cura anche della mente. Proponiamo l’attivazione di una linea telefonica di supporto psicologico e la presenza stabile di psicologhe e psicologi nei presidi territoriali, accessibili gratuitamente e con programmi specifici di prevenzione al suicidio, soprattutto tra le persone più giovani. La salute mentale non può essere lasciata ai margini: deve diventare una priorità delle politiche sanitarie regionali.",
    },
    {
      id: 3,
      staticMedia: "/gif/5-stopped.jpg",
      animatedMedia: "/gif/5.mp4",
      title: "Ambiente",
      description:
        "La Valle d’Aosta è tra i territori alpini più vulnerabili alla crisi climatica: scioglimento dei ghiacciai, eventi estremi, rischio idrogeologico crescente. Per questo proponiamo una legge-quadro regionale per il contrasto e l’adattamento al Cambiamento Climatico, con l’obiettivo di raggiungere la neutralità climatica al 2040. Una norma che unisca mitigazione (riduzione delle emissioni, sviluppo di comunità energetiche e dell’eolico, efficientamento energetico degli edifici) e adattamento (gestione delle acque come bene comune, vasche di raccolta per contrastare le siccità, difesa delle foreste e del territorio dai rischi idrogeologici). La legge istituirà un Piano Clima e Biodiversità, aggiornato ogni 5 anni, coordinato da una cabina di regia regionale coordinata con sindaci, ARPA ed esperti, per garantire trasparenza, scientificità e partecipazione. Gli ambiti prioritari saranno: il rilancio del trasporto pubblico locale (a partire dall’istituzione di linee di bus serali e la riapertura della ferrovia tra Aosta e Pré-Saint-Didier), il rafforzamento della produzione di energia rinnovabile, incentivando l’istituzione di Comunità Energetiche Regionali, la tutela delle aree protette (come Natura 2000, tra cui il Vallone delle Cime Bianche). Fondamentale sarà il coinvolgimento dei Comuni e delle comunità locali: ogni comune (supportato dalla regione) dovrà redigere un proprio Piano Clima, semplice e proporzionato alla sua dimensione, per recepire e applicare le linee guida regionali. Ispirandoci alla Loi Climat francese e alla legge sul clima dell’Emilia-Romagna, adattiamo le migliori pratiche al contesto valdostano, costruendo un modello di governance climatica che non lasci indietro nessuno e renda la Valle d’Aosta un territorio pioniere della giustizia climatica alpina. Un aspetto centrale della nostra proposta è l’introduzione del principio delle perdite e dei danni (Loss and Damage), già riconosciuto a livello internazionale. Questo principio afferma che chi subisce gli effetti più gravi della crisi climatica deve essere sostenuto e risarcito, anche quando le conseguenze non sono più reversibili. In Valle d’Aosta significa riconoscere e affrontare i costi sociali, economici e ambientali derivanti da frane, alluvioni, ondate di calore, perdita di ghiacciai e biodiversità. Vogliamo che la Regione istituisca un fondo dedicato alle perdite e ai danni climatici, alimentato anche da risorse europee, per sostenere economicamente comunità, imprese agricole, territori montani e famiglie colpite dagli eventi estremi, trasformando il principio di giustizia climatica in una politica concreta e solidale.",
    },
    {
      id: 4,
      staticMedia: "/gif/6-stopped.jpg",
      animatedMedia: "/gif/6.mp4",
      title: "Diritti",
      description:
        "Credo che una Valle d’Aosta più giusta passi anche da una vera educazione sessuo-affettiva nelle scuole. Non si tratta solo di insegnare nozioni biologiche, ma di trasmettere il valore del consenso, del rispetto reciproco e del sapersi rapportare con le altre persone. Un’educazione che contrasti l’ignoranza in tema sessuale, che educhi alla prevenzione e della protezione sessuale - la cui assenza aiuta la diffusione di infezioni sessualmente trasmissibili, su cui ci sono ancora molti stigma - e che dia a tutte le persone gli strumenti per vivere relazioni in modo sano, consapevole e libero da stereotipi. Mi batterò, inoltre, affinché la Regione Valle d’Aosta riconosca e sostenga la comunità LGBTQIA+ concedendo il Patrocinio ufficiale all’Aosta Pride. Sono tante le persone queer valdostane che decidono di andarsene perché non sentono di poter costruirsi un futuro qui. Da piccola ero quasi certa di dover scappare ed è incredibile che anche grazie al mio attivismo che sia nata prima Arcigay Queer VDA, di cui sono stata cofondatrice e vicepresidente, e poi l’Aosta Pride. Il sostegno regionale ad un momento come il pride non è solo un gesto simbolico, ma un atto concreto di vicinanza istituzionale a chi ogni giorno lotta contro discriminazioni e marginalizzazioni. Per noi, i diritti non sono mai “di qualcuno in più”, ma sempre un rafforzamento della democrazia e della libertà di tuttɘ.",
    },
    {
      id: 5,
      staticMedia: "/gif/10-stopped.jpg",
      animatedMedia: "/gif/10.mp4",
      title: "Tornare",  //WORK IN PROGRESS
      description:
        "Investimenti su rinnovabili ed efficienza energetica per ridurre costi e impatto ambientale. Comunità energetiche, solare sui tetti pubblici e sostegno alle famiglie per la transizione verde.",
    },
    {
      id: 6,
      staticMedia: "/gif/7-stopped.jpg",
      animatedMedia: "/gif/7.mp4",
      title: "Palestina",
      description:
        "La Valle d’Aosta deve schierarsi senza ambiguità dalla parte della pace e dei diritti umani. Per questo chiederò il riconoscimento ufficiale dello Stato di Palestina e la sospensione di tutti gli accordi regionali con Israele e le società israeliane, complici dell’occupazione. Non possiamo restare indifferenti di fronte al genocidio in corso a Gaza e alle condizioni di colonialismo e apartheid in Cisgiordania: la nostra Regione deve dirlo con chiarezza e agire di conseguenza. Combatterò, inoltre, affinché la Valle d’Aosta invii aiuti umanitari alla popolazione di Gaza e promuova l’invio di una delegazione ufficiale in Palestina, per testimoniare la vicinanza concreta della nostra comunità. Con questo impegno vorrei che la Valle d’Aosta diventi un punto di riferimento per chi, in Italia e in Europa, lotta per la libertà e l’autodeterminazione del popolo palestinese.",
    },
  ];

  const carouselData2 = [
    {
      id: 1,
      staticMedia: "/gif/1-stopped.jpg",
      animatedMedia: "/gif/1.mp4",
      title: "Sociale",
      description: "Il diritto alla casa è una questione sociale cruciale anche ad Aosta. Da una ricerca di Regione Valle d’Aosta emerge che quasi il 27% dei genitori soli con figli vive in affitto, spesso con canoni che assorbono fino al 30% del reddito delle persone sole, mentre oltre un quarto delle famiglie ha difficoltà a sostenere le spese abitative. Questa fragilità colpisce in particolare le persone più giovani, i lavoratori precari e le famiglie straniere, che abitano mediamente in case più piccole e con peggiori condizioni abitative. A fronte di questi dati, serve un impegno concreto per rendere Aosta una città più giusta e inclusiva. Secondo i dati Openpolis, i comuni italiani spendono mediamente appena 1,28 euro pro capite per il diritto all’abitare, con forti disuguaglianze territoriali. Anche Aosta deve fare di più. La città deve adottare un Piano comunale per l’abitare, con il censimento e il recupero delle case sfitte, l’attivazione di un fondo per l’emergenza abitativa, accordi di canone concordato e progetti di housing sociale e co-housing. L’obiettivo è duplice: garantire alloggi dignitosi e accessibili a chi oggi è più in difficoltà, e ridare vita ai quartieri attraverso politiche abitative che siano anche occasioni di rigenerazione urbana e coesione sociale.",
    },
    {
      id: 2,
      staticMedia: "/gif/2-stopped.jpg",
      animatedMedia: "/gif/2.mp4",
      title: "Cultura",
      description:
        "Ad Aosta quest’anno le temperature hanno superato i 40 gradi: un dato eccezionale che, con il cambiamento climatico, diventerà sempre più frequente. Per questo vorrei proporre un Piano comunale di adattamento urbano contro le isole di calore, che utilizzi le migliori pratiche internazionali. Le misure chiave riguardano la riforestazione urbana (piantumazioni mirate lungo viali e piazze, selezionando specie autoctone ad alta capacità di ombreggiamento e resistenza alla siccità), l’uso di tetti e pareti verdi negli edifici pubblici, l’introduzione di pavimentazioni riflettenti e permeabili per ridurre l’accumulo termico, e la creazione di corridoi blu-verdi che integrino verde urbano e gestione delle acque piovane. Questi interventi, già applicati in diverse città europee, permettono di abbassare le temperature fino a 2-3°C nelle aree urbane più dense, migliorando al tempo stesso la qualità dell’aria e la resilienza della città agli eventi estremi.",
    },
    {
      id: 3,
      staticMedia: "/gif/3-stopped.jpg",
      animatedMedia: "/gif/3.mp4",
      title: "Accessibiltà",
      description:
        "Una città accessibile per tuttə, indipendentemente dalle proprie disabilità. Da persona con una malattia cronica, che a volte mi costringe a una mobilità ridotta, e attivista per la disabilità e le neurodivergenze faccio parecchio caso all'accessibilità cittadina. Mi occupo attivamente di questo tema dal 2022 dentro e fuori l’Università di Torino. Ci tengo che sia effettuata una mappatura di tutta la città, con un comitato di cittadinə interessatə al tema, e venga messo in atto il PEBA (Piano di Eliminazione delle Barriere architettoniche).",
    },
    {
      id: 4,
      staticMedia: "/gif/4-stopped.jpg",
      animatedMedia: "/gif/4.mp4",
      title: "Proposta Gaza",
      description:
        "In un momento segnato da guerra, ingiustizia e costanti violazioni dei diritti umani, nonché del diritto internazionale, Aosta può e deve farsi portavoce di un messaggio di pace, cooperazione e diritti, costruendo un ponte tra comunità diverse ma unite dall’idea che nessuna distanza sia troppo grande quando a unirci è l’umanità. Per questo porterò in consiglio comunale una proposta di Gemellaggio tra Aosta e la Città di Gaza come segnale concreto di solidarietà e vicinanza al popolo palestinese, trasformando un atto simbolico in un impegno politico e umano di grande valore. Facciamo di questo gemellaggio un segno tangibile di speranza e responsabilità internazionale.",
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
