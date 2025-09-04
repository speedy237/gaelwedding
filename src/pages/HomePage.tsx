import CountdownTimer from "../components/CountdownTimer";
import HeroSection from "../components/HeroSection";

/* HomePage.tsx */
export default function HomePage() {
  const images = [
    '/gaelwedding/image3.jpg',
    '/gaelwedding/image5.jpg',
  ];
  return (
    <>
      <HeroSection
        title="Haudris & Gael Wedding"
        date="19-20 Décembre 2025"
        location="Douala, Cameroun"
        imageUrl="/gaelwedding/mariage.jpg"
      />
      {/* Section histoire */}
      <section className="section section-light">
        <div className="story-container">
          <div className="story-text">
            <h2>Save The Date</h2>
            <p><span className="verset">Proverbes 18:22</span>: Qui trouve une femme trouve le bonheur, et il obtient la faveur de l'Éternel

Chers amis, chère famille,

C'est avec une grande joie que nous vous invitons à célébrer notre union religieuse et traditionnelle à Douala, au Cameroun, les 19 et 20 décembre. Venez vivre avec nous ces journées mémorables, remplies d'amour et de traditions. Nous avons hâte de vous retrouver.

Affectueusement,

Gaël et Haudris</p>
          </div>
          <div className="story-image">
            <img src="/gaelwedding/image2.jpg" alt="Notre histoire" />
          </div>
        </div>
      </section>
      {/* Compte à rebours */}
      <section className="section section-dark" style={{ textAlign: 'center' }}>
        <h2>Le grand jour arrive !</h2>
        <CountdownTimer targetDate="2025-12-19T15:00:00" />
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
