interface Props {
  title: string;
  subtitle: string;
  message: string;
  salutation: string;
  married: string;

}

/* HeroSection.tsx */
export default function SaveSection({ title, subtitle, message,salutation,married}: Props) {
  return (
    <section className="saved" >
      <div className="save-content">
        <h1 className="save-title2">{title}</h1>
        <p className="save-subtitle2">{subtitle}</p>
        <p className="save-subtitle">Chers amis, chère famille,</p>
        <p className="save-subtitle">{message}</p>
        <p className="save-subtitle">{salutation}</p>
        <p className="save-title">{married}</p>
            
      </div>
      <div className="story-image">
            <img src="/{import.meta.env.BASE_URL}/image2.jpg" alt="Notre histoire" />
          </div>
    </section>
  );
}

