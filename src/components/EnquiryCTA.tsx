import { motion } from 'framer-motion';
import { Calendar, PhoneCall, Sparkles } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function EnquiryCTA() {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section className="cta-section">
      <div ref={ref} className="site-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="cta-invitation-box"
        >
          {/* Filigree corner brackets */}
          <div className="cta-filigree-tl" />
          <div className="cta-filigree-tr" />
          <div className="cta-filigree-bl" />
          <div className="cta-filigree-br" />

          <span className="eyebrow text-gold-light" style={{ marginBottom: '1.25rem' }}>
            <Sparkles size={13} style={{ color: 'var(--gold-primary)' }} />
            Personalized Consultation
          </span>

          <h2 className="section-title" style={{ color: '#ffffff' }}>
            Let&apos;s Create An <span className="text-gold-shimmer" style={{ fontStyle: 'italic', fontWeight: 300 }}>Extraordinary</span> Occasion
          </h2>

          <p className="section-subtitle" style={{ color: '#d1d5db', maxWidth: '36rem', margin: '1.25rem auto 0' }}>
            Our experienced event coordination directors are available to guide you through dates,
            spatial configurations, and technical services.
          </p>

          <div className="cta-action-row">
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.96 }}
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-gold"
            >
              <Calendar size={16} />
              Schedule A Private Tour
            </motion.a>

            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.96 }}
              href="tel:+919876543210"
              className="btn-white-ghost"
            >
              <PhoneCall size={16} />
              Speak With Concierge
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
