import { motion } from 'framer-motion';
import { ArrowRight, Check, Sparkles } from 'lucide-react';
import { EVENT_TYPES } from '../data/venueData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Events() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="events" className="py-28 md:py-36 bg-[#0b0c10] relative overflow-hidden border-y border-gold/20">
      {/* Ambient Radial Lights */}
      <div className="absolute top-0 left-1/3 w-[600px] h-[400px] bg-radial-gold opacity-20 pointer-events-none blur-3xl" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-radial-gold opacity-15 pointer-events-none blur-2xl" />

      <div ref={ref} className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16 lg:mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/10 backdrop-blur-md mb-4">
            <Sparkles size={13} className="text-gold" />
            <span className="text-[10.5px] tracking-[0.25em] text-gold-light uppercase font-semibold">
              Tailored Experiences
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-white mt-3 font-normal">
            Bespoke Occasions, <span className="italic text-gold-shimmer font-light">Flawless</span> Hosting
          </h2>
          <p className="mt-3 text-stone-300 text-sm sm:text-base font-light">
            Every celebration and corporate milestone is elevated by versatile spaces and dedicated
            event coordination.
          </p>
        </motion.div>

        {/* 4 Distinct Elevated Luxury Cards */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {EVENT_TYPES.map((event, i) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="card-luxury-dark p-8 sm:p-10 lg:p-12 border border-gold/25 rounded-2xl flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Subtle hover gradient bloom */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl group-hover:bg-gold/20 transition-all duration-500 pointer-events-none" />

              <div>
                {/* Header of Card */}
                <div className="flex items-center justify-between pb-6 border-b border-white/10">
                  <span className="text-xs font-semibold tracking-[0.25em] text-gold font-body">
                    {event.number}
                  </span>
                  <span className="badge-gold-dark">
                    {event.capacity}
                  </span>
                </div>

                {/* Event Title */}
                <div className="mt-7">
                  <p className="text-xs font-semibold tracking-[0.18em] uppercase text-gold font-body">
                    {event.subtitle}
                  </p>
                  <h3 className="font-heading text-2xl sm:text-3xl text-white font-normal mt-2 leading-snug group-hover:text-gold-bright transition-colors duration-200">
                    {event.title}
                  </h3>
                  <p className="text-stone-300 text-sm sm:text-base mt-4 leading-relaxed font-light">
                    {event.description}
                  </p>
                </div>

                {/* Highlights List */}
                <div className="mt-8 space-y-3 pt-6 border-t border-white/10">
                  {event.highlights.map((hl) => (
                    <div key={hl} className="flex items-center gap-3 text-xs sm:text-sm text-stone-200">
                      <div className="w-5 h-5 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 border border-gold/40">
                        <Check size={12} className="text-gold-light" />
                      </div>
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Link */}
              <div className="mt-10 pt-6 border-t border-white/10">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 text-xs tracking-[0.18em] uppercase font-semibold text-gold-light group-hover:text-white transition-colors"
                >
                  <span>Plan Your {event.title.split(' ')[0]}</span>
                  <ArrowRight size={14} className="transition-transform group-hover:translate-x-1 text-gold" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
