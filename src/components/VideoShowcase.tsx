import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Play, Pause, Maximize2, Film } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useLazyLoad } from '../hooks/useScrollAnimation';
import venueEventsVideo from '../assets/videos/venue-events.mp4';
import { IMAGES } from '../data/venueData';

export default function VideoShowcase() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { ref, isVisible } = useScrollAnimation(0.15);
  const { ref: lazyRef, shouldLoad } = useLazyLoad();

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleFullscreen = () => {
    if (!videoRef.current) return;
    if (videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <section className="cinema-section section-spacing">
      <div ref={ref} className="site-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="section-header text-center"
        >
          <span className="eyebrow text-gold-light">
            <Film size={13} style={{ color: 'var(--gold-primary)' }} />
            Cinematic Experience
          </span>

          <h2 className="section-title" style={{ color: '#ffffff' }}>
            A Glimpse Into <span className="text-gold-shimmer" style={{ fontStyle: 'italic', fontWeight: 300 }}>Excellence</span>
          </h2>
          <p className="section-subtitle" style={{ color: 'var(--text-light)' }}>
            Witness the grand ambiance, celebrations, and architectural majesty in motion.
          </p>
        </motion.div>

        {/* Video Frame */}
        <motion.div
          ref={lazyRef}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="cinema-screen-wrap"
          onClick={togglePlay}
        >
          <div className="cinema-video-frame">
            {shouldLoad && (
              <video
                ref={videoRef}
                muted
                playsInline
                loop
                poster={IMAGES.auditoriumInterior}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              >
                <source src={venueEventsVideo} type="video/mp4" />
              </video>
            )}

            {/* Dark Overlay with Luxury Play Button */}
            <div className={`cinema-overlay-trigger ${isPlaying ? 'playing' : ''}`}>
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="cinema-play-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  togglePlay();
                }}
                aria-label={isPlaying ? 'Pause video' : 'Play video'}
              >
                {isPlaying ? <Pause size={28} /> : <Play size={28} style={{ marginLeft: '4px' }} />}
              </motion.button>
            </div>

            {/* Fullscreen Trigger */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleFullscreen();
              }}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                padding: '0.6rem',
                borderRadius: 'var(--radius-sm)',
                backgroundColor: 'rgba(0,0,0,0.5)',
                color: '#ffffff',
              }}
              aria-label="Fullscreen"
            >
              <Maximize2 size={18} />
            </button>
          </div>

          {/* Bottom Editorial Quote */}
          <div className="cinema-quote-bar">
            <p className="cinema-quote-text">
              &ldquo;More than a venue — a timeless setting for life&apos;s most cherished milestones.&rdquo;
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
