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
    <section id="gallery" className="gallery-section section-spacing">
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
            Visual Portfolio
          </span>

          <h2 className="section-title">
            The Architectural <span style={{ fontStyle: 'italic', color: 'var(--gold-dark)', fontWeight: 500 }}>Collection</span>
          </h2>
          <p className="section-subtitle" style={{ color: 'var(--text-muted)' }}>
            A curated photographic exhibition capturing the spatial geometry and atmosphere of Rajadhani.
          </p>
        </motion.div>

        {/* Curated Gallery Grid */}
        <div className="gallery-grid">
          {GALLERY_ITEMS.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 35 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="card-luxury-light gallery-card"
              onClick={() => openLightbox(i)}
            >
              <div className="gallery-image-frame">
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                />

                <div className="gallery-hover-lens">
                  <div className="gallery-lens-icon">
                    <Maximize2 size={22} />
                  </div>
                </div>
              </div>

              <div className="gallery-caption">
                <span className="badge-gold">
                  {item.category}
                </span>
                <h3 className="gallery-title">
                  {item.title}
                </h3>
                <p className="gallery-desc">
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
            className="lightbox-modal"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="lightbox-close-btn"
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
                className="lightbox-nav-btn prev"
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
                className="lightbox-nav-btn next"
                aria-label="Next"
              >
                <ChevronRight size={30} />
              </button>
            )}

            {/* Display Plate */}
            <div className="lightbox-display-box" onClick={(e) => e.stopPropagation()}>
              <motion.img
                key={lightboxIndex}
                src={GALLERY_ITEMS[lightboxIndex].src}
                alt={GALLERY_ITEMS[lightboxIndex].alt}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              />

              <div style={{ marginTop: '1.25rem', textAlign: 'center' }}>
                <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', color: '#ffffff' }}>
                  {GALLERY_ITEMS[lightboxIndex].title}
                </p>
                <p style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--text-light)', marginTop: '0.35rem' }}>
                  {GALLERY_ITEMS[lightboxIndex].subtitle}
                </p>
                <p style={{ fontSize: '0.75rem', letterSpacing: '0.25em', color: 'var(--gold-light)', marginTop: '0.5rem', fontWeight: 600 }}>
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
