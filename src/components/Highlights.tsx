import { motion } from 'framer-motion';
import { HIGHLIGHTS } from '../data/venueData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ArrowUpRight } from 'lucide-react';

export default function Highlights() {
  const { ref, isVisible } = useScrollAnimation(0.15);

  return (
    <section className="py-28 md:py-36 bg-[#0c0d12] relative overflow-hidden border-y border-gold/20">
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-radial-gold opacity-25 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[radial-gradient(circle_at_bottom_right,_rgba(197,160,89,0.1),_transparent_70%)] pointer-events-none" />

      <div ref={ref} className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mb-16 lg:mb-24"
        >
          <span className="eyebrow text-gold-light">
            <span className="w-6 h-[1.5px] bg-gold inline-block" />
            Architectural Excellence
          </span>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-white mt-4 font-normal leading-tight max-w-xl">
            Engineered for prestige <span className="italic text-gold-shimmer font-light">and scale</span>
          </h2>
          <p className="mt-4 text-stone-400 text-base lg:text-lg font-light leading-relaxed max-w-lg">
            Every architectural facet has been calibrated to deliver effortless comfort, majestic
            sightlines, and uncompromising standards.
          </p>
        </motion.div>

        {/* Highlight Cards — numbered because these are the venue's four defining facts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/[0.06] rounded-sm overflow-hidden">
          {HIGHLIGHTS.map((item, i) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 28 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="bg-[#0c0d12] p-8 sm:p-9 flex flex-col justify-between group relative"
            >
              <div>
                <div className="flex items-center justify-between pb-5 mb-6">
                  <span className="text-xs font-semibold tracking-[0.25em] text-gold/70 font-body">
                    {item.number}
                  </span>
                  <div className="w-8 h-8 rounded-full border border-gold/25 flex items-center justify-center text-gold/50 group-hover:text-charcoal group-hover:bg-gold group-hover:border-gold transition-all duration-300">
                    <ArrowUpRight size={14} />
                  </div>
                </div>

                <div className="mb-6">
                  <p className="font-heading text-4xl lg:text-5xl font-normal text-gold-bright tracking-tight">
                    {item.metric}
                  </p>
                  <p className="text-[11px] tracking-[0.2em] uppercase text-stone-500 font-medium mt-1.5">
                    {item.unit}
                  </p>
                </div>

                <h3 className="font-heading text-xl text-white font-medium leading-snug">
                  {item.title}
                </h3>

                <p className="text-stone-400 text-sm mt-3.5 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>

              {/* Hairline accent that draws on hover — one motion cue, not a background glow */}
              <div className="pt-8 mt-6">
                <div className="h-px w-full bg-white/10 relative overflow-hidden">
                  <div className="absolute inset-y-0 left-0 w-0 bg-gold group-hover:w-full transition-all duration-500 ease-out" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}