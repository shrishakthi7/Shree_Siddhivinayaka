import './Hero.css';

function Particles() {
  return (
    <div className="hero-particles" aria-hidden="true">
      {Array.from({ length: 22 }, (_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            bottom: `${10 + Math.random() * 25}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 3}s`,
            '--drift': `${(Math.random() - 0.5) * 70}px`,
            width: `${2 + Math.random() * 4}px`,
            height: `${2 + Math.random() * 4}px`,
            opacity: 0,
          }}
        />
      ))}
    </div>
  );
}

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section className="hero" id="home">
      {/* Background */}
      <div className="hero-bg" aria-hidden="true" />
      <div className="hero-overlay" aria-hidden="true" />
      <Particles />

      {/* Content */}
      <div className="hero-content">
        <span className="hero-om" aria-label="Om">🕉️</span>
        <span className="hero-eyebrow">3rd Year of Ganesh Chaturthi Celebration (2026)</span>

        <h1 className="hero-title">
          Shree<br />Siddhivinayaka
        </h1>

        <p className="hero-subtitle">
          "Vighnaharta — Remover of Obstacles, Bestower of Wisdom &amp; Prosperity"
        </p>

        <div className="hero-dates">
          📅&nbsp;&nbsp;September 14 – 17, 2026&nbsp;&nbsp;·&nbsp;&nbsp;4-Day Grand Celebration
        </div>

        <div className="hero-location">
          📍&nbsp;Malleshwara Badavane, Hiriyur, Chithradurg — Karnataka
        </div>

        <div className="hero-buttons">
          <button className="btn-primary" onClick={() => scrollTo('about')}>
            Know More ↓
          </button>
        </div>
      </div>
    </section>
  );
}
