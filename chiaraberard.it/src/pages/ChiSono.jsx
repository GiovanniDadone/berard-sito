import { useState } from "react";
import Banner from "../components/Banner";
import Modal from "../components/Modal";
import StorySection from "../components/StorySection";
import "./ChiSono.css";
import Quote from "../components/Quote";

const ChiSono = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const items = [
    {
      id: 1,
      image: "/iniziativa1.jpg",
      title: "SEMINARI ALL’UNIVERSITÀ DI TORINO",
      description:
        "Nel 2023 ho curato, con il collettivo MAI Ultimi UniTo, il ciclo di seminari “Sicurə di non essere abilista?” all’Università di Torino. Un percorso di formazione e testimonianza, riconosciuto come attività universitaria, nato per portare all’interno dell’università le voci di chi vive ogni giorno la disabilità, la neurodivergenza e la cronicità. In uno degli incontri ho parlato dell’impatto delle malattie croniche invisibili sulla vita quotidiana, ospitando il gruppo di mutuo-aiuto della Consultoria Fam: una realtà meravigliosa nata a Torino che costruisce solidarietà dal basso. Abbiamo discusso di discriminazioni sistemiche, di autonomia, di cura e di diritti, partendo dalle nostre esperienze. Per me fare politica è anche questo: costruire spazi di parola, ascolto e cambiamento, dentro e fuori le istituzioni.",
    },
    {
      id: 2,
      image: "/passione.jpeg",
      title: "AOSTA PRIDE",
      description:
        "Nel 2022 ho contribuito a organizzare il primo Aosta Pride, come cofondatrice e vicepresidente di Arcigay Valle d’Aosta - Queer VdA. È stato uno dei momenti più intensi della mia vita: vedere l’Arco d’Augusto circondato da migliaia di persone, colori, famiglie, corpi liberi e sorridenti, mi ha fatta scoppiare in lacrime. Per dieci anni ho lottato nei movimenti LGBTQ+, cercando di cambiare una terra che spesso mi aveva fatto sentire fuori posto. Quel giorno abbiamo dimostrato che un’altra Valle è possibile: visibile, accogliente, fiera di sé. Con il comitato organizzatore siamo statə una squadra fortissima: abbiamo unito attivismo, determinazione e amore, e abbiamo creato qualcosa che resterà per sempre nella storia della nostra Regione. Per me fare politica vuol dire anche questo: aprire strade dove prima c’erano muri. E farlo insieme. ",
    },
    {
      id: 3,
      image: "/pride.jpeg",
      title: "CIME BIANCHE A MILANO",
      description:
        "Nel 2023 ho moderato e promosso l’incontro pubblico “Cime Bianche: dalla Valle d’Aosta a Milano, un problema non solo montano”, portando fuori dalla Valle un tema che troppo spesso viene trattato come “locale”, quando in realtà riguarda tuttə. Abbiamo parlato della devastazione ambientale che il progetto del collegamento intervallivo Cime Bianche comporterebbe, insieme al Comitato Insieme per Cime Bianche, a esperti ambientali e a organizzazioni giovanili di tutta Italia, riunite a Milano in uno spazio politico condiviso. È stato un momento importante, perché abbiamo dimostrato che ciò che accade sulle nostre montagne non è periferico: riguarda il futuro delle Alpi, il destino del territorio e le scelte collettive sul clima, sull’ambiente, sul modello di sviluppo che vogliamo. Sono fiera di aver contribuito a portare questo tema fuori dalla Valle, per creare alleanze, generare consapevolezza e costruire insieme una nuova cultura della montagna: più sobria, più giusta, più sostenibile.",
    },
    {
      id: 4,
      image: "/profile-image.png",
      title: "Iniziativa 4",
      description:
        "Promozione dei diritti civili e sociali per tutti i cittadini valdostani, con particolare attenzione alle minoranze e alle categorie più vulnerabili.",
    },
  ];
  {
    /*da implementare testo proposta 4, immagini proposte 2,3,4*/
  }
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
      {/* Banner Section */}
      <Banner />

      {/* Content Section */}
      <section className="content-section">
        <div className="content-inner">
          {/* Story Section */}
          <StorySection />

          {/* Sezione con le card cliccabili */}
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
                  <p>{item.description.substring(0, 100)}...</p>
                </div>
              ))}
            </div>
          </section>

          {/* Modal con le props corrette */}
          <Modal
            item={selectedItem}
            isOpen={isModalOpen}
            onClose={closeModal}
          />
        </div>
      </section>
    </main>
  );
};

export default ChiSono;
