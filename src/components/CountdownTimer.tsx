// src/components/CountdownTimer.tsx
import React, { useState, useEffect } from 'react';

interface Props {
  targetDate: string; // Format ISO : "2025-10-18T15:00:00"
}

const CountdownTimer: React.FC<Props> = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const diff = +new Date(targetDate) - +new Date();
    return diff > 0
      ? {
          jours: Math.floor(diff / (1000 * 60 * 60 * 24)),
          heures: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / (1000 * 60)) % 60),
          secondes: Math.floor((diff / 1000) % 60),
        }
      : { jours: 0, heures: 0, minutes: 0, secondes: 0 };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="countdown">
      {Object.entries(timeLeft).map(([label, value]) => (
        <div key={label} className="countdown-item">
          <div className="countdown-circle">
            {String(value).padStart(2, '0')}
          </div>
          <div className="countdown-label">{label}</div>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
