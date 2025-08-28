import CountdownTimer from "../components/CountdownTimer";
import HeroSection from "../components/HeroSection";

/* HomePage.tsx */
export default function HomePage() {
  const images = [
    '../assets/image2.jpg',
    '../assets/image3.jpg',
    '../assets/image4.jpg',
    '../assets/image5.jpg',
  ];
  return (
    <>
      <HeroSection
        title="Haudris & Gael Wedding"
        date="19-20 Décembre 2025"
        location="Douala, Cameroun"
        imageUrl="../assets/mariage.jpg"
      />
      {/* Section histoire */}
      <section className="section section-light">
        <div className="story-container">
          <div className="story-text">
            <h2>Notre histoire</h2>
            <p>Une Faveur de l'Éternel
Il y a bien des années, deux âmes, Raissa et Gaël, se sont rencontrées, et leur amitié est devenue un amour enraciné dans leur foi. Leur union civile il y a deux ans et demi fut la première étape, rapidement bénie par l'arrivée de leur fille, Ezriela, un véritable ange.

Aujourd'hui, ils veulent placer leur amour sous le regard de Dieu. Comme le dit Proverbes 18:22, "Celui qui trouve une femme a trouvé le bonheur; c'est une faveur qu'il a reçue de l'Éternel." Gaël a trouvé en Raissa son bonheur, et Raissa en Gaël son roc.

Leur histoire est la preuve vivante qu'avec l'Éternel comme fondation, une famille peut s'épanouir. Ils vous invitent à célébrer avec eux lors de leurs mariages traditionnel et religieux, pour témoigner de leur amour et de leur foi en Dieu, le centre de leur vie.</p>
          </div>
          <div className="story-image">
            <img src="/image2.jpg" alt="Notre histoire" />
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
