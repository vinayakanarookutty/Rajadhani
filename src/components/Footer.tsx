import { Camera, Globe, Play, ArrowUp } from 'lucide-react';
import { VENUE, CONTACT, NAV_LINKS, SOCIAL } from '../data/venueData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#090a0d] text-white border-t border-gold/25 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-radial-gold opacity-10 pointer-events-none blur-3xl" />

      {/* Main Footer Content */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3.5 mb-6">
              <div className="w-10 h-10 border border-gold/60 flex items-center justify-center bg-black/40 rounded-lg shadow-sm">
                <span className="font-heading text-gold-light text-lg font-bold">R</span>
              </div>
              <div>
                <p className="font-heading text-xl font-semibold tracking-wide text-white leading-tight">
                  {VENUE.name}
                </p>
                <p className="text-gold/80 text-[9.5px] tracking-[0.25em] uppercase font-body font-medium">
                  Convention Centre
                </p>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-stone-400 max-w-xs font-light">
              An architectural destination crafted for life&apos;s defining milestones. Setting the
              standard for hospitality, acoustics, and grandeur.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 mt-7">
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
                  className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-stone-300 hover:text-white hover:bg-gold hover:border-gold transition-all duration-300 shadow-sm cursor-pointer"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h4 className="text-xs tracking-[0.22em] uppercase font-semibold text-gold-light mb-6">
              Navigation
            </h4>
            <ul className="space-y-3.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-sm text-stone-400 hover:text-gold transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Direct */}
          <div>
            <h4 className="text-xs tracking-[0.22em] uppercase font-semibold text-gold-light mb-6">
              Contact & Visits
            </h4>
            <ul className="space-y-3.5 text-sm text-stone-400 font-light">
              <li className="text-white font-medium">{CONTACT.phone}</li>
              <li>{CONTACT.email}</li>
              <li className="leading-relaxed">{CONTACT.address}</li>
            </ul>
          </div>

          {/* Concierge Hours */}
          <div>
            <h4 className="text-xs tracking-[0.22em] uppercase font-semibold text-gold-light mb-6">
              Concierge Hours
            </h4>
            <p className="text-sm text-stone-300 font-light">{CONTACT.workingHours}</p>
            <p className="text-xs text-stone-500 mt-2">Available 7 days a week for private appointments.</p>

            <div className="mt-8">
              <button
                onClick={scrollToTop}
                className="group inline-flex items-center gap-2 text-xs tracking-[0.18em] uppercase font-semibold text-gold-light hover:text-white transition-colors cursor-pointer"
              >
                Back to top
                <ArrowUp size={14} className="transition-transform group-hover:-translate-y-1 text-gold" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="border-t border-white/10 bg-[#06070a]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-stone-400">
            &copy; {new Date().getFullYear()} {VENUE.fullName}. All Rights Reserved.
          </p>
          <p className="text-xs text-stone-500">
            Architectural Excellence &bull; Kerala, India
          </p>
        </div>
      </div>
    </footer>
  );
}
