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
        className={`site-navbar ${scrolled ? 'scrolled' : ''}`}
      >
        <div className="site-container navbar-inner">
          {/* Brand Mark */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
            className="navbar-brand"
          >
            <div className="navbar-crest">
              <span className="navbar-crest-letter">
                {VENUE.name?.charAt(0) ?? 'R'}
              </span>
            </div>
            <div>
              <p className="navbar-brand-name">
                {VENUE.name}
              </p>
              <p className="navbar-brand-sub">
                Convention Centre
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="navbar-nav">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="navbar-link"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop Enquire CTA */}
          <div className="nav-cta-wrapper">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('#contact');
              }}
              className="btn-gold navbar-cta-btn"
            >
              Enquire
              <ArrowUpRight size={14} />
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="navbar-mobile-toggle"
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
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="mobile-drawer"
          >
            {/* Mobile Header Row */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div className="navbar-crest" style={{ width: '2.25rem', height: '2.25rem' }}>
                  <span className="navbar-crest-letter" style={{ fontSize: '1rem' }}>R</span>
                </div>
                <div>
                  <p style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', color: '#ffffff', fontWeight: 600, lineHeight: 1.2 }}>
                    {VENUE.name}
                  </p>
                  <p style={{ fontSize: '0.55rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold-primary)' }}>
                    Convention Centre
                  </p>
                </div>
              </div>
              <button
                onClick={() => setMobileOpen(false)}
                style={{
                  width: '2.5rem',
                  height: '2.5rem',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                }}
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            <div className="mobile-nav-links">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 + i * 0.05, duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="mobile-nav-link"
                >
                  <span className="mobile-nav-index">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span>
                    {link.label}
                  </span>
                </motion.a>
              ))}
            </div>

            <div style={{ paddingTop: '1.75rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('#contact');
                }}
                className="btn-gold"
                style={{ width: '100%', justifyContent: 'center' }}
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