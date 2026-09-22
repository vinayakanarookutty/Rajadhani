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
      transition={{ delay: 1.5, duration: 0.5, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-[#25D366] text-white shadow-[0_8px_30px_rgba(37,211,102,0.4)] hover:shadow-[0_12px_40px_rgba(37,211,102,0.6)] transition-all duration-300 rounded-full border border-white/30 cursor-pointer group"
      aria-label="Chat on WhatsApp"
    >
      {/* Desktop: pill with text */}
      <div className="hidden sm:flex items-center gap-2.5 px-5 py-3.5">
        <MessageCircle size={19} className="text-white fill-white/20" />
        <span className="text-xs font-semibold tracking-wider uppercase">Concierge WhatsApp</span>
      </div>

      {/* Mobile: circular icon */}
      <div className="sm:hidden w-14 h-14 flex items-center justify-center rounded-full">
        <MessageCircle size={26} className="text-white" />
      </div>
    </motion.a>
  );
}
