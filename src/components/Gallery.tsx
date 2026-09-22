import { useState, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Maximize2, Sparkles } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/venueData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const { ref, isVisible } = useScrollAnimation(0.1);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = useCallback(() => {
    setLightboxIndex(null);
    document.body.style.overflow = '';
  }, []);

  const navigateLightbox = useCallback(
    (dir: 1 | -1) => {
      if (lightboxIndex === null) return;
      const next = lightboxIndex + dir;
      if (next >= 0 && next < GALLERY_ITEMS.length) {
        setLightboxIndex(next);
      }
    },
    [lightboxIndex]
  );

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowLeft') navigateLightbox(-1);
      if (e.key === 'ArrowRight') navigateLightbox(1);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxIndex, closeLightbox, navigateLightbox]);

  return (
    <section id="gallery" className="py-28 md:py-36 bg-[#fcfbf9] overflow-hidden relative">
      {/* Background Ambience */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-radial-gold opacity-30 pointer-events-none" />

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
            <span className="text-[10.5px] tracking-[0.25em] text-gold-dark uppercase font-semibold">
              Visual Portfolio
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-charcoal mt-2 font-normal">
            The Architectural <span className="italic text-gold-dark font-medium">Collection</span>
          </h2>
          <p className="mt-3 text-muted text-sm sm:text-base font-light">
            A curated photographic exhibition capturing the spatial geometry and royal atmosphere of
            Rajadhani.
          </p>
        </motion.div>

        {/* Curated 3-Item Exhibition Grid with Distinct Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          {GALLERY_ITEMS.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 35 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="card-luxury-light p-4 sm:p-5 border border-[#dfdbd2] rounded-2xl group cursor-pointer shadow-lg"
              onClick={() => openLightbox(i)}
            >
              {/* Image Frame with Double Border */}
              <div className="relative overflow-hidden aspect-[4/3] rounded-xl bg-stone-100 border border-stone-200">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-800 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Hover Reveal Action with Gold Badge */}
                <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-xs">
                  <div className="w-14 h-14 rounded-full bg-gold/90 backdrop-blur-md flex items-center justify-center text-white shadow-xl transform scale-75 group-hover:scale-100 transition-transform duration-300">
                    <Maximize2 size={22} />
                  </div>
                </div>
              </div>

              {/* Museum-Style Annotation */}
              <div className="pt-5 pb-2 px-2">
                <span className="badge-gold mb-2">
                  {item.category}
                </span>
                <h3 className="font-heading text-xl text-charcoal font-medium mt-1 group-hover:text-gold-dark transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted text-xs sm:text-sm mt-1 font-light leading-relaxed">
                  {item.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxIndex !== null && GALLERY_ITEMS[lightboxIndex] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white/70 hover:text-white p-3 rounded-full bg-white/10 backdrop-blur-md transition-colors cursor-pointer z-20 hover:bg-gold"
              aria-label="Close lightbox"
            >
              <X size={24} />
            </button>

            {/* Nav Arrows */}
            {lightboxIndex > 0 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateLightbox(-1);
                }}
                className="absolute left-4 lg:left-8 text-white/80 hover:text-white p-4 rounded-full bg-white/10 backdrop-blur-md z-20 cursor-pointer hover:bg-gold transition-colors"
                aria-label="Previous"
              >
                <ChevronLeft size={30} />
              </button>
            )}

            {lightboxIndex < GALLERY_ITEMS.length - 1 && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  navigateLightbox(1);
                }}
                className="absolute right-4 lg:right-8 text-white/80 hover:text-white p-4 rounded-full bg-white/10 backdrop-blur-md z-20 cursor-pointer hover:bg-gold transition-colors"
                aria-label="Next"
              >
                <ChevronRight size={30} />
              </button>
            )}

            {/* Display Plate */}
            <div className="max-w-5xl max-h-[85vh] flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
              <motion.img
                key={lightboxIndex}
                src={GALLERY_ITEMS[lightboxIndex].src}
                alt={GALLERY_ITEMS[lightboxIndex].alt}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="max-w-full max-h-[72vh] object-contain rounded-xl shadow-2xl border border-gold/30"
              />

              <div className="mt-5 text-center">
                <p className="text-white font-heading text-2xl font-normal">
                  {GALLERY_ITEMS[lightboxIndex].title}
                </p>
                <p className="text-stone-300 text-xs tracking-wider uppercase mt-1">
                  {GALLERY_ITEMS[lightboxIndex].subtitle}
                </p>
                <p className="text-gold-light text-xs tracking-widest mt-2 font-semibold">
                  0{lightboxIndex + 1} / 0{GALLERY_ITEMS.length}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
