import { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  const navLinks = [
    ['home',     'Home'],
    ['about',    'About'],
    ['gallery',  'Gallery'],
    ['contact',  'Contact'],
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
      <div className="container navbar-inner">

        {/* Brand */}
        <a href="#home" className="navbar-brand" onClick={(e) => { e.preventDefault(); scrollTo('home'); }}>
          <img src="/siddhi_logo.png" alt="Shree Siddhivinayaka Mandala Logo" className="navbar-logo" />
          <div className="navbar-brand-text">
            <span className="navbar-title">Shree Siddhivinayaka</span>
            <span className="navbar-subtitle">Malleshwara Badavane · Hiriyur</span>
          </div>
        </a>

        {/* Desktop Links */}
        <ul className="navbar-links">
          {navLinks.map(([id, label]) => (
            <li key={id}>
              <a href={`#${id}`} onClick={(e) => { e.preventDefault(); scrollTo(id); }}>
                {label}
              </a>
            </li>
          ))}
          <li>
            <a href="https://www.instagram.com/siddhivinayaka_hiriyur?stkn=MTN5a2ZqYTVobHAw" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="navbar-cta"
              onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}
            >
              🙏 Join Us
            </a>
          </li>
        </ul>

        {/* Mobile Hamburger */}
        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          aria-label="Toggle Menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="mobile-menu">
          {navLinks.map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={(e) => { e.preventDefault(); scrollTo(id); }}>
              {label}
            </a>
          ))}
          
          <a href="#contact" className="mobile-cta" onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}>
            🙏 Join Us
          </a>
          <a href="https://www.instagram.com/siddhivinayaka_hiriyur?stkn=MTN5a2ZqYTVobHAw" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </div>
      )}
    </nav>
  );
}
