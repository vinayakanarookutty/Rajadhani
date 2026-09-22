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
              <li style={{ color: '#ffffff', fontWeight: 500 }}>{CONTACT.phone}</li>
              <li>{CONTACT.email}</li>
              <li style={{ lineHeight: 1.6 }}>{CONTACT.address}</li>
            </ul>
          </div>

          {/* Concierge Hours */}
          <div>
            <h4 className="footer-col-title">
              Concierge Hours
            </h4>
            <p style={{ fontSize: '0.875rem', color: '#d1d5db', fontWeight: 300 }}>{CONTACT.workingHours}</p>
            <p style={{ fontSize: '0.75rem', color: '#6b7280', marginTop: '0.5rem' }}>Available 7 days a week for private site appointments.</p>

            <div style={{ marginTop: '2rem' }}>
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
