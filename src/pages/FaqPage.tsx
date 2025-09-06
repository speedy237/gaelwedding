// src/pages/FaqPage.tsx
import React from 'react';

const FaqPage: React.FC = () => (
  <section className="section section-light">
    <div className="faq-container centered">
      <h1 className="text-3xl md:text-4xl font-serif mb-6">FAQS</h1>

      {/* Contact */}
      <article className="faq-item mb-8">
        <h2 className="faq-question">Merci de nous adresser toutes vos questions&nbsp;:</h2>
        <p className="faq-answer">
          N’hésitez pas à nous contacter par courriel à&nbsp;
          <a href="mailto:haudrisgael@gmail.com" className="text-primary underline">haudrisgael@gmail.com</a>.
        </p>
      </article>

      {/* Confirmation de présence */}
      <article className="faq-item mb-8">
        <h2 className="faq-question">Comment confirmer votre présence&nbsp;?</h2>
        <p className="faq-answer">
          Tous les invités doivent confirmer leur présence en ligne, via la page RSVP de notre site,
          qu’ils aient reçu une invitation papier ou électronique. Voici la marche à suivre :
        </p>
        <ol className="faq-steps">
          <li>Rendez-vous sur la page <strong>RSVP</strong> de notre site.</li>
          <li>Entrez votre nom tel qu’il apparaît sur l’invitation.</li>
          <li>Indiquez si vous serez présent(e) et précisez le nombre d’accompagnants (le cas échéant).</li>
          <li>Validez votre réponse.</li>
        </ol>
        <p className="faq-answer">
          Merci de confirmer votre présence avant la date indiquée afin que nous puissions finaliser les préparatifs.
        </p>
      </article>

      {/* Code vestimentaire */}
      <article className="faq-item mb-8">
        <h2 className="faq-question">Quel est le code vestimentaire du mariage&nbsp;?</h2>
        <p className="faq-answer"><strong>Mariage traditionnel :</strong> une tenue africaine élégante et colorée.</p>
        <p className="faq-answer">
          <strong>Mariage religieux &amp; soirée :</strong> thème « Une Promesse pour la Vie ». Tenue de soirée formelle (black‑tie) aux couleurs vieux rose, saumon et bordeaux.
        </p>
      </article>

      {/* Accompagnants */}
      <article className="faq-item mb-8">
        <h2 className="faq-question">Puis-je venir accompagné(e) ?</h2>
        <p className="faq-answer">
          Les invités supplémentaires ne sont pas prévus, sauf si cela est déjà indiqué sur votre invitation.
          Merci de respecter cette indication afin que la fête se déroule comme prévu.
        </p>
      </article>

      {/* Enfants */}
      <article className="faq-item mb-8">
        <h2 className="faq-question">Les enfants sont-ils autorisés&nbsp;?</h2>
        <p className="faq-answer">
          Cette réception est réservée aux adultes. Les enfants ne seront pas admis, sauf indication
          contraire précisée personnellement sur votre invitation.
        </p>
      </article>

      {/* Contact supplémentaire */}
      <article className="faq-item">
        <h2 className="faq-question">Une autre question ?</h2>
        <p className="faq-answer">
          Oui, vous pouvez écrire à&nbsp;
          <a href="mailto:haudrisgael@gmail.com" className="text-primary underline">haudrisgael@gmail.com</a>.
        </p>
      </article>
    </div>
  </section>
);

export default FaqPage;
