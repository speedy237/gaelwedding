// src/pages/TravelPage.tsx
import React from 'react';

const TravelPage: React.FC = () => (
  <section className="section section-light">
    <div className="travel-container centered">
      <h1 className="text-3xl md:text-4xl font-serif mb-6">Travel</h1>

      <article className="travel-section">
        <h2 className="section-title">Flight</h2>
        <p>
          Le principal aéroport pour arriver est l’aéroport international de Douala, situé à
          25 – 30 minutes de Makepe et 30 – 45 minutes de Nyalla.
        </p>
      </article>
      <article className="travel-section">
        <h2 className="section-title">Transport</h2>
        <p>
          Si vous venez en voiture à notre événement, vous pourrez vous garer librement dans le parking prévu à cet effet à l’hôtel. 
          Nous vous recommandons toutefois vivement d’utiliser yango ou un taxi pour vous rendre à l’hôtel, afin de profiter pleinement de la soirée en toute tranquillité.
        </p>
      </article>

      <article className="travel-section">
        <h2 className="section-title">Airbnb</h2>
        <p>
          Si vous souhaitez réserver un logement de type Airbnb, nous vous recommandons la zone
          de Makepe comme point de référence pour être proche du lieu de la cérémonie.
        </p>
      </article>


      <article className="travel-section">
        <h2 className="section-title">Hotel</h2>
        <p>Nous avons réservé un bloc de chambres à l’hôtel <i>Le Vendôme</i> pour vous, avec un tarif préférentiel dont vous pouvez bénéficier avant la date limite de réservation.</p>
        <p><strong>Adresse :</strong> Hôtel Vendôme, 1201 Rue Principale<br />Makepe, Douala, Cameroun</p>
        <p>Dernier jour pour réserver : Mardi 15 décembre 2025</p>
        <p>Chambre standard (King ou Double) : 70 000 FCFA</p>
        <p>Suites (King ou Double) : 100 000 FCFA</p>
        <p>Pour réserver, appelez directement l’hôtel au <a href="tel:+237697587066">+237697587066</a> et mentionnez le code
          de réservation <strong>HAUDRISGAEL2025</strong>.</p>

        {/* carte intégrée sans clé API */}
        <iframe
          title="Carte Hôtel Vendôme"
          loading="lazy"
          src="https://maps.google.com/maps?q=H%C3%B4tel%20Vend%C3%B4me%20Makepe%20Douala&output=embed"
          width="100%"
          height="300"
          style={{ border: 0, borderRadius: '0.5rem', boxShadow: 'var(--shadow)', marginTop: '1rem' }}
          allowFullScreen
        ></iframe>
      </article>
    </div>
  </section>
);

export default TravelPage;
