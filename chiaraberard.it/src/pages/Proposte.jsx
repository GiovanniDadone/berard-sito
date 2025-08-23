import React from "react";
import "./Proposte.css";

const Proposte = () => {
  return (
    <div className="proposte-container">
      <div className="proposte-content">
        <section>
          <h1>LE MIE PROPOSTE</h1>
          <h2>PER UNA VALLE D'AOSTA DIVERSA</h2>
        </section>

        <section className="proposte-main">
          <div className="proposta-card">
            <h3>Il mio impegno</h3>
            <p className="proposta-text">
              Mi impegno perché <span className="highlight-bold">sogno</span>{" "}
              una Valle d'Aosta in cui nessuno venga lasciato indietro, dove le
              lotte per il lavoro, la salute, l'ambiente e i diritti siano parte
              di un'unica visione di futuro. Una Valle in cui ognuna e ognuno
              possa realizzarsi senza dover scappare.
            </p>
          </div>

          <div className="proposta-card">
            <h3>La mia missione</h3>
            <p className="proposta-text">
              Faccio politica perché credo che nessuno debba sentirsi
              invisibile. Perché{" "}
              <span className="highlight-bold">
                la Valle d'Aosta ha bisogno di chi non ha paura di dire le cose
                come stanno
              </span>
              , e di chi è pronto a rimboccarsi le maniche per cambiarle
              davvero.
            </p>
          </div>

          <div className="proposta-card">
            <h3>La mia candidatura</h3>
            <p className="proposta-text">
              Alle elezioni regionali mi candido con la lista{" "}
              <span className="highlight-bold">Valle d'Aosta Aperta</span>.
              Contro le disuguaglianze, contro lo spopolamento, contro la
              rassegnazione.{" "}
              <span className="highlight-red">
                Per chi lotta. Per chi resta. Per chi sogna una Valle diversa.
              </span>
            </p>
          </div>
        </section>

        <section>
          <div className="quote-box">
            <p>
              Sono una giovane valdostana di sinistra e voglio portare in
              consiglio la voce di tutte le persone che non si sono mai sentite
              rappresentate.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Proposte;
