import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { IMAGES, VENUE } from '../data/venueData';

export default function About() {
  const { ref: sectionRef, isVisible } = useScrollAnimation(0.2);

  const pillars = [
    'Acoustically engineered tiered auditorium',
    'Uninterrupted 2,500+ seating capacity',
    'Dedicated luxury VIP & bridal suites',
    'Expansive landscaped grounds & 500+ vehicle bays',
  ];

  return (
    <section id="about" className="about-section section-spacing">
      <div className="about-ambient-glow" />

      <div ref={sectionRef} className="site-container" style={{ position: 'relative', zIndex: 10 }}>
        <div className="about-grid">
          {/* Editorial Image Frame */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="about-media-box"
          >
            <div className="about-photo-frame">
              <img
                src={IMAGES.exteriorFull}
                alt={`${VENUE.fullName} architectural facade`}
                loading="lazy"
              />
            </div>

            {/* Corner brackets */}
            <div className="about-corner-bracket-tl" />
            <div className="about-corner-bracket-br" />

            {/* Floating Scale Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.45, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="about-scale-card"
            >
              <p className="about-scale-val">
                50,000<span style={{ color: 'var(--gold-primary)', fontSize: '1.5rem', fontWeight: 300 }}>+</span>
              </p>
              <p className="about-scale-lbl">
                Square Feet Built Area
              </p>
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="about-content"
          >
            <span className="eyebrow">
              <span className="eyebrow-line" />
              The Venue Philosophy
            </span>

            <h2 className="section-title">
              An architectural stage for unforgettable{' '}
              <span style={{ fontStyle: 'italic', color: 'var(--gold-dark)', fontWeight: 500 }}>occasions</span>
            </h2>

            <div className="about-text-content">
              <p>
                {VENUE.fullName} was conceived with a singular vision: to create a benchmark venue
                where monumental architecture harmonizes with warm Indian hospitality. Every
                square foot is purpose-built to elevate life&apos;s defining milestones.
              </p>
              <p>
                From the grand double-height proscenium auditorium to our expansive open-air
                arrival portico, our spaces offer an unmatched sense of occasion, privacy, and
                technical excellence.
              </p>
            </div>

            {/* Pillars */}
            <div className="pillars-list">
              {pillars.map((item) => (
                <div key={item} className="pillar-item">
                  <span className="pillar-check-circle">
                    <Check size={11} strokeWidth={2.5} />
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '2.5rem', paddingTop: '1rem' }}>
              <a
                href="#spaces"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#spaces')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-primary"
              >
                Explore Venue Spaces
                <ArrowRight size={15} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}