import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Snowflake,
  Speaker,
  Lightbulb,
  Car,
  Zap,
  Shield,
  Accessibility,
  UtensilsCrossed,
  Wifi,
  Monitor,
  DoorOpen,
  Users,
  Check,
  Sparkles,
} from 'lucide-react';
import { FACILITIES as FACILITIES_DATA } from '../data/venueData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Snowflake,
  Speaker,
  Lightbulb,
  Car,
  Zap,
  Shield,
  Accessibility,
  UtensilsCrossed,
  Wifi,
  Monitor,
  DoorOpen,
  Users,
};

const CATEGORIES = [
  { id: 'all', label: 'All Amenities' },
  { id: 'comfort', label: 'Grand Comfort' },
  { id: 'tech', label: 'AV & Technology' },
  { id: 'hospitality', label: 'VIP Hospitality' },
];

const CATEGORY_MAP: Record<string, string[]> = {
  comfort: ['Central Climate Control', 'Expansive Parking', 'Barrier-Free Access', 'Dual Power Backup'],
  tech: ['Acoustic Engineering', 'Intelligent Stage Lighting', 'LED Visual Displays', 'High-Speed Optical Wi-Fi'],
  hospitality: ['VIP Green Rooms', 'Bespoke Catering Hall', 'Concierge & Event Crew', 'Round-the-Clock Security'],
};

export default function Facilities() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredFacilities = FACILITIES_DATA.filter((item) => {
    if (activeCategory === 'all') return true;
    return CATEGORY_MAP[activeCategory]?.includes(item.title);
  });

  return (
    <section id="facilities" className="facilities-section section-spacing">
      <div ref={ref} className="site-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="section-header text-center"
        >
          <span className="eyebrow">
            <Sparkles size={13} style={{ color: 'var(--gold-primary)' }} />
            Comprehensive Infrastructure
          </span>

          <h2 className="section-title">
            World-Class <span style={{ fontStyle: 'italic', color: 'var(--gold-dark)', fontWeight: 500 }}>Amenities</span>
          </h2>
          <p className="section-subtitle" style={{ color: 'var(--text-muted)' }}>
            Every convenience thoughtfully anticipated to guarantee effortless, prestigious event execution.
          </p>
        </motion.div>

        {/* Category Filter Pills */}
        <div className="facilities-filter-row">
          {CATEGORIES.map((cat) => (
            <motion.button
              key={cat.id}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(cat.id)}
              className={`facilities-filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
            >
              {cat.label}
            </motion.button>
          ))}
        </div>

        {/* 12 Elevated Luxury Cards Grid */}
        <motion.div layout className="facilities-grid">
          <AnimatePresence>
            {filteredFacilities.map((facility, i) => {
              const IconComponent = ICON_MAP[facility.icon];
              return (
                <motion.div
                  layout
                  key={facility.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.35, delay: i * 0.03 }}
                  className="card-luxury-light facility-card"
                >
                  {/* Icon Medallion */}
                  <div className="facility-medallion">
                    {IconComponent && <IconComponent size={22} />}
                  </div>

                  <h3 className="facility-title">
                    {facility.title}
                  </h3>

                  <p className="facility-desc">
                    {facility.description}
                  </p>

                  <div className="facility-footer-tag">
                    <span>Executive Grade</span>
                    <Check size={14} style={{ color: 'var(--gold-primary)' }} />
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
