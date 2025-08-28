// src/components/RsvpForm.tsx
import React, { useState } from 'react';


/**
 * Formulaire RSVP amélioré :
 * - Demande le nom de l’invité.
 * - Permet de sélectionner les événements via des cases à cocher.
 * - Laisse un message facultatif.
 */

const scriptURL = "https://script.google.com/macros/s/AKfycbzYOuAuVLEdaHAGzrHmreTIerY4cFoYxnOF4Yd0BvR9CiTZE15_cv5sldnIVOudbbun/exec";

const RsvpForm: React.FC = () => {
  const [name, setName] = useState('');
  const [surname, setsurName] = useState('');
  const [tel, setTel] = useState('');
  const [email, setEmail] = useState('');
  const [events, setEvents] = useState<string[]>([]);
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const eventOptions = [
    { id: 'Dote', label: 'Le Mariage traditionnel: Le 19 Decembre 2025 à 18H, Nyalla, Douala' },
    { id: 'Benediction', label: 'La Bénédiction nuptiale: Le 20 Decembre 2025 à 10h, Eglise Sainte Monique de Makepe, Douala' },
    { id: 'Soiree', label: 'Soirée dansante: Le 20 décembre 2025 à 20h, Hôtel Vendôme, Makepe, Douala' },
  ];

  const handleCheckboxChange = (eventId: string) => {
    setEvents(prev =>
      prev.includes(eventId)
        ? prev.filter(e => e !== eventId)
        : [...prev, eventId]
    );
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    try {
      const formData = new FormData();
      formData.append("Nom et Prénom", name);
      formData.append("Télephone", tel);
      formData.append("Email", email);
      formData.append("Evenements", events.join(", "));
      const response = await fetch(scriptURL, {
        method: "POST",
        body: formData,
        mode: 'no-cors' // 'no-cors' pour éviter les erreurs CORS
        
      });
      if (response.ok) {
        setSent(true);
      } else {
        setSent(true);
        //setError("Erreur lors de l'envoi des données.");
      }

    } catch {
      setError("Une erreur est survenue. Merci de réessayer.");
    }
  };

  if (sent) {
    return (
      <div className="form-card">
      <p className="text-center text-xl font-semibold text-primary">
        Merci ! Votre réponse a bien été enregistrée.
      </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="form-card">
      <h3 className="text-2xl font-serif mb-4 text-center">Confirmer votre Presence</h3>

      {error && (
        <p className="text-red-600 mb-4 text-center">{error}</p>
      )}

      <div className="mb-4">
        <label htmlFor="name">Nom complet</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          required
          placeholder="Ex. : Jean Fotso"
        />
      </div>
       <div className="mb-4">
        <label htmlFor="tel">Téléphone</label>
        <input
          id="tel"
          type="tel"
          value={tel}
          onChange={e => setTel(e.target.value)}
          required
          placeholder="ex. +237 695 74 14 10"
        />
      </div> <div className="mb-4">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          placeholder="ex. fotso.jean@gmail.com"
        />
      </div>



      <div className="mb-4">
        <span className="block font-semibold mb-2">
          Sélectionnez les événements auxquels vous participerez
        </span>
        {eventOptions.map(opt => (
          <label key={opt.id} className="event-checkbox">
            <input
              type="checkbox"
              checked={events.includes(opt.id)}
              onChange={() => handleCheckboxChange(opt.id)}
            />
            <span>{opt.label}</span>
          </label>
        ))}
      </div>

      <div className="mb-4">
       
      </div>

      <button type="submit">Envoyer</button>
    </form>
  );
};

export default RsvpForm;
