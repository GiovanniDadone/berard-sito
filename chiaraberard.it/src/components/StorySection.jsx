import React from "react";
import "./StorySection.css";

const StorySection = () => {
  return (
    <div className="story-container">
      <div className="story-content">
        <section>
          <h1>CHIARA BERARD</h1>
          <h2>VALLE D'AOSTA APERTA</h2>
        </section>
        
        <section className="story-main">
          <div className="story-column">
            <h3>Chi sono</h3>
            <p className="story-text">
              Ho <span className="highlight-bold">26 anni</span> e da <span className="highlight-red">13 anni</span> mi impegno 
              per una Valle d'Aosta più giusta ed equa. La mia militanza è iniziata a 14 anni nel 2012, 
              e da allora non ho mai smesso di lottare per i diritti, l'ambiente e il cambiamento sociale.
            </p>
            <p className="story-text">
              Sono stata <span className="highlight-teal">cofondatrice di Queer VdA</span> e ho organizzato il 
              <span className="highlight-purple"> primo Pride della Valle</span>. Attualmente sono referente 
              regionale di <span className="highlight-red">BDS VdA</span> per i diritti del popolo palestinese 
              e lavoro per Arci Servizio Civile Piemonte.
            </p>
          </div>
          
          <div className="story-column">
            <h3>Le mie battaglie</h3>
            <ul>
              <li>
                <span className="value-icon">🏥</span>
                <span><strong>Sanità accessibile</strong> - Diritto alla salute per tutti</span>
              </li>
              <li>
                <span className="value-icon">💼</span>
                <span><strong>Lavoro dignitoso</strong> - Contro lo spopolamento</span>
              </li>
              <li>
                <span className="value-icon">🌿</span>
                <span><strong>Tutela ambientale</strong> - Sostenibilità e futuro</span>
              </li>
              <li>
                <span className="value-icon">🏳️‍🌈</span>
                <span><strong>Diritti LGBTQIA+</strong> - Uguaglianza per tutti</span>
              </li>
              <li>
                <span className="value-icon">♿</span>
                <span><strong>Disabilità e neurodivergenze</strong> - Inclusione sociale</span>
              </li>
              <li>
                <span className="value-icon">🤝</span>
                <span><strong>Mutuo aiuto</strong> - Solidarietà e sostegno</span>
              </li>
            </ul>
          </div>
          
          <div className="story-column full-width">
            <h3>La mia visione per la Valle</h3>
            <p className="story-text">
              Sogno una Valle d'Aosta dove <span className="highlight-red">nessuno venga lasciato indietro</span>, 
              dove le lotte per il lavoro, la salute, l'ambiente e i diritti siano parte di un'unica visione di futuro. 
              Una Valle in cui <span className="highlight-teal">ognuna e ognuno possa realizzarsi senza dover scappare</span>.
            </p>
            <p className="story-text">
              <span className="highlight-bold">Sono una giovane valdostana di sinistra</span> e voglio portare in consiglio 
              la voce di tutte le persone che non si sono mai sentite rappresentate. 
              <span className="highlight-purple">Per chi lotta. Per chi resta. Per chi sogna una Valle diversa.</span>
            </p>
          </div>
        </section>
        
        <section>
          <div className="quote-box">
            <p>
              "Faccio politica perché credo che nessuno debba sentirsi invisibile. 
              La Valle d'Aosta ha bisogno di chi non ha paura di dire le cose come stanno, 
              e di chi è pronto a rimboccarsi le maniche per cambiarle davvero."
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default StorySection;