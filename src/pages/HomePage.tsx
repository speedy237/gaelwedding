import CountdownTimer from "../components/CountdownTimer";
import HeroSection from "../components/HeroSection";
import SaveSection from "../components/SaveSection";

/* HomePage.tsx */
export default function HomePage() {
  const images = [
    '/{import.meta.env.BASE_URL}/image3.jpg',
    '/{import.meta.env.BASE_URL}/image5.jpg',
  ];
  return (
    <>
      <HeroSection
        title="Haudris & Gael Wedding"
        date=""
        location=""
        imageUrl="/{import.meta.env.BASE_URL}/mariage.jpg"
      />
      {/* Section histoire */}
    <SaveSection title="Proverbes 18:22" 
                 subtitle="Qui trouve une femme trouve le bonheur, et il obtient la faveur de l'Éternel."
                  message="C'est avec une grande joie que nous vous invitons à célébrer notre union religieuse et traditionnelle à Douala, au Cameroun, les 19 et 20 décembre. Venez vivre avec nous ces journées mémorables, remplies d'amour et de traditions. Nous avons hâte de vous retrouver."
                  salutation="Affectueusement,"
                  married="Gael et Haudris"  
                 />
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
