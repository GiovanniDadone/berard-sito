// ComeAiutarmi.jsx
import "./ComeAiutarmi.css";

const ComeAiutarmi = () => {
  const aiutoItems = [
    {
      id: 1,
      title: "CONDIVIDI SU WHATSAPP",
      link: "https://api.whatsapp.com/send?text=Ciao!%20Anche%20tu%20sogni%20tutta%20un'altra%20Valle%3F%0A%0A%F0%9F%8F%94%20Io%20voglio%20una%20Valle%20d%E2%80%99Aosta%20dove%20il%20*lavoro%20sia%20pagato%20almeno%2012%E2%82%AC%20l%E2%80%99ora*%2C%20dove%20*non%20si%20aspetti%20quasi%20un%20anno%20per%20una%20visita%20medica*%2C%20e%20dove%20*la%20Regione%20serva%20le%20persone%2C%20non%20i%20soliti%20noti*.%0AE%20credo%20che%20questo%20cambiamento%20sia%20possibile.%20Ma%20solo%20se%20lo%20costruiamo%20insieme!%0A%0A%F0%9F%97%93%20Domenica%20*28%20settembre*%2C%20alle%20elezioni%20regionali%20e%20comunali%20di%20Aosta%3A%0A%E2%9D%8C%20Vota%20*Valle%20d%E2%80%99Aosta%20Aperta*%0A%E2%9C%8D%20*Scrivi%20BERARD*%0A%0ASe%20vuoi%20scoprire%20*le%20proposte%20di%20Chiara*%2C%20le%20puoi%20trovare%20su%20chiaraberard.it%0A%0A%F0%9F%92%9CSe%20anche%20tu%20ci%20credi%2C%20*inoltra%20questo%20messaggio%20ad%20almeno%205%20persone%20su%20WhatsApp*.%20Ogni%20condivisione%20conta!",
      icon: "📱",
    },
    {
      id: 2,
      title: "SCOPRI I MATERIALI MULTIMEDIALI",
      link: "https://drive.google.com/drive/folders/1stFf8G7qKEgP8m9FEGttqdu6ozOAa1he?usp=sharing",
      icon: "📂",
    },
    {
      id: 3,
      title: "RICHIEDI MATERIALE ELETTORALE",
      link: "https://actionnetwork.org/forms/ti-serve-del-materiale-elettorale?source=direct_link&",
      icon: "📋",
    },
  ];

  const handleItemClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <section className="come-aiutarmi-container">
      <div className="come-aiutarmi-inner">
        <h2 className="come-aiutarmi-title">Come Aiutarmi</h2>

        {/* Sottotitolo motivazionale */}
        <div className="come-aiutarmi-subtitle">
          <p>
            La politica si fa insieme. Il tuo supporto è fondamentale per
            costruire una Valle d'Aosta più giusta, inclusiva e sostenibile.
          </p>
        </div>

        <div className="come-aiutarmi-grid">
          {aiutoItems.map((item, index) => (
            <div
              key={item.id}
              className={`come-aiutarmi-card card-${index + 1}`}
              onClick={() => handleItemClick(item.link)}
            >
              <div className="card-icon">{item.icon}</div>
              <h3>{item.title}</h3>
              <div className="card-action">
                <span>CLICCA QUI →</span>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action finale */}
        <div className="come-aiutarmi-cta">
          <h3>Insieme possiamo fare la differenza</h3>
          <p>
            Ogni azione conta. Ogni voce amplifica il nostro messaggio. Ogni
            persona che coinvolgi avvicina la Valle d'Aosta al cambiamento che
            vogliamo vedere.
          </p>
          <div className="cta-hashtags">
            <span className="hashtag">#ValledAostaAperta</span>
            <span className="hashtag">#SognareLottareRestare</span>
            <span className="hashtag">#ChiaraBerard</span>
            <span className="hashtag">#ValledAosta</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComeAiutarmi;
