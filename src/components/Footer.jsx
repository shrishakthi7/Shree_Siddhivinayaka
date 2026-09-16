import './Footer.css';

const QUICK_LINKS = [
  ['#home',     '🏠 Home'],
  ['#about',    '🐘 About'],
  ['#gallery',  '📸 Gallery'],
  ['#contact',  '📞 Contact'],
];

const EVENT_INFO = [
  '📅 Sept 14–17, 2026',
  '📍 Malleshwara Badavane',
  '🏘️ Hiriyur, Chithradurg',
  '🕐 7 AM – 9 PM Daily',
  '🎊 3rd Year Celebration',
  '💛 All Are Welcome',
];

export default function Footer() {
  const scrollTo = (id) => {
    const clean = id.replace('#', '');
    document.getElementById(clean)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">

          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo-row">
              <img src="/siddhi_logo.png" alt="Shree Siddhivinayaka Mandala Logo" />
              <div>
                <div className="footer-brand-name">Shree Siddhivinayaka</div>
                <div className="footer-brand-sub">3rd Year Celebration</div>
              </div>
            </div>
            <p className="footer-tagline">
              A joyful 3rd-year celebration of faith, and devotion, organized with love by our
              community in Malleshwara Badavane, Hiriyur. May Bappa bless every home! 🐘🙏
            </p>
            <div className="footer-social">
              {[
                { icon: '📘', href: '#' },
                { icon: '📸', href: 'https://www.instagram.com/siddhivinayaka_hiriyur?stkn=MTN5a2ZqYTVobHAw' },
                { icon: '▶️', href: '#' },
                { icon: '💬', href: '#' },
              ].map(({ icon, href }, i) => (
                <a key={i} href={href} target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Social link">
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="footer-heading">Quick Links</div>
            <ul className="footer-links">
              {QUICK_LINKS.map(([href, label]) => (
                <li key={href}>
                  <a href={href} onClick={(e) => { e.preventDefault(); scrollTo(href); }}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Event Info */}
          <div>
            <div className="footer-heading">Event Info</div>
            <ul className="footer-links">
              {EVENT_INFO.map((item) => (
                <li key={item}>
                  <span className="footer-info-item">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Shloka */}
        <div className="footer-shloka">
          <p className="shloka-text">
            "Vakratunda Mahakaya Suryakoti Samaprabha,<br />
            Nirvighnam Kurume Deva Sarvakaryeshu Sarvada."
          </p>
          <p className="shloka-attr">— Ganesha Shloka</p>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p>© 2026 Shree Siddhivinayaka Ganesh Chaturthi (3rd Year) · Malleshwara Badavane, Hiriyur, Chithradurg</p>
          <p>Made with <span>❤️</span> &amp; <span>🙏</span> for our Community</p>
        </div>
      </div>
    </footer>
  );
}
