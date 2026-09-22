import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import heroVideo from '../assets/videos/hero-wedding.mp4';
import { IMAGES, STATS } from '../data/venueData';

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-obsidian">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={IMAGES.auditoriumInterior}
          className="w-full h-full object-cover scale-105"
          style={{ animation: 'scale-in 2.4s cubic-bezier(0.16, 1, 0.3, 1) forwards' }}
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
      </div>

      {/* Layered Cinematic Overlays — depth without flattening the footage */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/35 to-[#0b0c10]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_rgba(11,12,16,0.7)_100%)]" />
      {/* Fine film-grain texture keeps the black from feeling flat/digital */}
      <div
        className="absolute inset-0 opacity-[0.035] mix-blend-overlay pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Top Spacer */}
      <div className="relative z-10 pt-32" />

      {/* Central Hero Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 w-full text-center my-auto py-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-gold/40 backdrop-blur-xl bg-black/40 mb-8 shadow-[0_0_24px_rgba(197,160,89,0.18)]"
        >
          <Sparkles size={13} className="text-gold" />
          <span className="text-[11px] tracking-[0.24em] text-gold-bright uppercase font-semibold">
            Premier Convention Centre &amp; Auditorium
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="font-heading text-white text-4xl sm:text-6xl md:text-7xl lg:text-[6.5rem] font-normal leading-[1.05] max-w-5xl mx-auto tracking-tight"
        >
          Where exceptional <span className="italic font-light text-gold-shimmer">moments</span> unfold
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-7 text-stone-300 text-base sm:text-lg max-w-xl mx-auto font-light leading-relaxed"
        >
          An architectural icon engineered for royal weddings, high-level global summits, and
          grand cultural celebrations.
        </motion.p>

        {/* Minimal CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.85, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-11 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => scrollToSection('#spaces')}
            className="btn-gold w-full sm:w-auto shadow-[0_8px_30px_rgba(197,160,89,0.35)]"
          >
            Explore Spaces
            <ArrowRight size={15} />
          </button>
          <button
            onClick={() => scrollToSection('#contact')}
            className="btn-white-ghost w-full sm:w-auto"
          >
            Check Availability
          </button>
        </motion.div>
      </div>

      {/* Bottom Architectural Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full border-t border-gold/20 backdrop-blur-xl bg-black/50"
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-7">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
            {STATS.map((stat, i) => (
              <div
                key={stat.label}
                className={`flex flex-col md:border-r border-gold/15 last:border-r-0 transition-opacity duration-300 hover:opacity-80 ${
                  i % 2 === 0 ? '' : 'md:pl-8'
                }`}
              >
                <span className="font-heading text-2xl lg:text-[2rem] font-normal text-gold-light tracking-wide tabular-nums">
                  {stat.value}
                </span>
                <span className="text-[10.5px] tracking-[0.2em] uppercase text-stone-400 font-medium mt-1.5">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}