import { ServiceType, Project, TeamMember } from './types';

// ==============================================================================
// IMAGE MANAGEMENT GUIDE
// ==============================================================================
// When replacing images, try to match the recommended resolution & aspect ratio
// to ensure the best layout stability and performance.
// ==============================================================================

// Fallback images (Professional Placeholders)
const FALLBACK_VIDHI = 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800';
const FALLBACK_SWETANG = 'https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=800';

export const IMAGES = {
  // TEAM PHOTOS (Recommended: 800x800px, 1:1 Aspect Ratio)
  VIDHI: '/vidhi.jpg',
  SWETANG: '/swetang.jpg',
  FALLBACK_VIDHI,
  FALLBACK_SWETANG,

  // HERO BANNERS (Recommended: 1920x1080px, 16:9 Aspect Ratio)
  HERO_ARCH: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200',
  HERO_AI: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1200',
  HERO_CONTACT: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200',

  // PROJECT THUMBNAILS (Recommended: 800x600px, 4:3 Aspect Ratio)
  PROJECT_1: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800',
  PROJECT_2: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&q=80&w=800',
  PROJECT_3: 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?auto=format&fit=crop&q=80&w=800',
  PROJECT_4: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
  PROJECT_5: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&q=80&w=800',
  PROJECT_6: 'https://images.unsplash.com/photo-1542621334-a471dfb2e4cb?auto=format&fit=crop&q=80&w=800',

  // BLOG COVERS (Recommended: 800x500px, 16:10 Aspect Ratio)
  BLOG_1: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800',
  BLOG_2: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=800',
  BLOG_3: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800',
  BLOG_4: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
  BLOG_5: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4f9d?auto=format&fit=crop&q=80&w=800',
};

// ==============================================================================
// CONTACT & SOCIAL MANAGEMENT
// ==============================================================================
export const CONTACT_INFO = {
  ADDRESS_LINE_1: "Science City Road",
  ADDRESS_LINE_2: "Ahmedabad, Gujarat 380060",
  PHONE: "+91-9104518311",
  PHONE_DISPLAY: "+91-9104518311",
  WHATSAPP_LINK: "https://wa.me/919104518311",
  EMAIL: "hello@vastucraftai.com",
};

export const SOCIAL_LINKS = {
  INSTAGRAM: "https://www.instagram.com/vastucraftai",
  LINKEDIN: "https://www.linkedin.com/company/vastucraftai",
  TWITTER: "https://twitter.com/vastucraftai",
};

export const AHMEDABAD_OFFICE = {
  address: 'Science City Road, Ahmedabad, Gujarat 380060',
  addressLine1: 'Science City Road',
  addressLine2: 'Ahmedabad, Gujarat 380060',
  phone: '+91-9104518311',
  email: 'hello@vastucraftai.com',
  coordinates: { lat: 23.0225, lng: 72.5714 }
};


export const FOUNDERS: TeamMember[] = [
  {
    name: 'Ar. Vidhi Gajjar',
    role: 'Principal Architect & Vastu Specialist',
    imageUrl: IMAGES.VIDHI,
    bio: 'CoA-registered architect (CA/2018/103740) with deep experience as Architect of Record for RERA-registered projects across Gujarat. Expert in blending Vastu Shastra with modern aesthetics.',
    strengths: ['Vastu-led space planning', 'RERA documentation', 'Residential & commercial architecture', 'Client-centric design']
  },
  {
    name: 'Swetang Gajjar',
    role: 'Co-founder, AI & Smart Systems Lead',
    imageUrl: IMAGES.SWETANG,
    bio: 'Senior software engineer & AI/ML specialist with 8+ years in industrial automation and computer vision. Transforms traditional construction into data-driven, intelligent environments.',
    strengths: ['AI & ML model development', 'Industrial automation', 'Smart building IoT', 'Cloud cost optimisation']
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Elite Vision',
    category: 'Commercial',
    description: 'Vastu-compliant circulation with AI-assisted lighting simulation for atrium zones. Located in Ahmedabad.',
    imageUrl: IMAGES.PROJECT_1
  },
  {
    id: '2',
    title: 'Texas Repose',
    category: 'Residential',
    description: 'A modern residential community in Gandhinagar balanced with traditional Vastu zones.',
    imageUrl: IMAGES.PROJECT_2
  },
  {
    id: '3',
    title: 'Shilp Residency',
    category: 'Residential',
    description: 'High-rise living with optimized airflow and smart-building monitoring systems.',
    imageUrl: IMAGES.PROJECT_3
  },
  {
    id: '4',
    title: 'Avadh Arkelia',
    category: 'Commercial',
    description: 'Premium commercial spaces in Surat designed for prosperity and high footfall.',
    imageUrl: IMAGES.PROJECT_4
  },
  {
    id: '5',
    title: 'Verdant Villa',
    category: 'Residential',
    description: 'A sustainable luxury villa in Science City, designed with a central Brahmasthan courtyard and automated climate control.',
    imageUrl: IMAGES.PROJECT_5
  },
  {
    id: '6',
    title: 'Apex Industrial Hub',
    category: 'Commercial',
    description: 'A 50,000 sq.ft industrial park in Sanand featuring AI-driven safety monitoring and optimized logistics flow.',
    imageUrl: IMAGES.PROJECT_6
  }
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Rajesh Patel",
    location: "Science City, Ahmedabad",
    rating: 5,
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
    quote: "Ar. Vidhi's understanding of Vastu is profound. She designed our home without compromising on modern aesthetics. The energy in the house feels vastly different from our previous apartment.",
    role: "Homeowner, Science City" // keeping for backwards compatibility
  },
  {
    id: 2,
    name: "Amit Shah",
    location: "Maninagar, Ahmedabad",
    rating: 5,
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150",
    quote: "We used VastuCraft's AI monitoring for our commercial project. The automated defect detection saved us approx. 15% in material wastage and kept the timeline on track.",
    role: "Director, Shivalik Developers"
  },
  {
    id: 3,
    name: "Priya Desai",
    location: "Gandhinagar",
    rating: 5,
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
    quote: "I was skeptical about Vastu, but Vidhi explained the scientific reasoning behind every suggestion. The result is a home that is naturally lit, airy, and incredibly peaceful.",
    role: "Interior Client, Gandhinagar"
  },
  {
    id: 4,
    name: "Karan Mehta",
    location: "Satellite, Ahmedabad",
    rating: 5,
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
    quote: "The AI-powered monitoring saved us countless hours of manual inspection. VastuCraft is truly ahead of the curve in construction technology."
  },
  {
    id: 5,
    name: "Neha Sharma",
    location: "SG Highway, Ahmedabad",
    rating: 5,
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
    quote: "From design to execution, VastuCraft was professional and attentive to every detail. Our office space is now both beautiful and Vastu-compliant."
  },
  {
    id: 6,
    name: "Vikram Patel",
    location: "Bopal, Ahmedabad",
    rating: 5,
    photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150&h=150",
    quote: "The combination of traditional Vastu wisdom with modern AI technology is brilliant. Highly recommend for anyone building in Gujarat."
  }
];

export const SERVICES_LIST = [
  {
    title: ServiceType.ARCHITECTURE,
    desc: 'Massing, planning, statutory approvals, RERA-ready documentation, and on-ground coordination.',
    icon: 'Building'
  },
  {
    title: ServiceType.INTERIOR,
    desc: 'Turnkey interiors for homes, offices and lifestyle spaces.',
    icon: 'Sofa'
  },
  {
    title: ServiceType.EXTERIOR,
    desc: 'Facade concepts, elevation refinement, lighting and landscape.',
    icon: 'Frame'
  },
  {
    title: ServiceType.AI_TRANSFORMATION,
    desc: 'AI models for quality control, safety, material tracking and smart monitoring.',
    icon: 'Cpu'
  },
  {
    title: ServiceType.CONSTRUCTION,
    desc: 'On-site execution, vendor coordination, quality checks.',
    icon: 'HardHat'
  },
  {
    title: ServiceType.VASTU,
    desc: 'Layout audits, remedies and AI-assisted orientation checks.',
    icon: 'Compass'
  }
];

export const PRICING_PLANS = [
  {
    name: 'Free',
    price: 0,
    interval: 'forever',
    description: 'Perfect for exploring Vastu basics',
    features: [
      'AI chatbot with 10 questions/month',
      'Basic Vastu tips',
      'Blog access',
      'Community forum'
    ],
    cta: 'Start Free',
    ctaLink: '/contact',
    popular: false
  },
  {
    name: 'Pro',
    price: 29,
    interval: 'month',
    description: 'For homeowners & renters',
    features: [
      'Unlimited AI consultations',
      'Floor plan analysis',
      'Personalized Vastu reports',
      'Priority email support',
      'Downloadable PDF reports',
      'Mobile app access'
    ],
    cta: 'Subscribe Now',
    ctaLink: '/contact',
    popular: true
  },
  {
    name: 'Enterprise',
    price: null as number | null,
    interval: 'project',
    description: 'For architects & builders',
    features: [
      'All Pro features',
      'On-site consultations',
      'Team collaboration tools',
      'API access',
      'Dedicated account manager',
      'Custom integrations',
      'RERA compliance dashboard'
    ],
    cta: 'Contact Sales',
    ctaLink: '/contact',
    popular: false
  }
];

export const PRICING_FAQS = [
  {
    question: 'Is there a free trial for the Pro plan?',
    answer: 'Yes! All new users get a 14-day free trial of the Pro plan with no credit card required.'
  },
  {
    question: 'Can I switch plans anytime?',
    answer: 'Absolutely. You can upgrade, downgrade, or cancel your plan at any time from your account settings.'
  },
  {
    question: 'Do you offer refunds?',
    answer: 'We offer a 30-day money-back guarantee if you\'re not satisfied with the Pro plan.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards (Visa, MasterCard, Amex), UPI, and net banking for Indian customers.'
  },
  {
    question: 'Is the pricing in USD or INR?',
    answer: 'Prices are shown in USD but automatically converted to INR (₹) at checkout based on current rates.'
  }
];