// src/components/RsvpForm.tsx
import React, { useState } from 'react';


/**
 * Formulaire RSVP amélioré :
 * - Demande le nom de l’invité.
 * - Permet de sélectionner les événements via des cases à cocher.
 * - Laisse un message facultatif.
 */
const RsvpForm: React.FC = () => {
  const [name, setName] = useState('');
  const [events, setEvents] = useState<string[]>([]);
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const eventOptions = [
    { id: 'mariage', label: 'Mariage traditionnel – 18 octobre à 20h' },
    { id: 'benediction', label: 'Bénédiction nuptiale – 19 octobre à 13h' },
    { id: 'soiree', label: 'Soirée dansante – 19 octobre à 20h' },
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
      // Remplacez ceci par l’envoi réel (API, email, etc.)
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSent(true);
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
          placeholder="Ex. : Marie Dupont"
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
