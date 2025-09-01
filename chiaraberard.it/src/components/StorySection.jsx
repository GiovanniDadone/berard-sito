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
              Ho e da 13 anni mi impegno 
              per una Valle d'Aosta più giusta ed equa. La mia militanza è iniziata a 14 anni nel 2012, 
              e da allora non ho mai smesso di lottare per i diritti, l'ambiente e il cambiamento sociale.
            </p>
            <p className="story-text">
              Sono stata cofondatrice di Queer VdA e ho organizzato il 
              primo Pride della Valle. Attualmente sono referente 
              regionale di BDS VdA per i diritti del popolo palestinese 
              e lavoro per Arci Servizio Civile Piemonte.
            </p>
          </div>
          
          
          <div className="story-column">
            <h3>La mia visione per la Valle</h3>
            <p className="story-text">
              Sogno una Valle d'Aosta dove nessuno venga lasciato indietro, 
              dove le lotte per il lavoro, la salute, l'ambiente e i diritti siano parte di un'unica visione di futuro. 
              Una Valle in cui ognuna e ognuno possa realizzarsi senza dover scappare.
            </p>
            <p className="story-text">
              Sono una giovane valdostana di sinistra e voglio portare in consiglio 
              la voce di tutte le persone che non si sono mai sentite rappresentate. 
              Per chi lotta. Per chi resta. Per chi sogna una Valle diversa.
            </p>
          </div>
        </section>
        
        
      </div>
    </div>
  );
};

export default StorySection;