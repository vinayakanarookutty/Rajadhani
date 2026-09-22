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
  Sparkles,
  Check,
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

// Facility categories for interactive filtering
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
    <section id="facilities" className="py-28 md:py-36 bg-[#fcfbf9] overflow-hidden relative border-t border-[#e8e5de]">
      {/* Subtle Background Glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-radial-gold opacity-30 pointer-events-none" />

      <div ref={ref} className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-12 lg:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/10 backdrop-blur-md mb-4">
            <Sparkles size={13} className="text-gold" />
            <span className="text-[10.5px] tracking-[0.25em] text-gold-dark uppercase font-semibold">
              Comprehensive Infrastructure
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-charcoal mt-2 font-normal">
            World-Class <span className="italic text-gold-dark font-medium">Amenities</span>
          </h2>
          <p className="mt-3 text-muted text-sm sm:text-base font-light">
            Every convenience thoughtfully anticipated to guarantee flawless, effortless event execution.
          </p>
        </motion.div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-12">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs tracking-wider uppercase font-semibold transition-all duration-300 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-charcoal text-white shadow-md border border-charcoal'
                  : 'bg-white text-charcoal-muted border border-[#dfdbd2] hover:border-gold hover:text-charcoal'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* 12 Distinct Elevated Luxury Cards */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-7">
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
                  transition={{ duration: 0.4, delay: i * 0.03 }}
                  className="card-luxury-light p-7 sm:p-8 flex flex-col items-start border border-[#dfdbd2] group cursor-default relative overflow-hidden"
                >
                  {/* Subtle Gold Corner Highlight on Hover */}
                  <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-bl from-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                  {/* Icon Medallion */}
                  <div className="icon-medallion mb-6 shadow-xs">
                    {IconComponent && (
                      <IconComponent
                        size={22}
                        className="transition-transform duration-300 group-hover:scale-110"
                      />
                    )}
                  </div>

                  <h3 className="font-heading text-lg sm:text-xl text-charcoal font-medium group-hover:text-gold-dark transition-colors duration-200 leading-snug">
                    {facility.title}
                  </h3>

                  <p className="text-charcoal-muted text-xs sm:text-sm mt-2.5 leading-relaxed font-light">
                    {facility.description}
                  </p>

                  {/* Micro indicator */}
                  <div className="mt-6 pt-4 border-t border-[#eeebe5] w-full flex items-center justify-between text-[11px] text-gold-dark font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="tracking-wider uppercase">Premium Grade</span>
                    <Check size={14} className="text-gold" />
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
