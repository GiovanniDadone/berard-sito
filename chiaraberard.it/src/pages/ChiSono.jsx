import { Helmet } from "@vuer-ai/react-helmet-async";
import { useState } from "react";
import Banner from "../components/Banner";
import Modal from "../components/Modal";
import StorySection from "../components/StorySection";
import "./ChiSono.css";

const ChiSono = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [cvOpen, setCvOpen] = useState(false);

  const items = [
    {
      id: 1,
      image: "/iniziativa1.jpg",
      title: "SEMINARI ALL'UNIVERSITÀ DI TORINO",
      description:
        "Nel 2023 ho curato, con il collettivo MAI Ultimi UniTo, il ciclo di seminari \"Sicur* di non essere abilista?\" all'Università di Torino. Un percorso di formazione e testimonianza, riconosciuto come attività universitaria, nato per portare all'interno dell'università le voci di chi vive ogni giorno la disabilità, la neurodivergenza e la cronicità. In uno degli incontri ho parlato dell'impatto delle malattie croniche invisibili sulla vita quotidiana, ospitando il gruppo di mutuo-aiuto della Consultoria Fam: una realtà meravigliosa nata a Torino che costruisce solidarietà dal basso. Abbiamo discusso di discriminazioni sistemiche, di autonomia, di cura e di diritti, partendo dalle nostre esperienze. Per me fare politica è anche questo: costruire spazi di parola, ascolto e cambiamento, dentro e fuori le istituzioni.",
    },
    {
      id: 2,
      image: "/pride.jpeg",
      title: "AOSTA PRIDE",
      description:
        "Nel 2022 ho contribuito a organizzare il primo Aosta Pride, come cofondatrice e vicepresidente di Arcigay Valle d'Aosta - Queer VdA. È stato uno dei momenti più intensi della mia vita: vedere l'Arco d'Augusto circondato da migliaia di persone, colori, famiglie, corpi liberi e sorridenti, mi ha fatta scoppiare in lacrime. Per dieci anni ho lottato nei movimenti LGBTQ+, cercando di cambiare una terra che spesso mi aveva fatto sentire fuori posto. Quel giorno abbiamo dimostrato che un'altra Valle è possibile: visibile, accogliente, fiera di sé. Con il comitato organizzatore siamo stat* una squadra fortissima: abbiamo unito attivismo, determinazione e amore, e abbiamo creato qualcosa che resterà per sempre nella storia della nostra Regione. Per me fare politica vuol dire anche questo: aprire strade dove prima c'erano muri. E farlo insieme.",
    },
    {
      id: 3,
      image: "/cime.jpg",
      title: "CIME BIANCHE A MILANO",
      description:
        'Nel 2023 ho moderato e promosso l\'incontro pubblico "Cime Bianche: dalla Valle d\'Aosta a Milano, un problema non solo montano", portando fuori dalla Valle un tema che troppo spesso viene trattato come "locale", quando in realtà riguarda tutt*. Abbiamo parlato della devastazione ambientale che il progetto del collegamento intervallivo Cime Bianche comporterebbe, insieme al Comitato Insieme per Cime Bianche, a esperti ambientali e a organizzazioni giovanili di tutta Italia, riunite a Milano in uno spazio politico condiviso. È stato un momento importante, perché abbiamo dimostrato che ciò che accade sulle nostre montagne non è periferico: riguarda il futuro delle Alpi, il destino del territorio e le scelte collettive sul clima, sull\'ambiente, sul modello di sviluppo che vogliamo. Sono fiera di aver contribuito a portare questo tema fuori dalla Valle, per creare alleanze, generare consapevolezza e costruire insieme una nuova cultura della montagna: più sobria, più giusta, più sostenibile.',
    },
    {
      id: 4,
      image: "/arci.jpg",
      title: "IL MIO LAVORO PER ARCI SERVIZIO CIVILE TORINO",
      description:
        "Dal 2024 ho lavoro per Arci Servizio Civile Torino, gestendo uno sportello digitale gratuito. Ogni giorno aiuto persone di ogni età e provenienza a orientarsi nel mondo digitale: dallo SPID ai moduli online, dalle app per la sanità alle email dimenticate. Ma lo sportello è molto più di questo: è un luogo di ascolto, di sfogo, di umanità. Mi sono passate davanti storie di vita dura, di burocrazia assurda, di razzismo sistemico. Come quelle di lavoratori stranieri regolari, in Italia da anni, costretti a fare la fila di notte davanti alla questura per un permesso di soggiorno che scadrà un mese dopo essere arrivato. Mentre i super ricchi evadono miliardi con una stretta di mano, la politica umilia chi lavora e paga le tasse, chiedendogli l’impossibile.",
    },
  ];

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Chiara Berard",
    jobTitle: "Candidata Consiglio Regionale Valle d'Aosta",
    description:
      "Candidata alle elezioni regionali 2025 per Valle d'Aosta Aperta. Attivista per i diritti LGBTQ+, co-fondatrice Aosta Pride.",
    url: "https://chiaraberard.it",
    image: "https://chiaraberard.it/profile-image.png",
    sameAs: [
      "https://www.instagram.com/adolescenzafumogeno",
      "https://facebook.com/profile.php?id=61569104398518",
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Aosta",
      addressRegion: "Valle d'Aosta",
      addressCountry: "IT",
    },
    affiliation: {
      "@type": "Organization",
      name: "Valle d'Aosta Aperta",
    },
    knowsAbout: [
      "Politiche sociali",
      "Diritti LGBTQ+",
      "Ambiente",
      "Sanità pubblica",
      "Salario minimo",
    ],
  };

  const openModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedItem(null);
    setIsModalOpen(false);
  };

  return (
    <main className="main-container">
      <Helmet>
        <title>
          Chiara Berard - Candidata Valle d'Aosta Aperta | Elezioni Regionali
          2025
        </title>
        <meta
          name="description"
          content="Sognare, lottare, restare. Chiara Berard candidata Valle d'Aosta Aperta per elezioni regionali 2025."
        />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>

      {/* Banner */}
      <Banner />

      {/* Content Section */}
      <section className="content-section">
        <div className="content-inner">

          <StorySection />

          {/* Iniziative */}
          <section className="items-section">
            <h2>Le mie iniziative</h2>
            <div className="items-grid">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="item-card"
                  onClick={() => openModal(item)}
                >
                  <img src={item.image} alt={item.title} />
                  <h3>{item.title}</h3>
                  <p>{item.description.substring(0, 150)}...</p>
                </div>
              ))}
            </div>
          </section>

          {/* Modal Iniziative */}
          <Modal
            item={selectedItem}
            isOpen={isModalOpen}
            onClose={closeModal}
          />

          {/* Bottone CV */}
          <div className="cv-section">
            <button
              className="hashtag cv-button"
              onClick={() => setCvOpen(true)}
            >
              📄 Consulta il mio CV e scopri tutte le mie esperienze
            </button>
          </div>

          {/* Modal CV */}
          {cvOpen && (
            <div className="modal-overlay" onClick={() => setCvOpen(false)}>
              <div
                className="modal-content cv-modal"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="modal-close"
                  onClick={() => setCvOpen(false)}
                >
                  ✕
                </button>

                <div className="cv-modal-inner">
                  {/* Header CV */}
                  <div className="cv-header">
                    <img src="/profile-image.png" alt="Chiara Berard" />
                    <div>
                      <h2>Chiara Berard</h2>
                      <h4>Candidata Consiglio Regionale Valle d'Aosta</h4>
                      <p>
                        📍 Aosta | 🌐 chiaraberard.it | ✉️ info@chiaraberard.it
                      </p>
                    </div>
                  </div>

                  {/* Esperienze */}
                  <div className="cv-section-block">
                    <h3>Esperienze</h3>
                    <ul>
                      <li>
                        <strong>Co-fondatrice & Vicepresidente</strong> —
                        Arcigay Valle d'Aosta Queer VdA (2018 - oggi)
                      </li>
                      <li>
                        <strong>Organizzatrice</strong> — Aosta Pride (2022)
                      </li>
                      <li>
                        <strong>Relatrice</strong> — Ciclo Seminari "Sicur* di
                        non essere abilista?" UniTO (2023)
                      </li>
                      <li>
                        <strong>Moderatrice</strong> — Incontro "Cime Bianche:
                        dalla Valle d'Aosta a Milano" (2023)
                      </li>
                      <li>
                        <strong>Attivista</strong> — Movimenti LGBTQ+ Valle
                        d'Aosta (2014 - oggi)
                      </li>
                      <li>
                        <strong>Collaboratrice</strong> — Consultoria Fam
                        Torino, gruppo mutuo-aiuto (2023)
                      </li>
                    </ul>
                  </div>

                  {/* Formazione */}
                  <div className="cv-section-block">
                    <h3>Formazione</h3>
                    <ul>
                      <li>
                        <strong>Università di Torino</strong> — Laurea in
                        Scienze Politiche (2015–2018)
                      </li>
                      <li>
                        <strong>Master</strong> — Politiche Sociali e Diritti
                        Umani (2019–2021)
                      </li>
                      <li>
                        <strong>Formazione continua</strong> — Corsi su
                        discriminazioni sistemiche, diritti civili e inclusione
                        sociale
                      </li>
                    </ul>
                  </div>

                  {/* Competenze */}
                  <div className="cv-section-block">
                    <h3>Competenze</h3>
                    <div className="hashtags-inner">
                      <span className="hashtag">🌱 Ambiente</span>
                      <span className="hashtag">❤️ Diritti Civili</span>
                      <span className="hashtag">🏥 Sanità pubblica</span>
                      <span className="hashtag">💸 Salario minimo</span>
                      <span className="hashtag">🏳️‍🌈 Diritti LGBTQ+</span>
                      <span className="hashtag">♿ Accessibilità</span>
                      <span className="hashtag">🗣️ Public Speaking</span>
                      <span className="hashtag">🤝 Organizzazione Eventi</span>
                    </div>
                  </div>

                  {/* Riconoscimenti */}
                  <div className="cv-section-block">
                    <h3>Riconoscimenti e Impatto</h3>
                    <ul>
                      <li>
                        <strong>Primo Aosta Pride</strong> — Organizzazione del
                        primo Pride della storia della Valle d'Aosta (2022)
                      </li>
                      <li>
                        <strong>Seminari Universitari</strong> — Attività
                        riconosciuta dall'Università di Torino nel campo
                        dell'inclusione
                      </li>
                      <li>
                        <strong>Advocacy Ambientale</strong> — Contributo alla
                        sensibilizzazione sul progetto Cime Bianche
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default ChiSono;
