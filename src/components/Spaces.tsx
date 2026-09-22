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
    <section id="spaces" className="py-28 md:py-36 bg-[#fcfbf9] overflow-hidden relative">
      {/* Background Subtle Ambience */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-radial-gold opacity-50 pointer-events-none -translate-y-1/2" />

      <div ref={ref} className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14 lg:mb-18 pb-8 border-b border-[#e5e2da]"
        >
          <div>
            <span className="eyebrow">
              <span className="w-6 h-[1.5px] bg-gold inline-block" />
              Spatial Masterpieces
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-charcoal mt-4 font-normal">
              Curated <span className="italic text-gold-dark font-medium">Event Spaces</span>
            </h2>
          </div>
          <p className="text-muted max-w-md text-sm sm:text-base font-light leading-relaxed">
            Engineered with majestic proportions and flexible layouts to accommodate intimate VIP
            gatherings or grand multi-thousand guest spectacles.
          </p>
        </motion.div>

        {/* Space Selector Tabs - Luxury Segmented Control */}
        <div className="flex flex-wrap gap-4 mb-12">
          {SPACES.map((space, idx) => (
            <button
              key={space.id}
              onClick={() => setActiveTab(idx)}
              className={`px-8 py-4 text-xs tracking-[0.18em] uppercase font-semibold transition-all duration-300 cursor-pointer rounded-xl border flex items-center gap-2.5 ${
                activeTab === idx
                  ? 'bg-charcoal text-white border-charcoal shadow-lg shadow-black/10'
                  : 'bg-white text-charcoal-muted border-[#dfdbd2] hover:border-gold hover:text-charcoal shadow-xs'
              }`}
            >
              {activeTab === idx && <Sparkles size={13} className="text-gold" />}
              {space.title}
            </button>
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
            className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-stretch"
          >
            {/* Left: Star Photo Card */}
            <div className="lg:col-span-7 relative group flex flex-col">
              <div className="relative overflow-hidden rounded-2xl bg-stone-100 border border-[#dfdbd2] shadow-xl flex-1 min-h-[420px]">
                <img
                  src={currentSpace.image}
                  alt={currentSpace.title}
                  className="w-full h-full object-cover transition-transform duration-800 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />

                {/* Badge Overlay */}
                <div className="absolute top-6 left-6 px-4 py-2 bg-black/60 backdrop-blur-md text-[11px] tracking-[0.2em] uppercase font-semibold text-gold-bright rounded-lg shadow-md border border-gold/40 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
                  {currentSpace.badge}
                </div>

                {/* Bottom Image Caption */}
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <p className="font-heading text-2xl font-normal text-white drop-shadow">
                    {currentSpace.title}
                  </p>
                  <p className="text-xs text-stone-300 mt-1 uppercase tracking-widest font-light">
                    {currentSpace.subtitle}
                  </p>
                </div>
              </div>
            </div>

            {/* Right: Specifications & Details Card */}
            <div className="lg:col-span-5 card-luxury-light p-8 sm:p-10 flex flex-col justify-between border border-[#dfdbd2]">
              <div>
                <span className="badge-gold mb-3">
                  {currentSpace.subtitle}
                </span>

                <h3 className="font-heading text-2xl sm:text-3xl text-charcoal font-normal mt-3 leading-tight">
                  {currentSpace.title}
                </h3>

                <p className="text-charcoal-muted text-sm sm:text-base mt-4 leading-relaxed font-light">
                  {currentSpace.description}
                </p>

                {/* Architectural Specs Grid */}
                <div className="mt-8 grid grid-cols-2 gap-4 pt-6 border-t border-[#eeebe5]">
                  {currentSpace.specs.map((spec) => (
                    <div
                      key={spec.label}
                      className="p-4 bg-[#fbf9f5] border border-[#e5e2da] rounded-xl shadow-2xs hover:border-gold/50 transition-colors"
                    >
                      <p className="text-[10px] tracking-[0.2em] uppercase text-gold-dark font-semibold">
                        {spec.label}
                      </p>
                      <p className="font-heading text-base sm:text-lg text-charcoal font-semibold mt-1">
                        {spec.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-6 border-t border-[#eeebe5]">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="btn-gold w-full justify-center"
                >
                  Reserve This Space
                  <ArrowRight size={15} />
                </a>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
