// src/components/HeroSection.tsx
import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  title: string;
  date: string;
  time: string;
  location: string;
  imageUrl: string;
}

/* HeroSection.tsx */
export default function HeroSection({ title, date, time, location, imageUrl }: Props) {
  return (
    <section className="hero" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="hero-content">
        <h1 className="hero-title">{title}</h1>
        <p className="hero-subtitle">{date} à {time} – {location}</p>
        <br />
    
        <Link to="/rsvp" className="hero-button">Confirmer votre présence</Link>
      </div>
    </section>
  );
}

