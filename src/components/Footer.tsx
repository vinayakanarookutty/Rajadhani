import { Camera, Globe, Play, ArrowUp } from 'lucide-react';
import { VENUE, CONTACT, NAV_LINKS, SOCIAL } from '../data/venueData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="site-footer">
      {/* Main Footer Content */}
      <div className="site-container">
        <div className="footer-top-grid">
          {/* Brand Column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '1.5rem' }}>
              <div className="navbar-crest">
                <span className="navbar-crest-letter">R</span>
              </div>
              <div>
                <p className="navbar-brand-name" style={{ fontSize: '1.25rem' }}>
                  {VENUE.name}
                </p>
                <p className="navbar-brand-sub">
                  Convention Centre
                </p>
              </div>
            </div>

            <p style={{ fontSize: '0.875rem', color: '#9ca3af', lineHeight: 1.7, fontWeight: 300, maxWidth: '20rem' }}>
              An architectural destination crafted for life&apos;s defining milestones. Setting the
              standard for hospitality, acoustics, and grandeur.
            </p>

            {/* Social Icons */}
            <div className="footer-socials-row">
              {[
                { icon: Camera, href: SOCIAL.instagram, label: 'Instagram' },
                { icon: Globe, href: SOCIAL.facebook, label: 'Facebook' },
                { icon: Play, href: SOCIAL.youtube, label: 'YouTube' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="footer-social-btn"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h4 className="footer-col-title">
              Navigation
            </h4>
            <ul className="footer-links-list">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="footer-link"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Direct */}
          <div>
            <h4 className="footer-col-title">
              Contact & Visits
            </h4>
            <ul className="footer-links-list">
              <li>
                <a href={`tel:${CONTACT.tel}`} style={{ color: '#ffffff', fontWeight: 600 }}>
                  {CONTACT.phone} ({CONTACT.phoneFormatted})
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`} style={{ color: '#9ca3af' }}>
                  {CONTACT.email}
                </a>
              </li>
              <li style={{ lineHeight: 1.6 }}>
                <a
                  href={CONTACT.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#d1d5db', display: 'inline-block' }}
                >
                  {CONTACT.address}
                </a>
              </li>
              <li style={{ fontSize: '0.75rem', color: 'var(--gold-light)', marginTop: '0.35rem' }}>
                Plus Code: <strong>{CONTACT.plusCode}</strong>
              </li>
            </ul>
          </div>

          {/* Concierge Hours */}
          <div>
            <h4 className="footer-col-title">
              Hours & Ratings
            </h4>
            <p style={{ fontSize: '0.875rem', color: '#d1d5db', fontWeight: 300 }}>{CONTACT.workingHours}</p>
            <p style={{ fontSize: '0.75rem', color: '#9ca3af', marginTop: '0.35rem' }}>Open 7 days a week for event bookings & site tours.</p>

            <a
              href={CONTACT.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginTop: '1rem',
                padding: '0.45rem 0.85rem',
                backgroundColor: 'rgba(255, 255, 255, 0.07)',
                border: '1px solid rgba(197, 160, 89, 0.4)',
                borderRadius: '9999px',
                fontSize: '0.75rem',
                color: '#ffffff',
                textDecoration: 'none',
              }}
            >
              <span style={{ color: '#f59e0b', fontWeight: 700 }}>★ 4.0</span>
              <span style={{ color: '#d1d5db' }}>({CONTACT.reviewCount} Google Reviews)</span>
            </a>

            <div style={{ marginTop: '1.75rem' }}>
              <button
                onClick={scrollToTop}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.75rem',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                  color: 'var(--gold-light)',
                  cursor: 'pointer',
                }}
              >
                Back to top
                <ArrowUp size={14} style={{ color: 'var(--gold-primary)' }} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="footer-legal-bar">
        <div className="site-container footer-legal-inner">
          <p>
            &copy; {new Date().getFullYear()} {VENUE.fullName}. All Rights Reserved.
          </p>
          <p>
            Architectural Excellence &bull; Kerala, India
          </p>
        </div>
      </div>
    </footer>
  );
}
