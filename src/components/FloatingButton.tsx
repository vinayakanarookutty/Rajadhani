import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { CONTACT } from '../data/venueData';

export default function FloatingButton() {
  return (
    <motion.a
      href={`https://wa.me/${CONTACT.whatsapp}?text=Hello!%20I%20would%20like%20to%20enquire%20about%20Rajadhani%20Convention%20Centre.`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      className="floating-whatsapp-btn"
      aria-label="Chat on WhatsApp"
    >
      <span className="whatsapp-pulse-ring" />

      {/* Desktop: pill with text */}
      <div className="floating-desktop-pill">
        <MessageCircle size={19} />
        <span>Concierge WhatsApp</span>
      </div>

      {/* Mobile: circular icon */}
      <div className="floating-mobile-circle">
        <MessageCircle size={24} />
      </div>
    </motion.a>
  );
}
