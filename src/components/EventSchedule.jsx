import './EventSchedule.css';

const DAYS = [
  {
    day: 1,
    date: 'September 14',
    weekday: 'Sunday',
    title: 'Ganesh Sthapana',
    subtitle: 'Arrival & Idol Installation',
    color: '#FF9432',
    emoji: '🪷',
    events: [
      { time: '7:00 AM',  label: 'Prana Pratishtha — Idol Installation & Muhurtham' },
      { time: '9:00 AM',  label: 'Ganesh Puja & Abhishekam — Sacred bath ritual' },
      { time: '11:00 AM', label: 'Prasad Distribution — Modak & sweets for all' },
      { time: '6:00 PM',  label: 'Sandhya Aarti — Evening prayers with diyas & bhajans' },
      { time: '8:00 PM',  label: 'Community Dinner — All families welcome' },
    ],
  },
  {
    day: 2,
    date: 'September 15',
    weekday: 'Monday',
    title: 'Bhajan & Devotion',
    subtitle: 'Music, Prayers & Cultural Events',
    color: '#FFD700',
    emoji: '🎵',
    events: [
      { time: '7:00 AM',  label: 'Morning Aarti — Prayers and floral offerings' },
      { time: '10:00 AM', label: 'Ganesh Sahasranama — 1000 names recitation' },
      { time: '4:00 PM',  label: 'Children\'s Cultural Program — Songs & dance' },
      { time: '6:30 PM',  label: 'Bhajan Sandhya — Community devotional singing' },
      { time: '8:30 PM',  label: 'Harikatha & Pravachana — Spiritual discourse' },
    ],
  },
  {
    day: 3,
    date: 'September 16',
    weekday: 'Tuesday',
    title: 'Grand Celebrations',
    subtitle: '🔴 TODAY — Day in Progress!',
    color: '#FF6B00',
    emoji: '🎊',
    isToday: true,
    events: [
      { time: '7:00 AM',  label: 'Morning Aarti — Prayers and offerings' },
      { time: '11:00 AM', label: 'Special Abhishekam & Archana' },
      { time: '3:00 PM',  label: 'Youth Cultural Programs — Skits & performances' },
      { time: '6:00 PM',  label: 'Grand Aarti & Deepotsava — 1008 diyas lit' },
      { time: '8:00 PM',  label: 'Musical Night — Live devotional performances' },
    ],
  },
  {
    day: 4,
    date: 'September 17',
    weekday: 'Wednesday',
    title: 'Visarjan',
    subtitle: 'Grand Farewell Procession',
    color: '#C8960C',
    emoji: '🌊',
    events: [
      { time: '7:00 AM',  label: 'Morning Aarti — Final prayers' },
      { time: '10:00 AM', label: 'Special Ganesh Puja & Uttarpuja' },
      { time: '1:00 PM',  label: 'Community Lunch — Feast for all devotees' },
      { time: '4:00 PM',  label: 'Visarjan Procession starts — Dhol & Band' },
      { time: '6:00 PM',  label: 'Ganpati Visarjan — With chants & celebration' },
    ],
  },
];

export default function EventSchedule() {
  return (
    <section className="schedule-section" id="schedule">
      <div className="container">
        <div className="section-header">
          <div className="section-divider">
            <span className="divider-line" />
            <span className="divider-icon">🎊</span>
            <span className="divider-line" />
          </div>
          <h2 className="section-title">4-Day Event Program</h2>
          <p className="section-subtitle">September 14 – 17, 2026 · Malleshwara Badavane, Hiriyur</p>
        </div>

        <div className="schedule-grid">
          {DAYS.map((day) => (
            <DayCard key={day.day} {...day} />
          ))}
        </div>
      </div>
    </section>
  );
}

function DayCard({ day, date, weekday, title, subtitle, color, emoji, isToday, events }) {
  return (
    <div className={`day-card ${isToday ? 'day-card--today' : ''}`}>
      {/* Today badge */}
      {isToday && <div className="today-badge">🔴 TODAY</div>}

      {/* Day header */}
      <div className="day-header" style={{ borderColor: color }}>
        <div className="day-number" style={{ color }}>Day {day}</div>
        <div className="day-date">{date}</div>
        <div className="day-weekday">{weekday}</div>
        <div className="day-emoji">{emoji}</div>
        <div className="day-title">{title}</div>
        <div className="day-subtitle" style={{ color: isToday ? '#ff6b6b' : 'var(--text-muted)' }}>
          {subtitle}
        </div>
      </div>

      {/* Events list */}
      <ul className="day-events">
        {events.map(({ time, label }) => (
          <li className="day-event" key={time}>
            <span className="event-time" style={{ color }}>{time}</span>
            <span className="event-label">{label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
