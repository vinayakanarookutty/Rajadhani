import { motion } from 'framer-motion';
import { HIGHLIGHTS } from '../data/venueData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ArrowUpRight } from 'lucide-react';

export default function Highlights() {
  const { ref, isVisible } = useScrollAnimation(0.15);

  return (
    <section className="highlights-section section-spacing">
      <div className="site-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="section-header"
          style={{ maxWidth: '42rem' }}
        >
          <span className="eyebrow text-gold-light">
            <span className="eyebrow-line" />
            Architectural Excellence
          </span>

          <h2 className="section-title" style={{ color: '#ffffff' }}>
            Engineered for prestige <span className="text-gold-shimmer" style={{ fontStyle: 'italic', fontWeight: 300 }}>and scale</span>
          </h2>
          <p className="section-subtitle" style={{ color: 'var(--text-light)' }}>
            Every architectural facet has been calibrated to deliver effortless comfort, majestic
            sightlines, and uncompromising standards.
          </p>
        </motion.div>

        {/* Highlight Cards Grid */}
        <div ref={ref} className="highlights-grid">
          {HIGHLIGHTS.map((item, i) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 28 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="highlight-card"
            >
              <div>
                <div className="highlight-card-header">
                  <span className="highlight-card-num">
                    {item.number}
                  </span>
                  <div className="highlight-arrow-badge">
                    <ArrowUpRight size={14} />
                  </div>
                </div>

                <div>
                  <p className="highlight-metric-val">
                    {item.metric}
                  </p>
                  <p className="highlight-metric-unit">
                    {item.unit}
                  </p>
                </div>

                <h3 className="highlight-card-title">
                  {item.title}
                </h3>

                <p className="highlight-card-desc">
                  {item.description}
                </p>
              </div>

              {/* Bottom Hairline Accent */}
              <div className="highlight-draw-line">
                <div className="highlight-draw-line-inner" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}