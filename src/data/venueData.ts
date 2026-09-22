// Venue Data — Rajadhani Convention Centre
// Centralized venue content & curated media

// Real venue assets
import auditoriumInterior from '../assets/images/auditorium-interior.webp';
import exteriorWedding from '../assets/images/exterior-wedding.webp';
import exteriorCloseup from '../assets/images/exterior-closeup.jpg';
import exteriorFull from '../assets/images/exterior-full.jpg';

export const VENUE = {
  name: 'Rajadhani',
  fullName: 'Rajadhani Convention Centre',
  tagline: 'Architectural Grandeur • Extraordinary Occasions',
  description:
    'A majestic sanctuary designed for life’s defining moments — from grand weddings and high-profile summits to cultural celebrations.',
  shortDescription:
    'Where timeless elegance meets modern architecture, setting the benchmark for prestigious gatherings.',
};

export const CONTACT = {
  phone: '+91 98765 43210',
  email: 'info@rajadhaniconventioncentre.com',
  address: 'Rajadhani Convention Centre, National Highway Bypass, Kerala, India',
  workingHours: 'Mon – Sun: 9:00 AM – 9:00 PM',
  whatsapp: '+919876543210',
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3936.568472551469!2d76.33727127592477!3d9.521015720938095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0885e24c3fb4d3%3A0x88625b41f0839714!2sRajadhani%20convention%20center!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin',
  mapUrl:
    'https://www.google.com/maps/place/Rajadhani+convention+center/@9.5210104,76.3398462,17z/data=!3m1!4b1!4m6!3m5!1s0x3b0885e24c3fb4d3:0x88625b41f0839714!8m2!3d9.5210104!4d76.3398462!16s%2Fg%2F11slqpqq6q',
};

export const SOCIAL = {
  instagram: 'https://instagram.com',
  facebook: 'https://facebook.com',
  youtube: 'https://youtube.com',
};

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Spaces', href: '#spaces' },
  { label: 'Facilities', href: '#facilities' },
  { label: 'Events', href: '#events' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export const IMAGES = {
  auditoriumInterior,
  exteriorWedding,
  exteriorCloseup,
  exteriorFull,
};

export const STATS = [
  { value: '2,500+', label: 'Guest Capacity' },
  { value: '50,000', label: 'Sq. Ft. Built Area' },
  { value: '500+', label: 'Vehicle Parking' },
  { value: '100%', label: 'Climate Controlled' },
];

export const HIGHLIGHTS = [
  {
    number: '01',
    metric: '2,500+',
    unit: 'Seating Capacity',
    title: 'Majestic Tiered Auditorium',
    description:
      'Designed with theater-grade sightlines, luxurious seating, and grand proscenium architecture.',
  },
  {
    number: '02',
    metric: '50k',
    unit: 'Sq. Ft. Space',
    title: 'Versatile Floor Layouts',
    description:
      'Seamless multi-functional spaces catering simultaneously to wedding rituals, dining, and ceremonies.',
  },
  {
    number: '03',
    metric: 'Acoustic',
    unit: 'Engineered Precision',
    title: 'State-of-the-Art Sound & AV',
    description:
      'Custom acoustic insulation and concert-quality audio arrays engineered for pristine vocal clarity.',
  },
  {
    number: '04',
    metric: '500+',
    unit: 'Secured Parking',
    title: 'Seamless Arrival Experience',
    description:
      'Spacious paved parking with dedicated VIP drop-off portico and barrier-free universal accessibility.',
  },
];

export const SPACES = [
  {
    id: 'auditorium',
    title: 'The Grand Auditorium',
    subtitle: 'Main Tiered Hall',
    description:
      'The crown architectural achievement of Rajadhani. Featuring sweeping double-height volume, regal tiered balcony seating, warm golden ambient illumination, and a monumental stage equipped for magnificent theatrical productions and ceremonies.',
    image: auditoriumInterior,
    badge: 'Flagship Space',
    specs: [
      { label: 'Capacity', value: '2,500 Guests' },
      { label: 'Proscenium Stage', value: '65 ft x 35 ft' },
      { label: 'Ceiling Clearance', value: '28 ft Height' },
      { label: 'Acoustics', value: '360° Studio Tuned' },
    ],
  },
  {
    id: 'convention-hall',
    title: 'The Convention Hall & Grounds',
    subtitle: 'Grand Entrance & Receptions',
    description:
      'A stunning architectural facade fronted by landscaped palms and a majestic covered portico. Perfect for lavish wedding welcomes, royal baraat processions, high-profile corporate delegates, and open-air cocktail receptions.',
    image: exteriorWedding,
    badge: 'Premier Venue',
    specs: [
      { label: 'Capacity', value: '3,000+ Reception' },
      { label: 'Portico Area', value: 'Grand Vehicle Porch' },
      { label: 'Dining Hall', value: '1,200 Seated Dining' },
      { label: 'Parking', value: '500+ Reserved Bays' },
    ],
  },
];

export const FACILITIES = [
  { icon: 'Snowflake', title: 'Central Climate Control', description: 'Even, whisper-quiet air distribution' },
  { icon: 'Speaker', title: 'Acoustic Engineering', description: 'Concert-grade sound arrays & clarity' },
  { icon: 'Lightbulb', title: 'Intelligent Stage Lighting', description: 'DMX-controlled automated luminaires' },
  { icon: 'Car', title: 'Expansive Parking', description: '500+ marked bays with valet management' },
  { icon: 'Zap', title: 'Dual Power Backup', description: '100% uninterrupted generator redundancy' },
  { icon: 'Shield', title: 'Round-the-Clock Security', description: 'Complete CCTV surveillance coverage' },
  { icon: 'Accessibility', title: 'Barrier-Free Access', description: 'Ramps and accessible guest amenities' },
  { icon: 'UtensilsCrossed', title: 'Bespoke Catering Hall', description: 'Dedicated modern prep & banquet wing' },
  { icon: 'Wifi', title: 'High-Speed Optical Wi-Fi', description: 'Enterprise connectivity for media streams' },
  { icon: 'Monitor', title: 'LED Visual Displays', description: 'High-definition digital backdrops' },
  { icon: 'DoorOpen', title: 'VIP Green Rooms', description: 'Luxuriously appointed private bridal suites' },
  { icon: 'Users', title: 'Concierge & Event Crew', description: 'Dedicated on-site operations team' },
];

export const EVENT_TYPES = [
  {
    id: 'weddings',
    number: '01',
    title: 'Weddings & Receptions',
    subtitle: 'Royal Nuptials & Grand Celebrations',
    description:
      'An opulent setting where traditions and lifelong memories are honored with royal grace, grand stage presence, and lavish banqueting.',
    capacity: 'Up to 3,000 Guests',
    highlights: ['Bridal Green Rooms', 'Grand Aisle Carpet', 'Dedicated Dining Hall'],
  },
  {
    id: 'corporate',
    number: '02',
    title: 'Corporate Summits & AGMs',
    subtitle: 'Executive Conferences & Conventions',
    description:
      'High-impact corporate presentations, shareholder conventions, and industry awards hosted with pristine AV and seamless logistics.',
    capacity: '500 to 2,500 Attendees',
    highlights: ['Ultra-wide projection', 'High-Speed Wi-Fi', 'Executive Green Rooms'],
  },
  {
    id: 'cultural',
    number: '03',
    title: 'Cultural Galas & Concerts',
    subtitle: 'Performing Arts & Live Recitals',
    description:
      'Acoustically insulated proscenium stage designed to elevate theatrical performances, classical concerts, and traditional festivals.',
    capacity: '2,500 Tiered Seating',
    highlights: ['Orchestra Pit Clearance', 'Tiered Balcony Views', 'Concert Lighting'],
  },
  {
    id: 'exhibitions',
    number: '04',
    title: 'Expos & Trade Fairs',
    subtitle: 'Public Showcases & Product Launches',
    description:
      'Expansive column-free floor areas with multi-point electrical feeds ideal for brand activations, jewelry expos, and automobile launches.',
    capacity: 'Flexible Floor Plan',
    highlights: ['Heavy Vehicle Ramp Access', 'Three-phase Power', 'Spacious Foyers'],
  },
];

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  title: string;
  subtitle: string;
  category: string;
}

// Strictly the 3 most attractive, real venue images — zero repetition
export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'auditorium',
    src: auditoriumInterior,
    alt: 'Grand auditorium with tiered seating, stage, and warm golden lighting',
    title: 'The Grand Auditorium',
    subtitle: 'Majestic Tiered Seating & Proscenium Stage',
    category: 'Interior Architecture',
  },
  {
    id: 'exterior-full',
    src: exteriorFull,
    alt: 'Full facade view of Rajadhani Convention Centre with palm trees',
    title: 'Architectural Facade',
    subtitle: 'Modern Minimalist Exterior & Landscaping',
    category: 'Exterior Architecture',
  },
  {
    id: 'exterior-wedding',
    src: exteriorWedding,
    alt: 'Convention Centre grand entrance with wedding decor and luxury car',
    title: 'The Grand Portico',
    subtitle: 'Prestigious Arrival & Celebration Entrance',
    category: 'Event Arrivals',
  },
];
