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
    <section id="about" className="py-28 md:py-36 bg-[#fcfbf9] overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-radial-gold pointer-events-none opacity-50" />

      <div ref={sectionRef} className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Editorial Image Frame */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-stone-100 shadow-[0_30px_60px_-15px_rgba(20,18,14,0.25)]">
              <img
                src={IMAGES.exteriorFull}
                alt={`${VENUE.fullName} architectural facade`}
                className="w-full h-full object-cover transition-transform duration-[1400ms] ease-out hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
            </div>

            {/* Corner brackets — a quiet architectural motif, not a border box */}
            <div className="absolute -top-4 -left-4 w-10 h-10 border-t border-l border-gold/70 pointer-events-none hidden sm:block" />
            <div className="absolute -bottom-4 -right-4 w-10 h-10 border-b border-r border-gold/70 pointer-events-none hidden sm:block" />

            {/* Floating Scale Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.45, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="absolute bottom-6 right-4 sm:-bottom-6 sm:-right-8 bg-charcoal text-white p-6 sm:p-7 rounded-sm shadow-[0_20px_45px_rgba(20,18,14,0.3)]"
            >
              <p className="font-heading text-3xl sm:text-4xl font-normal">
                50,000<span className="text-gold text-2xl font-light">+</span>
              </p>
              <p className="text-[10px] text-stone-400 tracking-[0.2em] uppercase mt-1">
                Square Feet Built Area
              </p>
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6"
          >
            <span className="eyebrow">
              <span className="w-6 h-[1.5px] bg-gold inline-block" />
              The Venue Philosophy
            </span>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-charcoal mt-4 leading-[1.15] font-normal">
              An architectural stage for unforgettable{' '}
              <span className="italic text-gold-dark font-medium">occasions</span>
            </h2>

            <div className="mt-7 space-y-4 max-w-[54ch] text-charcoal-muted text-base lg:text-lg leading-relaxed font-light">
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
            <div className="mt-9 space-y-4 pt-7 border-t border-[#e8e5de]">
              {pillars.map((item) => (
                <div key={item} className="flex items-start gap-3.5 text-sm sm:text-base text-charcoal font-medium">
                  <span className="mt-0.5 w-5 h-5 rounded-full border border-gold/50 flex items-center justify-center flex-shrink-0">
                    <Check size={11} className="text-gold-dark" strokeWidth={2.5} />
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-4">
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