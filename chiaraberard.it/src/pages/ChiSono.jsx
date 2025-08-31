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
      image: "/conferenza.jpg",
      title: "Iniziativa 1",
      description:
        "Istruzione accessibile e di qualità, rafforzando orientamento e diritto allo studio. Investimenti in strutture moderne, formazione continua dei docenti e programmi innovativi per preparare i giovani valdostani alle sfide del futuro.",
    },
    {
      id: 2,
      image: "/passione.jpeg",
      title: "Iniziativa 2",
      description:
        "Rete dei trasporti più efficiente e sostenibile per collegare meglio territori e persone. Potenziamento del trasporto pubblico, infrastrutture per la mobilità dolce e soluzioni innovative per i collegamenti montani.",
    },
    {
      id: 3,
      image: "/pride.jpeg",
      title: "Iniziativa 3",
      description:
        "Politiche ambientali sostenibili per la Valle d'Aosta con investimenti in energie rinnovabili e protezione del territorio montano.",
    },
    {
      id: 4,
      image: "/profile-image.png",
      title: "Iniziativa 4",
      description:
        "Promozione dei diritti civili e sociali per tutti i cittadini valdostani, con particolare attenzione alle minoranze e alle categorie più vulnerabili.",
    },
  ];

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

          <Quote />
        </div>
      </section>
    </main>
  );
};

export default ChiSono;
