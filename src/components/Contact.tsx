import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle2, Sparkles } from 'lucide-react';
import { CONTACT, VENUE } from '../data/venueData';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

interface FormData {
  name: string;
  phone: string;
  email: string;
  eventType: string;
  eventDate: string;
  guests: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

const EVENT_OPTIONS = [
  'Wedding / Royal Reception',
  'Corporate Summit / Conference',
  'Cultural Performance / Concert',
  'Exhibition / Trade Fair',
  'Private Banquet / Milestone',
  'Other Occasion',
];

export default function Contact() {
  const { ref, isVisible } = useScrollAnimation(0.05);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    eventType: '',
    eventDate: '',
    guests: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    else if (!/^\+?[\d\s-]{8,}$/.test(formData.phone.trim())) newErrors.phone = 'Please enter a valid phone number';
    if (!formData.email.trim()) newErrors.email = 'Email address is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Please enter a valid email address';
    if (!formData.eventType) newErrors.eventType = 'Please select your event category';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  return (
    <section id="contact" className="contact-section section-spacing">
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
            Concierge Services
          </span>

          <h2 className="section-title">
            Reserve Your <span style={{ fontStyle: 'italic', color: 'var(--gold-dark)', fontWeight: 500 }}>Date</span>
          </h2>
          <p className="section-subtitle" style={{ color: 'var(--text-muted)' }}>
            Plan your next hallmark event with our dedicated event hospitality directors.
          </p>
        </motion.div>

        <div className="contact-grid">
          {/* Left: Concierge Info & Location */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="concierge-cards-col"
          >
            <div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', fontWeight: 400 }}>
                Venue Concierge Desk
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.5rem', lineHeight: 1.6, fontWeight: 300 }}>
                We invite you to experience the spatial grandeur firsthand. Reach out to schedule an
                exclusive walkthrough or request customized banquet packages.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {[
                { icon: Phone, label: 'Direct Inquiries', value: `${CONTACT.phone} / ${CONTACT.phoneFormatted}`, href: `tel:${CONTACT.tel}`, target: '_self' },
                { icon: Mail, label: 'Electronic Mail', value: CONTACT.email, href: `mailto:${CONTACT.email}`, target: '_self' },
                { icon: MapPin, label: 'Location & Address', value: CONTACT.address, href: CONTACT.mapUrl, target: '_blank' },
                { icon: Clock, label: 'Concierge Hours', value: CONTACT.workingHours, href: CONTACT.mapUrl, target: '_blank' },
              ].map(({ icon: Icon, label, value, href, target }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={target}
                  rel={target === '_blank' ? 'noopener noreferrer' : undefined}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  className="card-luxury-light concierge-card-link"
                >
                  <div className="concierge-medallion">
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="concierge-card-lbl">
                      {label}
                    </p>
                    <p className="concierge-card-val">
                      {value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Direct Action Triggers */}
            <div className="concierge-triggers-row">
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.96 }}
                href={`https://wa.me/${CONTACT.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-pill-btn"
              >
                <MessageCircle size={17} />
                WhatsApp Us
              </motion.a>
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.96 }}
                href={`tel:${CONTACT.tel}`}
                className="btn-primary"
              >
                <Phone size={15} />
                Call Concierge
              </motion.a>
            </div>

            {/* Location Map Frame with Direct Link */}
            <div className="map-embed-container">
              <iframe
                src={CONTACT.mapEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`${VENUE.fullName} Location - Rajadhani Convention Centre`}
              />
            </div>
            
            {/* Direct Google Maps Action */}
            <div style={{ marginTop: '0.75rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.85rem 1.15rem', background: '#ffffff', border: '1px solid var(--stone-border)', borderRadius: 'var(--radius-md)', flexWrap: 'wrap', gap: '0.75rem' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8125rem', color: 'var(--text-charcoal)', fontWeight: 600 }}>
                  <MapPin size={16} style={{ color: 'var(--gold-primary)' }} />
                  <span>Rajadhani Convention Centre</span>
                  <span style={{ backgroundColor: '#fef3c7', color: '#92400e', padding: '0.15rem 0.5rem', borderRadius: '4px', fontSize: '0.72rem', fontWeight: 600 }}>
                    ★ 4.0 (96)
                  </span>
                </div>
                <p style={{ fontSize: '0.75rem', color: '#6b7280', marginTop: '0.2rem' }}>
                  Plus Code: <strong>{CONTACT.plusCode}</strong> • Mamood Road, Palakkulam
                </p>
              </div>
              <a
                href={CONTACT.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
                style={{ padding: '0.45rem 1rem', fontSize: '0.6875rem', letterSpacing: '0.12em' }}
              >
                Directions
              </a>
            </div>
          </motion.div>

          {/* Right: Reservation & Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            {submitted ? (
              <div className="card-luxury-light" style={{ padding: '3.5rem 2rem', textAlign: 'center' }}>
                <div style={{ width: '4rem', height: '4rem', margin: '0 auto 1.5rem', borderRadius: '50%', backgroundColor: 'rgba(197,160,89,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold-primary)' }}>
                  <CheckCircle2 size={36} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '2rem', fontWeight: 400 }}>Inquiry Received</h3>
                <p style={{ color: 'var(--text-muted)', marginTop: '0.75rem', fontSize: '0.95rem', maxWidth: '28rem', margin: '0.75rem auto 0', lineHeight: 1.65 }}>
                  Thank you for contacting {VENUE.fullName}. Our event management desk will review
                  your requested dates and contact you within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      phone: '',
                      email: '',
                      eventType: '',
                      eventDate: '',
                      guests: '',
                      message: '',
                    });
                  }}
                  className="btn-gold"
                  style={{ marginTop: '2rem' }}
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="card-luxury-light reservation-form-box"
              >
                <div className="form-header-bar">
                  <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.85rem', fontWeight: 400 }}>
                    Event Reservation Inquiry
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginTop: '0.35rem', fontWeight: 300 }}>
                    Complete the details below to check hall availability and schedule an exclusive private walkthrough.
                  </p>
                </div>

                <div className="form-grid-2">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Full Name *"
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      className={`luxury-input ${errors.name ? 'error' : ''}`}
                    />
                    {errors.name && <p className="form-error-msg">{errors.name}</p>}
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Mobile / Contact Number *"
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      className={`luxury-input ${errors.phone ? 'error' : ''}`}
                    />
                    {errors.phone && <p className="form-error-msg">{errors.phone}</p>}
                  </div>
                </div>

                <div className="form-row">
                  <input
                    type="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    className={`luxury-input ${errors.email ? 'error' : ''}`}
                  />
                  {errors.email && <p className="form-error-msg">{errors.email}</p>}
                </div>

                <div className="form-grid-2">
                  <div>
                    <select
                      value={formData.eventType}
                      onChange={(e) => handleChange('eventType', e.target.value)}
                      className={`luxury-input ${errors.eventType ? 'error' : ''}`}
                    >
                      <option value="">Select Event Category *</option>
                      {EVENT_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                    {errors.eventType && <p className="form-error-msg">{errors.eventType}</p>}
                  </div>
                  <div>
                    <input
                      type="date"
                      value={formData.eventDate}
                      onChange={(e) => handleChange('eventDate', e.target.value)}
                      className="luxury-input"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <input
                    type="number"
                    placeholder="Estimated Guest Count (e.g. 500, 1500)"
                    value={formData.guests}
                    onChange={(e) => handleChange('guests', e.target.value)}
                    className="luxury-input"
                    min="50"
                  />
                </div>

                <div className="form-row">
                  <textarea
                    placeholder="Provide any specific requirements, timing, catering preferences or questions..."
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    rows={4}
                    className="luxury-input"
                    style={{ resize: 'none' }}
                  />
                </div>

                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  className="btn-gold form-submit-full"
                >
                  <Send size={16} />
                  Submit Booking Inquiry
                </motion.button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
