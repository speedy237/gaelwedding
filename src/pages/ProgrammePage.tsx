// ProgrammePage.tsx – version sans clé API
import React from 'react';

const ProgrammePage: React.FC = () => {
  // Liens « Add to calendar »
  const tradEventUrl = encodeURI(
    'https://calendar.google.com/calendar/render?action=TEMPLATE' +
      '&text=Mariage%20Traditionnel' +
      '&dates=20251219T163000Z/20251219T230000Z' +
      '&location=Nyalla%2C%20Douala%2C%20Cameroun' +
      '&details=Événement%20mariage%20traditionnel'
  );
  const benedEventUrl = encodeURI(
    'https://calendar.google.com/calendar/render?action=TEMPLATE' +
      '&text=Bénédiction%20Nuptiale' +
      '&dates=20251220T100000Z/20251220T120000Z' +
      '&location=Église%20Catholique%20Sainte%20Monique%2C%20Makepe%2C%20Douala' +
      '&details=Cérémonie%20religieuse'
  );
  const dinnerEventUrl = encodeURI(
    'https://calendar.google.com/calendar/render?action=TEMPLATE' +
      '&text=Dîner%20et%20Réception' +
      '&dates=20251220T193000Z/20251221T010000Z' +
      '&location=Hôtel%20Le%20Vendôme%2C%20Makepe%2C%20Douala%2C%20Cameroun' +
      '&details=Dîner%20et%20réception'
  );

  return (
    <section className="section section-light">
      <div className="program-container centered">
        <header className="program-header">
          <h1 className="program-title">Programme</h1>
        </header>

        <article className="program-day">
          <div className="program-date">19 December 2025</div>
          <div className="program-card">
            <h3 className="program-event">Mariage Traditionnel</h3>
            <p className="program-time">16h30 – 23h00</p>
            <p className="program-venue">Nyalla, Douala, Cameroun</p>
            {/* carte sans clé API */}
            <iframe
              title="Carte Mariage Traditionnel"
              width="100%"
              height="300"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3979.9578642195065!2d9.785510474975398!3d4.02901659594473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNMKwMDEnNDQuNSJOIDnCsDQ3JzE3LjEiRQ!5e0!3m2!1sfr!2sfr!4v1757192438661!5m2!1sfr!2sfr"
            />
            <p className="program-map-link">
              <a href={tradEventUrl} target="_blank" rel="noopener noreferrer">
                Ajouter au calendrier
              </a>
            </p>
          </div>
        </article>

        <article className="program-day">
          <div className="program-date">20 December 2025</div>
          <div className="program-card">
            <h3 className="program-event">Bénédiction Nuptiale</h3>
            <p className="program-time">10h00 – 12h00</p>
            <p className="program-venue">
              Paroisse Sainte Monique<br />
              Église Catholique Sainte Monique de Makepe, Douala
            </p>
            <iframe
              title="Carte Église Sainte Monique"
              width="100%"
              height="300"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              src="https://maps.google.com/maps?q=Église%20Catholique%20Sainte%20Monique%20de%20Makepe%20Douala&output=embed"
            />
            <p className="program-map-link">
              <a href={benedEventUrl} target="_blank" rel="noopener noreferrer">
                Ajouter au calendrier
              </a>
            </p>
          </div>

          <div className="program-card">
            <h3 className="program-event">Cocktail Reception</h3>
            <p className="program-time">12h00 – 13h30</p>
            <p className="program-venue">
              Terrasse Paroisse Sainte Monique<br />
              Douala
            </p>
            {/* Pas de carte nécessaire si lieu identique ou proche. */}
            <p className="program-map-link">
              <a href={benedEventUrl} target="_blank" rel="noopener noreferrer">
                Ajouter au calendrier
              </a>
            </p>
          </div>

          <div className="program-card">
            <h3 className="program-event">Dîner & Réception</h3>
            <p className="program-time">19h30</p>
            <p className="program-venue">
              Hôtel Le Vendôme Makepe<br />
              Douala, Cameroun
            </p>
            <iframe
              title="Carte Hôtel Le Vendôme"
              width="100%"
              height="300"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              src="https://maps.google.com/maps?q=Hôtel%20Le%20Vendôme%20Makepe%20Douala&output=embed"
            />
            <p className="program-map-link">
              <a href={dinnerEventUrl} target="_blank" rel="noopener noreferrer">
                Ajouter au calendrier
              </a>
            </p>
          </div>
        </article>

        <aside className="program-note">
            <h3 className="program-event">Dress Code</h3>
          <p>
            Notre thème de mariage est « Une Promesse pour la Vie ». Nous serions ravis que nos invités
            portent une tenue de soirée formelle (black‑tie) en accord avec nos couleurs : vieux rose,
            saumon et bordeaux. Nous avons hâte de partager ce moment unique avec vous !
          </p>
        </aside>
      </div>
    </section>
  );
};

export default ProgrammePage;
