import { motion } from 'framer-motion';
import { ArrowRight, Check, Sparkles } from 'lucide-react';
import { EVENT_TYPES } from '../data/venueData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Events() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="events" className="events-section section-spacing">
      <div ref={ref} className="site-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="section-header text-center"
        >
          <span className="eyebrow text-gold-light">
            <Sparkles size={13} style={{ color: 'var(--gold-primary)' }} />
            Tailored Experiences
          </span>

          <h2 className="section-title" style={{ color: '#ffffff' }}>
            Bespoke Occasions, <span className="text-gold-shimmer" style={{ fontStyle: 'italic', fontWeight: 300 }}>Flawless</span> Hosting
          </h2>
          <p className="section-subtitle" style={{ color: 'var(--text-light)' }}>
            Every celebration and corporate milestone is elevated by versatile spaces and dedicated event coordination.
          </p>
        </motion.div>

        {/* 4 Distinct Elevated Luxury Cards */}
        <div className="events-grid">
          {EVENT_TYPES.map((event, i) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.99 }}
              className="card-luxury-dark event-card"
            >
              <div>
                {/* Header of Card */}
                <div className="event-card-header">
                  <span className="event-num-tag">
                    {event.number}
                  </span>
                  <span className="badge-gold-dark">
                    {event.capacity}
                  </span>
                </div>

                {/* Event Title */}
                <div>
                  <p className="event-subhead">
                    {event.subtitle}
                  </p>
                  <h3 className="event-title">
                    {event.title}
                  </h3>
                  <p className="event-desc">
                    {event.description}
                  </p>
                </div>

                {/* Highlights Checklist */}
                <div className="event-checklist">
                  {event.highlights.map((hl) => (
                    <div key={hl} className="event-check-item">
                      <div className="event-check-dot">
                        <Check size={12} strokeWidth={2.5} />
                      </div>
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Link */}
              <div className="event-card-action">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="event-action-link"
                >
                  <span>Plan Your {event.title.split(' ')[0]}</span>
                  <ArrowRight size={14} style={{ color: 'var(--gold-primary)' }} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
