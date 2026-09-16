import './Gallery.css';

const IMAGES = [
  { src: '/temple_interior.png', alt: 'Shree Siddhivinayaka Idol — beautifully decorated', large: true },
  { src: '/ganesha_hero.png',    alt: 'Lord Ganesha divine portrait',                      large: false },
  { src: '/ganesha_festival.png',alt: 'Festival celebration & procession',                 large: false },
  { src: '/temple_interior.png', alt: 'Sacred sanctum with diyas',                         large: false },
  { src: '/ganesha_festival.png',alt: 'Community gathering — Ganesh Chaturthi',            large: false },
];

export default function Gallery() {
  return (
    <section className="gallery-section" id="gallery">
      <div className="container">
        <div className="section-header">
          <div className="section-divider">
            <span className="divider-line" />
            <span className="divider-icon">📸</span>
            <span className="divider-line" />
          </div>
          <h2 className="section-title">Celebration Gallery</h2>
          <p className="section-subtitle">Precious moments from our Ganesh Chaturthi celebration</p>
        </div>

        <div className="gallery-grid">
          {IMAGES.map((img, i) => (
            <div className={`gallery-item ${img.large ? 'gallery-item--large' : ''}`} key={i}>
              <img src={img.src} alt={img.alt} loading="lazy" />
              <div className="gallery-overlay" aria-hidden="true">
                <span>🔍</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
