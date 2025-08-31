import React, { useState } from 'react';

const scriptURL = 'https://script.google.com/macros/s/AKfycbzYOuAuVLEdaHAGzrHmreTIerY4cFoYxnOF4Yd0BvR9CiTZE15_cv5sldnIVOudbbun/exec';

const RsvpForm: React.FC = () => {
  const [name, setName] = useState('');
  const [tel, setTel] = useState('');
  const [email, setEmail] = useState('');
  const [availableEvents, setAvailableEvents] = useState<string[]>([]);
  const [selectedEvents, setSelectedEvents] = useState<string[]>([]);
  const [step, setStep] = useState<'form' | 'events' | 'done'>('form');
  const [error, setError] = useState<string | null>(null);

  // Options d'affichage (texte) ; l'id correspond au nom d'onglet
  const labels: Record<string, string> = {
    Dot: 'Mariage traditionnel – 19 décembre 2025 à 18 h ( Nyalla, Douala )',
    Benediction: 'Bénédiction nuptiale – 20 décembre 2025 à 10 h ( Sainte Monique, Makepe )',
    Soiree: 'Soirée dansante – 20 décembre 2025 à 20 h ( Hôtel Vendôme, Makepe )',
  };

  // 1. Cherche les événements en fonction du nom
  const handleSearch = async (e: React.FormEvent) => {
    console.log("Handle search called");
    e.preventDefault();
    console.log("------------------")
    setError(null);
    console.log("Searching for name:", name);
    try {
      console.log("Searching for name:", name);
      const params = new URLSearchParams({
        action: 'search',
        name: name.trim(),
      });
      console.log(params.toString());
      console.log("------------------")
      console.log(`${scriptURL}?${params.toString()}`);
      const res = await fetch(`${scriptURL}?${params.toString()}`, {
        method: 'GET',
      });
      const data = await res.json();
      if (data.events && data.events.length > 0) {
        console.log("Found events:", data.events);
        setAvailableEvents(data.events);
        setStep('events');
      } else {
        console.log("No events found for this name.");
        setError("Aucun événement correspondant trouvé.");
      }
    } catch (err) {
      console.error(err);
      setError("Erreur lors de la recherche.");
    }
  };

  // 2. Enregistre la confirmation pour chaque événement
  const handleConfirm = async () => {
    setError(null);
    try {
      const params = new URLSearchParams({
        action: 'confirm',
        name: name.trim(),
        selected: selectedEvents.join(','),
        tel,
        email,
      });
      await fetch(`${scriptURL}?${params.toString()}`, {
        method: 'GET',
        // Vous pouvez utiliser POST + FormData si vous voulez sauver aussi l'email/téléphone
      });
      setStep('done');
    } catch {
      setError("Erreur lors de l'enregistrement.");
    }
  };

  // Gestion des cases à cocher
  const toggleEvent = (id: string) => {
    setSelectedEvents(prev =>
      prev.includes(id) ? prev.filter(e => e !== id) : [...prev, id],
    );
  };

  if (step === 'done') {
    return (
      <div className="form-card">
        <p className="text-center text-xl font-semibold text-primary">
          Merci ! Votre participation a bien été enregistrée.
        </p>
      </div>
    );
  }

  return (
    <div className="form-card">
      <h3 className="text-2xl font-serif mb-4 text-center">Confirmation de présence</h3>
      {error && <p className="text-red-600 mb-4 text-center">{error}</p>}

      {step === 'form' && (
        <form onSubmit={handleSearch}>
          <div className="mb-4">
            <label htmlFor="name">Nom et prénom</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              required
              placeholder="ex. Jordan YIYUEME"
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
              placeholder="ex. +237 695 74 14 10"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              placeholder="ex. jean.fotso@gmail.com"
            />
          </div>
          <button type="submit">Vérifier mes invitations</button>
        </form>
      )}

      {step === 'events' && (
        <div>
          <p className="mb-4">
            Sélectionnez les événements auxquels vous serez présent(e) :
          </p>
          {availableEvents.map(ev => (
            <label key={ev} className="event-checkbox">
              <input
                type="checkbox"
                checked={selectedEvents.includes(ev)}
                onChange={() => toggleEvent(ev)}
              />
              <span>{labels[ev]}</span>
            </label>
          ))}
          <button
            className="mt-4"
            type="button"
            onClick={handleConfirm}
            disabled={selectedEvents.length === 0}
          >
            Valider ma présence
          </button>
        </div>
      )}
    </div>
  );
};

export default RsvpForm;
