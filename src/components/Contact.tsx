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

  const inputClass = (field: string) =>
    `w-full px-4 py-4 bg-white border text-sm text-charcoal rounded-xl placeholder:text-stone-400 focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all duration-300 shadow-2xs ${
      errors[field] ? 'border-red-400 bg-red-50/20' : 'border-[#dfdbd2] hover:border-[#cdc9bf]'
    }`;

  return (
    <section id="contact" className="py-28 md:py-36 bg-[#fcfbf9] relative overflow-hidden border-t border-[#e8e5de]">
      {/* Background Ambience */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-radial-gold opacity-30 pointer-events-none" />

      <div ref={ref} className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto mb-16 lg:mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/30 bg-gold/10 backdrop-blur-md mb-4">
            <Sparkles size={13} className="text-gold" />
            <span className="text-[10.5px] tracking-[0.25em] text-gold-dark uppercase font-semibold">
              Concierge Services
            </span>
          </div>

          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-charcoal mt-2 font-normal">
            Reserve Your <span className="italic text-gold-dark font-medium">Date</span>
          </h2>
          <p className="mt-3 text-muted text-sm sm:text-base font-light">
            Plan your next hallmark event with our dedicated event hospitality directors.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left: Concierge Info & Location */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-5 space-y-6"
          >
            <div>
              <h3 className="font-heading text-2xl text-charcoal font-normal">
                Venue Concierge Desk
              </h3>
              <p className="text-muted mt-2 text-sm leading-relaxed font-light">
                We invite you to experience the spatial grandeur firsthand. Reach out to schedule an
                exclusive walkthrough or request customized banquet packages.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: Phone, label: 'Direct Inquiries', value: CONTACT.phone, href: `tel:${CONTACT.phone.replace(/\s/g, '')}` },
                { icon: Mail, label: 'Electronic Mail', value: CONTACT.email, href: `mailto:${CONTACT.email}` },
                { icon: MapPin, label: 'Location & Address', value: CONTACT.address, href: '#' },
                { icon: Clock, label: 'Concierge Hours', value: CONTACT.workingHours, href: '#' },
              ].map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="card-luxury-light p-4 sm:p-5 border border-[#dfdbd2] rounded-xl flex items-start gap-4 group cursor-pointer shadow-xs"
                >
                  <div className="icon-medallion !w-11 !h-11 flex-shrink-0 shadow-2xs">
                    <Icon size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] tracking-[0.2em] uppercase text-gold-dark font-semibold mb-0.5">
                      {label}
                    </p>
                    <p className="text-sm font-semibold text-charcoal group-hover:text-gold-dark transition-colors">
                      {value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            {/* Direct Action Triggers */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href={`https://wa.me/${CONTACT.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#25D366] text-white text-xs tracking-[0.14em] uppercase font-semibold rounded-xl hover:bg-[#20ba59] transition-all shadow-md hover:shadow-lg"
              >
                <MessageCircle size={17} />
                WhatsApp Us
              </a>
              <a
                href={`tel:${CONTACT.phone.replace(/\s/g, '')}`}
                className="btn-primary"
              >
                <Phone size={15} />
                Call Concierge
              </a>
            </div>

            {/* Location Map Frame */}
            <div className="aspect-[16/9] rounded-2xl bg-stone-100 border border-[#dfdbd2] overflow-hidden mt-6 shadow-md">
              <iframe
                src={CONTACT.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={`${VENUE.fullName} Location`}
              />
            </div>
          </motion.div>

          {/* Right: Reservation & Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-7"
          >
            {submitted ? (
              <div className="h-full flex items-center justify-center text-center p-12 bg-white border border-gold/30 rounded-2xl shadow-xl">
                <div>
                  <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center bg-gold/15 text-gold rounded-full border border-gold/30">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="font-heading text-3xl text-charcoal font-normal">Inquiry Received</h3>
                  <p className="text-muted mt-3 max-w-md mx-auto text-sm leading-relaxed font-light">
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
                    className="btn-gold mt-8"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="card-luxury-light p-8 sm:p-10 lg:p-12 border border-[#dfdbd2] rounded-2xl shadow-xl space-y-6"
              >
                <div className="pb-5 border-b border-[#eeebe5]">
                  <h3 className="font-heading text-2xl sm:text-3xl text-charcoal font-normal">
                    Event Reservation Inquiry
                  </h3>
                  <p className="text-muted text-xs sm:text-sm mt-1.5 font-light">
                    Complete the details below to check hall availability and schedule an exclusive private walkthrough.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Full Name *"
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      className={inputClass('name')}
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1.5 pl-1">{errors.name}</p>}
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Mobile / Contact Number *"
                      value={formData.phone}
                      onChange={(e) => handleChange('phone', e.target.value)}
                      className={inputClass('phone')}
                    />
                    {errors.phone && <p className="text-red-500 text-xs mt-1.5 pl-1">{errors.phone}</p>}
                  </div>
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    className={inputClass('email')}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1.5 pl-1">{errors.email}</p>}
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <select
                      value={formData.eventType}
                      onChange={(e) => handleChange('eventType', e.target.value)}
                      className={inputClass('eventType')}
                    >
                      <option value="">Select Event Category *</option>
                      {EVENT_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                    {errors.eventType && <p className="text-red-500 text-xs mt-1.5 pl-1">{errors.eventType}</p>}
                  </div>
                  <div>
                    <input
                      type="date"
                      value={formData.eventDate}
                      onChange={(e) => handleChange('eventDate', e.target.value)}
                      className={inputClass('eventDate')}
                    />
                  </div>
                </div>

                <div>
                  <input
                    type="number"
                    placeholder="Estimated Guest Count (e.g. 500, 1500)"
                    value={formData.guests}
                    onChange={(e) => handleChange('guests', e.target.value)}
                    className={inputClass('guests')}
                    min="50"
                  />
                </div>

                <div>
                  <textarea
                    placeholder="Provide any specific requirements, timing, catering preferences or questions..."
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    rows={4}
                    className={`${inputClass('message')} resize-none`}
                  />
                </div>

                <button type="submit" className="btn-gold w-full justify-center py-4 text-sm font-semibold shadow-[0_10px_30px_rgba(197,160,89,0.3)]">
                  <Send size={16} />
                  Submit Booking Inquiry
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
