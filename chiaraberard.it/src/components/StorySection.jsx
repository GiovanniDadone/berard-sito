import React from "react";
import "./StorySection.css";

const StorySection = () => {
  return (
    <article className="story-card">
      <div className="prose">
        {/* Lead paragraph */}
        <div className="lead-paragraph">
          <div className="lead-decoration"></div>
          <p className="lead-text">
            Il desiderio di migliorare la società che mi circonda non mi ha mai
            abbandonata, sin da quando era una bambina.
          </p>
        </div>

        {/* Content paragraphs */}
        <div className="content-text">
          <p>
            Andarsene o restare in Valle? La verità è che, in fondo, ho fatto
            entrambe le cose: con tanta fatica ma anche con grande
            soddisfazione, continuo da anni a impegnarmi nell'attivismo e nella
            politica valdostana, anche mentre studio e lavoro fuori.
          </p>

          <p>
            Ho continuato a seguire da vicino ciò che accade sul territorio,
            contribuendo attivamente alla vita di diverse realtà associative e
            collettive: dalla vicepresidenza di{" "}
            <span className="highlight-red">Arcigay Queer VdA</span>{" "}
            all'organizzazione del primo{" "}
            <span className="highlight-teal">Pride della Valle d'Aosta</span>,
            fino all'impegno in BDS VdA, nella Pro Loco di Rhêmes e in molte
            altre esperienze di partecipazione concreta.
          </p>

          <p>
            Ed è grazie anche a queste esperienze che mi sono accorta che ora
            più che mai, serve un{" "}
            <span className="highlight-bold">cambiamento radicale</span>: nella
            sanità, nel lavoro, nella tutela dell'ambiente e per i diritti di
            tuttə.
          </p>

          <p>
            Non possiamo più accettare liste d'attesa infinite, stipendi tra i
            più bassi d'Italia, giovani costrettə ad andarsene, mentre i nostri
            diritti vengono costantemente calpestati.{" "}
            <span className="highlight-semibold">
              Chi vive in Valle d'Aosta merita di più.
            </span>
          </p>

          <div className="highlight-card">
            <p className="highlight-text">
              Per questo mi candido con{" "}
              <span className="highlight-purple-bold">@vdaaperta</span>: una
              squadra pazzesca che collabora da 3 anni per costruire insieme
              tutta un'altra Valle. ❤️💚
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default StorySection;
