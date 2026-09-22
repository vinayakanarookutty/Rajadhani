import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { SPACES } from '../data/venueData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Spaces() {
  const [activeTab, setActiveTab] = useState(0);
  const { ref, isVisible } = useScrollAnimation(0.1);
  const currentSpace = SPACES[activeTab];

  return (
    <section id="spaces" className="spaces-section section-spacing">
      <div ref={ref} className="site-container">
        {/* Section Header Bar */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="spaces-header-bar"
        >
          <div>
            <span className="eyebrow">
              <span className="eyebrow-line" />
              Spatial Masterpieces
            </span>
            <h2 className="section-title">
              Curated <span style={{ fontStyle: 'italic', color: 'var(--gold-dark)', fontWeight: 500 }}>Event Spaces</span>
            </h2>
          </div>
          <p className="section-subtitle" style={{ maxWidth: '28rem', color: 'var(--text-muted)' }}>
            Engineered with majestic proportions and flexible layouts to accommodate intimate VIP
            gatherings or grand multi-thousand guest spectacles.
          </p>
        </motion.div>

        {/* Space Selector Tabs with Micro-animations */}
        <div className="spaces-tab-nav">
          {SPACES.map((space, idx) => (
            <motion.button
              key={space.id}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => setActiveTab(idx)}
              className={`space-tab-btn ${activeTab === idx ? 'active' : ''}`}
            >
              {activeTab === idx && <Sparkles size={13} style={{ color: 'var(--gold-primary)' }} />}
              {space.title}
            </motion.button>
          ))}
        </div>

        {/* Space Showcase Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSpace.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="space-showcase-grid"
          >
            {/* Left: Star Photo Card */}
            <div className="space-photo-container">
              <img
                src={currentSpace.image}
                alt={currentSpace.title}
              />
              <div className="space-photo-scrim" />

              {/* Badge Overlay */}
              <div className="space-badge-overlay">
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--gold-primary)' }} />
                {currentSpace.badge}
              </div>

              {/* Bottom Image Caption */}
              <div className="space-caption-overlay">
                <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 400 }}>
                  {currentSpace.title}
                </p>
                <p style={{ fontSize: '0.75rem', color: '#e5e7eb', textTransform: 'uppercase', letterSpacing: '0.18em', marginTop: '0.25rem' }}>
                  {currentSpace.subtitle}
                </p>
              </div>
            </div>

            {/* Right: Specifications & Details Card */}
            <div className="card-luxury-light space-details-box">
              <div>
                <span className="badge-gold">
                  {currentSpace.subtitle}
                </span>

                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.85rem', fontWeight: 400, marginTop: '0.85rem', lineHeight: 1.25 }}>
                  {currentSpace.title}
                </h3>

                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginTop: '1rem', lineHeight: 1.7, fontWeight: 300 }}>
                  {currentSpace.description}
                </p>

                {/* Architectural Specs Grid */}
                <div className="space-specs-grid">
                  {currentSpace.specs.map((spec) => (
                    <div key={spec.label} className="space-spec-cell">
                      <p className="space-spec-lbl">
                        {spec.label}
                      </p>
                      <p className="space-spec-val">
                        {spec.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid var(--stone-border-light)' }}>
                <motion.a
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="btn-gold"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  Reserve This Space
                  <ArrowRight size={15} />
                </motion.a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
