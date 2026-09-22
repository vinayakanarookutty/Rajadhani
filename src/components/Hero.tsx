import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import heroVideo from '../assets/videos/hero-wedding.mp4';
import { IMAGES, STATS, CONTACT } from '../data/venueData';

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero-section">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        poster={IMAGES.auditoriumInterior}
        className="hero-video-bg"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Cinematic Overlays */}
      <div className="hero-scrim-dark" />
      <div className="hero-scrim-radial" />

      {/* Central Hero Content */}
      <div className="hero-content">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'center', marginBottom: '2rem' }}
        >
          <div className="hero-pill-badge" style={{ marginBottom: 0 }}>
            <Sparkles size={13} style={{ color: 'var(--gold-primary)' }} />
            <span className="hero-pill-text">
              Alappuzha, Kerala &bull; Convention Centre
            </span>
          </div>

          <a
            href={CONTACT.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-pill-badge"
            style={{ marginBottom: 0, textDecoration: 'none', cursor: 'pointer' }}
          >
            <span style={{ color: '#fbbf24', fontSize: '0.85rem' }}>★</span>
            <span className="hero-pill-text" style={{ color: '#ffffff' }}>
              4.0 ({CONTACT.reviewCount} Google Reviews)
            </span>
          </a>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="hero-headline"
        >
          Where exceptional <span className="text-gold-shimmer" style={{ fontStyle: 'italic', fontWeight: 300 }}>moments</span> unfold
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="hero-subhead"
        >
          An architectural icon engineered for royal weddings, high-level global summits, and
          grand cultural celebrations.
        </motion.p>

        {/* Minimal CTAs with Micro-animations */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="hero-cta-group"
        >
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => scrollToSection('#spaces')}
            className="btn-gold"
          >
            Explore Spaces
            <ArrowRight size={15} />
          </motion.button>
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => scrollToSection('#contact')}
            className="btn-white-ghost"
          >
            Check Availability
          </motion.button>
        </motion.div>
      </div>

      {/* Bottom Architectural Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="hero-stats-band"
      >
        <div className="site-container">
          <div className="hero-stats-grid">
            {STATS.map((stat) => (
              <motion.div
                key={stat.label}
                whileHover={{ y: -2 }}
                className="hero-stat-card"
              >
                <span className="hero-stat-value">
                  {stat.value}
                </span>
                <span className="hero-stat-label">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}