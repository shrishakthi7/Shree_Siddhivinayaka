import { useState } from 'react';
import './Contact.css';

const DETAILS = [
  {
    icon: '📍',
    title: 'Location',
    text: 'Malleshwara Badavane\nHiriyur, Chithradurg District\nKarnataka — 572143',
  },
  {
    icon: '📅',
    title: 'Event Dates',
    text: 'September 14 – 17, 2026\n3rd Year Ganesh Chaturthi Celebration',
  },
  {
    icon: '🕐',
    title: 'Timing',
    text: 'Morning Aarti: 7:00 AM\nEvening Aarti: 6:00 PM\nAll day open for darshan',
  },
  {
    icon: '🚗',
    title: 'How to Reach',
    text: 'Located inside Malleshwara Badavane\nlayout, Hiriyur town. Easily accessible\nfrom the main Hiriyur–Chithradurg road.',
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', phone: '', message: '' });
    setTimeout(() => setSent(false), 4500);
  };

  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="section-header">
          <div className="section-divider">
            <span className="divider-line" />
            <span className="divider-icon">🙏</span>
            <span className="divider-line" />
          </div>
          <h2 className="section-title">Join Our Celebration</h2>
          <p className="section-subtitle">All are welcome — come celebrate with us!</p>
        </div>

        <div className="contact-grid">

          {/* Info Cards */}
          <div className="contact-info">
            <h3 className="contact-info-heading">Event Details</h3>
            {DETAILS.map(({ icon, title, text }) => (
              <div className="contact-detail" key={title}>
                <span className="contact-icon">{icon}</span>
                <div>
                  <h4 className="contact-detail-title">{title}</h4>
                  <p className="contact-detail-text" style={{ whiteSpace: 'pre-line' }}>{text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="contact-form-wrapper">
            <h3 className="contact-form-heading">Send a Message</h3>

            {sent ? (
              <div className="form-success">
                <span className="success-emoji">🙏</span>
                <p className="success-title">Jai Siddhivinayaka!</p>
                <p className="success-sub">Your message has been received. Ganpati Bappa Morya! 🐘</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="cf-name">Your Name</label>
                  <input
                    id="cf-name"
                    type="text"
                    className="form-control"
                    placeholder="Enter your full name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="cf-phone">Phone Number</label>
                  <input
                    id="cf-phone"
                    type="tel"
                    className="form-control"
                    placeholder="+91 XXXXX XXXXX"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="cf-message">Message</label>
                  <textarea
                    id="cf-message"
                    className="form-control"
                    placeholder="Your message or inquiry about the celebration..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    required
                  />
                </div>
                <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  🙏 Send Message
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Google Map */}
        <div className="map-wrapper">
          <iframe
            title="Hiriyur, Chithradurg Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31019.36!2d76.6050!3d13.9410!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bba27cf60000001%3A0x0!2sHiriyur%2C+Karnataka!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
