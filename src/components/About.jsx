import './About.css';

const STATS = [
  { number: '3rd',   label: 'Year Celebrating' },
  { number: '100+', label: 'Families Joining' },
  { number: '∞',   label: 'Bappa\'s Blessings' },
];

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="about-grid">

          {/* Image Side */}
          <div className="about-image-wrapper">
            <img
              src="/temple_interior.png"
              alt="Shree Siddhivinayaka Ganesh idol"
              className="about-image"
            />
            <div className="about-badge" aria-label="Ganesh Chaturthi 2026">
              <span className="badge-emoji">🐘</span>
              <span className="badge-text">Ganesh<br />Chaturthi<br />2026</span>
            </div>
          </div>

          {/* Text Side */}
          <div className="about-content">
            <span className="about-tag">About Our Celebration</span>

            <h2 className="about-heading">
              3rd Year Grand Celebration of<br />
              <span className="about-heading-highlight">Lord Siddhivinayaka</span>
            </h2>

            <p className="about-text">
              Welcome to the <strong>3rd Year of Shree Siddhivinayaka Ganesh Chaturthi</strong> celebration
              organized by our community in <strong>Malleshwara Badavane, Hiriyur, Chithradurg</strong>.
              This year, we bring together our entire neighbourhood for a joyful celebration
              filled with devotion, culture, and togetherness.
            </p>

            <p className="about-text">
              From the sacred <em>Ganesh Sthapana</em> on September 14th to the grand
              <em> Visarjan procession</em> on September 17th — every moment is a tribute
              to Lord Ganesha, the beloved Vighnaharta who blesses us with wisdom,
              prosperity, and new beginnings.
            </p>

            <p className="about-text">
              All families, friends, and devotees are warmly welcome. Let us celebrate
              together and seek Bappa's blessings — <em>Ganpati Bappa Morya!</em> 🙏
            </p>

            {/* Stats */}
            <div className="about-stats">
              {STATS.map(({ number, label }) => (
                <div className="stat-item" key={label}>
                  <span className="stat-number">{number}</span>
                  <span className="stat-label">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
