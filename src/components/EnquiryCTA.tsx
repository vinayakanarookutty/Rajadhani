import { motion } from 'framer-motion';
import { Calendar, PhoneCall, Sparkles } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function EnquiryCTA() {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section className="py-24 md:py-32 bg-[#090a0d] relative overflow-hidden border-y border-gold/25">
      {/* Radiant Gold Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-radial-gold opacity-30 pointer-events-none blur-3xl" />

      <div ref={ref} className="max-w-[1440px] mx-auto px-6 lg:px-12 flex items-center justify-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative max-w-4xl w-full bg-gradient-to-b from-[#161821] to-[#0f1117] p-10 sm:p-16 lg:p-20 border border-gold/40 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.6)] text-center"
        >
          {/* Decorative Gold Corner Brackets */}
          <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-gold/70 pointer-events-none rounded-tl-sm" />
          <div className="absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 border-gold/70 pointer-events-none rounded-tr-sm" />
          <div className="absolute bottom-6 left-6 w-8 h-8 border-b-2 border-l-2 border-gold/70 pointer-events-none rounded-bl-sm" />
          <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-gold/70 pointer-events-none rounded-br-sm" />

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/10 backdrop-blur-md mb-6">
            <Sparkles size={13} className="text-gold" />
            <span className="text-[10.5px] tracking-[0.25em] text-gold-light uppercase font-semibold">
              Personalized Consultation
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-white font-normal leading-[1.15]">
            Let&apos;s Create An <span className="italic text-gold-shimmer font-light">Extraordinary</span> Occasion
          </h2>

          <p className="mt-5 text-stone-300 text-sm sm:text-base max-w-xl mx-auto leading-relaxed font-light">
            Our experienced event coordination directors are available to guide you through dates,
            spatial configurations, and technical services.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-gold w-full sm:w-auto shadow-[0_10px_30px_rgba(197,160,89,0.35)]"
            >
              <Calendar size={16} />
              Schedule A Private Tour
            </a>

            <a
              href="tel:+919876543210"
              className="btn-white-ghost w-full sm:w-auto"
            >
              <PhoneCall size={16} />
              Speak With Concierge
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
