// RsvpForm.tsx
import React, { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
const scriptURL = 'https://script.google.com/macros/s/AKfycbywpZ8BFgh-FHncgIJrvQ8-M-AKjNqRQGOmLQ3t3sEb-6dvRlvBSiazgCKxVR3c98a-/exec';

// Petit utilitaire JSONP
function jsonp<T = any>(url: string, timeoutMs = 15000): Promise<T> {
  return new Promise((resolve, reject) => {
    const cbName = `__gs_cb_${Date.now()}_${Math.random().toString(36).slice(2)}`;
    (window as any)[cbName] = (data: T) => { cleanup(); resolve(data); };

    const s = document.createElement('script');
    s.src = url + (url.includes('?') ? '&' : '?') + `callback=${cbName}`;
    s.async = true;
    s.onerror = () => { cleanup(); reject(new Error('JSONP failed')); };
    document.body.appendChild(s);

    const t = setTimeout(() => { cleanup(); reject(new Error('JSONP timeout')); }, timeoutMs);

    function cleanup() {
      clearTimeout(t);
      try { delete (window as any)[cbName]; } catch {}
      s.remove();
    }
  });
}

const RsvpForm: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState<string | undefined>(undefined);
  const [email, setEmail] = useState('');
  const [availableEvents, setAvailableEvents] = useState<string[]>([]);
  const [selectedEvents, setSelectedEvents] = useState<string[]>([]);
  const [step, setStep] = useState<'form' | 'events' | 'done'>('form');
  const [error, setError] = useState<string | null>(null);

  const labels: Record<string, string> = {
    Dot: 'Mariage traditionnel – 19 déc. 2025 à 18 h (Nyalla, Douala)',
    Benediction: 'Bénédiction nuptiale – 20 déc. 2025 à 10 h (Ste Monique, Makepe)',
    Soirée: 'Soirée dansante – 20 déc. 2025 à 20 h (Hôtel Vendôme, Makepe)',
  };

  // 1) Recherche (JSONP)
  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!phone) { setError('Merci de saisir un numéro de téléphone.'); return; }
    try {
      const url = `${scriptURL}?action=search&name=${encodeURIComponent(phone)}`;
      const data = await jsonp<{ events: string[] }>(url);
      if (data.events?.length) {
        setAvailableEvents(data.events);
        setStep('events');
      } else {
        setError("Aucun événement correspondant trouvé pour ce numéro.");
      }
    } catch (err) {
      console.error(err);
      setError("Erreur lors de la recherche.");
    }
  };

  // 2) Confirmation (JSONP)
  const handleConfirm = async () => {
    setError(null);
    if (!phone) { setError('Numéro manquant.'); return; }
    try {
      const url = `${scriptURL}?action=confirm` +
        `&phone=${encodeURIComponent(phone)}` +
        `&selected=${encodeURIComponent(selectedEvents.join(','))}` +
        `&name=${encodeURIComponent(name)}` +
        `&email=${encodeURIComponent(email)}`;
      await jsonp<{ result: string }>(url);
      setStep('done');
    } catch (err) {
      console.error(err);
      setError("Erreur lors de l'enregistrement.");
    }
  };

  const toggleEvent = (id: string) => {
    setSelectedEvents(prev => prev.includes(id) ? prev.filter(e => e !== id) : [...prev, id]);
  };

  if (step === 'done') {
    return (
      <div className="form-card">
        <p className="text-center text-xl font-semibold text-primary">
          Merci ! Votre participation a bien été enregistrée.
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
            <input id="name" type="text" value={name}
              onChange={e => setName(e.target.value)} required
              placeholder="ex. Jordan YIYUEME" />
          </div>
          <div className="mb-4">
            <label htmlFor="tel">Téléphone</label>
            <PhoneInput
              id="tel"
              placeholder="ex. +237 6 99 99 99 99"
              value={phone}
              onChange={setPhone}
              defaultCountry="CM"
              international
              countryCallingCodeEditable={false}
              required  />
            
          </div>
          <div className="mb-4">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" value={email}
              onChange={e => setEmail(e.target.value)} required
              placeholder="ex. jean.fotso@gmail.com" />
          </div>
          <button type="submit">Vérifier mes invitations</button>
        </form>
      )}

      {step === 'events' && (
        <div>
          <p className="mb-4">Sélectionnez les événements auxquels vous serez présent(e) :</p>
          {availableEvents.map(ev => (
            <label key={ev} className="event-checkbox">
              <input
                type="checkbox"
                checked={selectedEvents.includes(ev)}
                onChange={() => toggleEvent(ev)}
              />
              <span>{labels[ev] || ev}</span>
            </label>
          ))}
          <button className="mt-4" type="button"
            onClick={handleConfirm} disabled={selectedEvents.length === 0}>
            Valider ma présence
          </button>
        </div>
      )}
    </div>
  );
};

export default RsvpForm;
