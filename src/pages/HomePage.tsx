import CountdownTimer from "../components/CountdownTimer";
import HeroSection from "../components/HeroSection";

/* HomePage.tsx */
export default function HomePage() {
  const images = [
    '/images1.jpg',
    '/images2.jpg',
    '/images3.jpg',
    '/images4.jpg',
    // … vos photos
  ];
  return (
    <>
      <HeroSection
        title="Haudris & Gael"
        date="18 octobre 2025"
        time="20h00"
        location="Parcours Vita, Douala"
        imageUrl="/images1.jpg"
      />
      {/* Section histoire */}
      <section className="section section-light">
        <div className="story-container">
          <div className="story-text">
            <h2>Notre histoire</h2>
            <p>Nous nous sommes rencontrés il y a dix ans… (racontez votre parcours).</p>
          </div>
          <div className="story-image">
            <img src="/images2.jpg" alt="Notre histoire" />
          </div>
        </div>
      </section>
      {/* Compte à rebours */}
      <section className="section section-dark" style={{ textAlign: 'center' }}>
        <h2>Le grand jour arrive !</h2>
        <CountdownTimer targetDate="2025-10-18T15:00:00" />
      </section>
      {/* Galerie */}
      <section className="section section-light">
        <h2 style={{ textAlign: 'center' }}>Galerie</h2>
        <div className="gallery-grid">
          {images.map((img, i) => (
            <div key={i} className="gallery-item">
              <img src={img} alt={`Galerie ${i + 1}`} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
