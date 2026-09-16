import './MarqueeStrip.css';

const ITEMS = [
  'Ganpati Bappa Morya',
  'Mangal Murti Morya',
  'Pudcha Varshi Laukar Ya',
  'Jai Siddhivinayaka',
  'Shree Ganeshaaya Namaha',
  'Vighnaharta Ki Jai',
  'Ganesh Chaturthi 2026',
];

export default function MarqueeStrip() {
  const doubled = [...ITEMS, ...ITEMS];
  return (
    <div className="marquee-strip" aria-label="Chants">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="marquee-item">
            <span className="marquee-star" aria-hidden="true">✦</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
