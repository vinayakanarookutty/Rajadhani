import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { VENUE, NAV_LINKS } from '../data/venueData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-[#0e1015]/90 backdrop-blur-xl py-3.5 shadow-[0_10px_40px_rgba(0,0,0,0.35)] border-b border-gold/20'
            : 'bg-gradient-to-b from-black/50 to-transparent py-5 lg:py-6'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 flex items-center justify-between">
          {/* Brand Mark */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="flex items-center gap-3.5 group cursor-pointer"
          >
            <div className="relative w-10 h-10 border border-gold/60 flex items-center justify-center bg-black/40 backdrop-blur-md rounded-lg group-hover:border-gold transition-all duration-300 group-hover:shadow-[0_0_18px_rgba(197,160,89,0.4)]">
              <span className="font-heading text-lg font-bold text-gold-light group-hover:text-gold transition-colors">
                {VENUE.name?.charAt(0) ?? 'R'}
              </span>
              <div className="absolute inset-0.5 border border-gold/20 pointer-events-none rounded-[6px]" />
            </div>
            <div>
              <p className="font-heading text-lg font-semibold tracking-wide leading-tight text-white">
                {VENUE.name}
              </p>
              <p className="text-[9.5px] tracking-[0.28em] uppercase font-body font-medium text-gold/80">
                Convention Centre
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-9">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="text-[12px] tracking-[0.18em] uppercase font-medium relative group py-1 text-white/75 hover:text-gold-light transition-colors duration-200"
              >
                {link.label}
                <span className="absolute -bottom-0.5 left-1/2 w-0 h-px bg-gold group-hover:left-0 group-hover:w-full transition-all duration-300 ease-out" />
              </a>
            ))}
          </div>

          {/* Desktop Enquire CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
              className="btn-gold !py-2.5 !px-6 !text-xs !tracking-[0.16em]"
            >
              Enquire
              <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-white hover:text-gold transition-colors cursor-pointer"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Fullscreen Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#0d0e13] flex flex-col justify-between px-8 py-24 text-white"
          >
            <div className="flex flex-col gap-1">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.06, duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-baseline gap-4 py-3.5 border-b border-white/10 group"
                >
                  <span className="text-[11px] text-gold/60 tabular-nums">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-heading text-3xl text-white/90 group-hover:text-gold-light transition-colors">
                    {link.label}
                  </span>
                </motion.a>
              ))}
            </div>

            <div className="pt-8 border-t border-white/10">
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#contact');
                }}
                className="btn-gold w-full justify-center"
              >
                Plan Your Event
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}