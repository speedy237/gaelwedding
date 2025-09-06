// src/components/HeroSection.tsx
import { Link } from 'react-router-dom';

interface Props {
  title: string;
  date: string;

  location: string;
  imageUrl: string;
}

/* HeroSection.tsx */
export default function HeroSection({ title, date,  location, imageUrl }: Props) {
  return (
    <section className="hero" style={{ backgroundImage: `url(${imageUrl})` }}>
      <div className="hero-content">
        <h1 className="hero-title">{title}</h1>
        <p className="hero-subtitle">{date} {location}</p>
        <br />
    
        <Link to="/rsvp" className="hero-button">Confirmer votre présence</Link>
      </div>
    </section>
  );
}

