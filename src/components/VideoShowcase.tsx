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
    <section className="py-28 md:py-36 bg-[#090a0e] relative overflow-hidden border-y border-gold/20">
      {/* Cinematic Ambient Glow Behind Video */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-radial-gold opacity-20 pointer-events-none blur-3xl" />

      <div ref={ref} className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-14 lg:mb-18"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/10 backdrop-blur-md mb-4">
            <Film size={13} className="text-gold" />
            <span className="text-[10.5px] tracking-[0.25em] text-gold-light uppercase font-semibold">
              Cinematic Experience
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-white mt-3 font-normal">
            A Glimpse Into <span className="italic text-gold-shimmer font-light">Excellence</span>
          </h2>
          <p className="mt-3 text-stone-300 text-sm sm:text-base font-light">
            Witness the grand ambiance, celebrations, and architectural majesty in motion.
          </p>
        </motion.div>

        {/* Video Frame */}
        <motion.div
          ref={lazyRef}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="max-w-5xl mx-auto p-3 sm:p-4 bg-[#14161f] border border-gold/35 rounded-2xl shadow-[0_25px_70px_rgba(0,0,0,0.8)] relative group cursor-pointer"
          onClick={togglePlay}
        >
          <div className="relative aspect-video overflow-hidden rounded-xl bg-black">
            {shouldLoad && (
              <video
                ref={videoRef}
                muted
                playsInline
                loop
                poster={IMAGES.auditoriumInterior}
                className="w-full h-full object-cover"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              >
                <source src={venueEventsVideo} type="video/mp4" />
              </video>
            )}

            {/* Video Dark Overlay when paused */}
            <div
              className={`absolute inset-0 transition-opacity duration-400 flex items-center justify-center ${
                isPlaying
                  ? 'bg-transparent opacity-0 group-hover:opacity-100 group-hover:bg-black/30'
                  : 'bg-black/50'
              }`}
            >
              {/* Luxury Play/Pause Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full border border-gold/70 backdrop-blur-xl bg-gold/20 hover:bg-gold flex items-center justify-center text-white transition-all duration-300 shadow-[0_0_30px_rgba(197,160,89,0.5)] cursor-pointer group/btn"
                onClick={(e) => {
                  e.stopPropagation();
                  togglePlay();
                }}
                aria-label={isPlaying ? 'Pause video' : 'Play video'}
              >
                {!isPlaying && (
                  <span className="absolute inset-0 rounded-full border border-gold animate-ping opacity-35 pointer-events-none" />
                )}
                {isPlaying ? <Pause size={28} /> : <Play size={28} className="ml-1 text-gold-bright group-hover/btn:text-white" />}
              </motion.button>
            </div>

            {/* Fullscreen Trigger */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleFullscreen();
              }}
              className="absolute top-4 right-4 p-2.5 text-white/80 hover:text-white bg-black/60 backdrop-blur-md rounded-lg border border-white/20 transition-colors opacity-0 group-hover:opacity-100"
              aria-label="Fullscreen"
            >
              <Maximize2 size={18} />
            </button>
          </div>

          {/* Bottom Editorial Quote */}
          <div className="py-6 px-4 text-center border-t border-white/10 mt-3">
            <p className="font-heading text-lg sm:text-xl text-gold-light italic font-light">
              &ldquo;More than a venue — a timeless setting for life&apos;s most cherished milestones.&rdquo;
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
