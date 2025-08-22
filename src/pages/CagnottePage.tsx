// src/pages/CagnottePage.tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt, faCreditCard } from '@fortawesome/free-solid-svg-icons';
// FaPaypal est dans free-brands-svg-icons :
import { faPaypal as faPaypalBrand } from '@fortawesome/free-brands-svg-icons';

const paymentOptions = [
  {
    id: 'orange',
    title: 'Orange Money',
    description: 'Contribuez directement via Orange Money. Indiquez notre numéro de mobile pour envoyer votre participation.',
    icon: faMobileAlt,
    link: 'https://orange-money.example', // remplacez par votre lien ou code QR
  },
  {
    id: 'paypal',
    title: 'PayPal',
    description: 'Utilisez votre compte PayPal pour un transfert sécurisé. Cliquez sur le bouton ci‑dessous pour être redirigé.',
    icon: faPaypalBrand,
    link: 'https://www.paypal.me/votreLien', // remplacez par votre lien PayPal.me
  },
  {
    id: 'cb',
    title: 'Carte bancaire',
    description: 'Pour un paiement par carte bancaire, utilisez notre formulaire sécurisé hébergé par un prestataire de paiement.',
    icon: faCreditCard,
    link: 'https://www.onparticipe.fr/c/NajOMy2W', // remplacez par l’URL de votre formulaire de paiement
  },
];

const CagnottePage: React.FC = () => (
  <section className="cagnotte-section">
    <div className="container">
      <h1 className="title">Participer à notre projet de mariage</h1>
      <p className="subtitle">
        Votre présence est déjà un cadeau précieux. Si vous souhaitez toutefois nous aider à financer notre mariage ou notre voyage de noces, vous pouvez le faire via un des moyens ci‑dessous.
      </p>

      <div className="payment-grid">
        {paymentOptions.map(opt => (
          <div key={opt.id} className="payment-card">
            <div className="icon-wrapper">
              <FontAwesomeIcon icon={opt.icon} size="2x" />
            </div>
            <h3 className="card-title">{opt.title}</h3>
            <p className="card-text">{opt.description}</p>
            <a
              href={opt.link}
              target="_blank"
              rel="noopener noreferrer"
              className="payment-button"
            >
              Contribuer
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CagnottePage;
