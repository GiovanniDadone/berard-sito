import React from "react";
import "./StorySection.css";

const StorySection = () => {
  return (
    <div className="story-container">
      <div className="story-content">
        <section>
          <h1>CHIARA BERARD</h1>
          <h2 className="story-header-h2">VALLE D'AOSTA APERTA</h2>{" "}
        </section>

        <section className="story-main">
          <div className="story-column">
            <h3>Chi sono</h3>
            <p className="story-text">
              Sono Chiara Berard, ho 26 anni e mi candido alle elezioni
              regionali del 28 settembre. Lo faccio perché da oltre 10 anni
              lotto per una Valle più giusta. Attivista fin da quando ho 13
              anni, ho fondato collettivi per i diritti civili, sociali e
              ambientali. Ho contribuito alla nascita di Adu VdA, guidato il
              primo Pride, mi sono mobilitata per la Palestina e lavoro oggi per
              Arci Servizio Civile Piemonte. Continuo a lottare, per chi resta.
            </p>
          </div>

          <div className="story-column">
            <h3>La mia visione per la Valle</h3>
            <p className="story-text">
              Mi candido con Valle d’Aosta Aperta per una regione in cui nessuno
              sia lasciato indietro e in cui lavoro, salute, ambiente e diritti
              siano parte di una stessa visione. Faccio politica per chi non si
              sente rappresentato, per tutta un’altra Valle, a partire da una
              battaglia a me cara: il salario minimo valdostano. Per chi lotta.
              Per chi resta. Per chi sogna una Valle diversa.
            </p>
            <p className="story-text">
              Il 28 settembre vota VdA Aperta e scrivi Berard.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default StorySection;
