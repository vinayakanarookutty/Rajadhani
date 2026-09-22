import { motion } from 'framer-motion';
import { Star, MapPin, ExternalLink, ThumbsUp, Clock, CheckCircle2, MessageSquare, Sparkles } from 'lucide-react';
import { CONTACT, GOOGLE_REVIEWS, VENUE } from '../data/venueData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function Reviews() {
  const { ref, isVisible } = useScrollAnimation(0.08);

  return (
    <section id="reviews" className="reviews-section section-spacing">
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
            Google Maps Verified
          </span>

          <h2 className="section-title">
            Guest Experiences &{' '}
            <span style={{ fontStyle: 'italic', color: 'var(--gold-dark)', fontWeight: 500 }}>
              Reviews
            </span>
          </h2>
          <p className="section-subtitle" style={{ color: 'var(--text-muted)' }}>
            Real impressions from event hosts, guests, and Local Guides who celebrated milestones at {VENUE.name}.
          </p>
        </motion.div>

        {/* Google Maps Scorecard & Sentiment Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="google-scorecard-card"
        >
          <div className="google-scorecard-inner">
            {/* Rating Summary Left */}
            <div className="google-scorecard-summary">
              <div className="google-g-badge">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                    fill="#EA4335"
                  />
                </svg>
                <span style={{ fontWeight: 600, fontSize: '0.875rem', color: '#1f2937' }}>
                  Google Reviews
                </span>
              </div>

              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.5rem', marginTop: '0.5rem' }}>
                <span className="google-scorecard-number">{CONTACT.googleRating}</span>
                <div style={{ display: 'flex', gap: '2px', color: '#f59e0b' }}>
                  {[1, 2, 3, 4].map((s) => (
                    <Star key={s} size={18} fill="#f59e0b" stroke="#f59e0b" />
                  ))}
                  <Star size={18} stroke="#f59e0b" fill="none" />
                </div>
              </div>

              <p style={{ fontSize: '0.8125rem', color: '#6b7280', marginTop: '0.25rem' }}>
                Based on <strong style={{ color: '#111827' }}>{CONTACT.reviewCount} reviews</strong> on Google Maps
              </p>

              <div className="google-listing-meta">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.78rem', color: '#4b5563' }}>
                  <MapPin size={13} style={{ color: 'var(--gold-primary)' }} />
                  <span>{CONTACT.address}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.78rem', color: '#16a34a', fontWeight: 500 }}>
                  <Clock size={13} />
                  <span>{CONTACT.status}</span>
                </div>
              </div>
            </div>

            {/* What Guests Appreciate Most */}
            <div className="google-scorecard-sentiments">
              <p style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold-dark)', fontWeight: 600, marginBottom: '0.65rem' }}>
                Frequent Google Reviews Feedback
              </p>
              <div className="sentiment-tags-cluster">
                {CONTACT.reviewSummaryQuotes?.map((quote, idx) => (
                  <div key={idx} className="sentiment-tag-pill">
                    <CheckCircle2 size={13} style={{ color: '#16a34a', flexShrink: 0 }} />
                    <span>&ldquo;{quote}&rdquo;</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Direct Google Action Links */}
            <div className="google-scorecard-actions">
              <a
                href={CONTACT.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
                style={{ fontSize: '0.78rem', padding: '0.6rem 1.25rem', width: '100%', justifyContent: 'center' }}
              >
                <span>Read All 96 Reviews</span>
                <ExternalLink size={14} />
              </a>
              <a
                href={CONTACT.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
                style={{ fontSize: '0.78rem', padding: '0.6rem 1.25rem', width: '100%', justifyContent: 'center', border: '1px solid var(--stone-border)' }}
              >
                <MapPin size={14} />
                <span>Open in Maps</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Real Google Reviews Cards Grid */}
        <div className="reviews-cards-grid">
          {GOOGLE_REVIEWS.map((rev, index) => (
            <motion.article
              key={rev.id}
              initial={{ opacity: 0, y: 25 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + index * 0.1 }}
              className="card-luxury-light review-item-card"
            >
              {/* Reviewer Header */}
              <div className="review-card-top">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div
                    className="review-author-avatar"
                    style={{ backgroundColor: rev.avatarColor }}
                  >
                    {rev.avatarLetter}
                  </div>
                  <div>
                    <h3 className="review-author-name">{rev.author}</h3>
                    <p className="review-author-badge">{rev.badge}</p>
                  </div>
                </div>

                <div className="review-stars-row">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      fill={i < rev.rating ? '#f59e0b' : 'none'}
                      stroke="#f59e0b"
                    />
                  ))}
                </div>
              </div>

              {/* Review Quote */}
              <div className="review-card-body">
                <p className="review-text-paragraph">&ldquo;{rev.text}&rdquo;</p>
              </div>

              {/* Highlights Tag Cluster */}
              {rev.highlights && (
                <div className="review-highlights-row">
                  {rev.highlights.map((h) => (
                    <span key={h} className="review-highlight-chip">
                      {h}
                    </span>
                  ))}
                </div>
              )}

              {/* Owner response if available */}
              {rev.ownerResponse && (
                <div className="review-owner-reply-box">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.72rem', color: 'var(--gold-dark)', fontWeight: 600 }}>
                    <MessageSquare size={12} />
                    <span>Response from {VENUE.name}</span>
                  </div>
                  <p style={{ fontSize: '0.78rem', color: '#4b5563', marginTop: '0.2rem', fontStyle: 'italic' }}>
                    &ldquo;{rev.ownerResponse}&rdquo;
                  </p>
                </div>
              )}

              {/* Footer Meta */}
              <div className="review-card-footer">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.72rem', color: '#9ca3af' }}>
                  <Clock size={12} />
                  <span>{rev.time}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.72rem', color: '#6b7280' }}>
                  <ThumbsUp size={12} />
                  <span>Helpful review</span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Google Maps Venue Summary Footer Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="google-footer-summary-bar"
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', flexWrap: 'wrap' }}>
            <span style={{ fontWeight: 600, color: 'var(--text-charcoal)', fontSize: '0.875rem' }}>
              {VENUE.fullName}
            </span>
            <span className="dot-divider">•</span>
            <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
              Plus Code: <strong style={{ color: 'var(--text-charcoal)' }}>{CONTACT.plusCode}</strong>
            </span>
            <span className="dot-divider">•</span>
            <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
              Phone: <a href={`tel:${CONTACT.tel}`} style={{ color: 'var(--gold-dark)', fontWeight: 500 }}>{CONTACT.phone}</a>
            </span>
          </div>

          <a
            href={CONTACT.mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="google-maps-badge-link"
          >
            <span>Directions via Google Maps</span>
            <ExternalLink size={13} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
