import { IMAGES } from './images'

export const SITE = {
  name: 'Dental Partners Vienna',
  tagline: 'Your Trusted Dental Home In Vienna',
  phone: '(229) 268-6079',
  phoneHref: 'tel:2292686079',
  address: '1407 E. Union St, Vienna, GA 31092',
  hours: 'Mon – Thu: 8 AM – 5 PM',
  scheduleUrl: 'https://app.neuralityhealth.ai/scheduler/a01fd5dc-c83f-428e-98cc-13c824b46288',
  payOnlineUrl: 'https://bill.care/practice/a823',
  mapUrl: 'https://maps.google.com/?q=1407+E+Union+St+Vienna+GA+31092',
  experience: '30+',
} as const

export const NAV_LINKS = [
  { label: 'Why Us', href: '#why-us' },
  { label: 'Our Team', href: '#team' },
  { label: 'Services', href: '#services' },
  { label: 'Comfort', href: '#comfort' },
  { label: 'New Patients', href: '#new-patients' },
  { label: 'Contact', href: '#contact' },
] as const

export const HERO_SERVICES = [
  { label: 'Family Dentistry', icon: 'users' },
  { label: 'Cosmetic Dentistry', icon: 'sparkles' },
  { label: 'Restorative Dentistry', icon: 'shield' },
  { label: 'Emergency Care', icon: 'heart-pulse' },
] as const

export const TRUST_CARDS = [
  {
    title: 'Friendly Team',
    description: 'Warm welcomes and genuine care from the moment you walk in.',
    icon: 'heart',
  },
  {
    title: 'Comfortable Care',
    description: 'Gentle treatment designed to put even anxious patients at ease.',
    icon: 'armchair',
  },
  {
    title: 'Modern Technology',
    description: 'Advanced tools for precise, efficient, and comfortable visits.',
    icon: 'cpu',
  },
  {
    title: 'Family Focused',
    description: 'Comprehensive care for every age — from toddlers to grandparents.',
    icon: 'home',
  },
  {
    title: 'Personalized Treatment',
    description: 'Honest recommendations tailored to your goals and lifestyle.',
    icon: 'user-check',
  },
  {
    title: 'Community Trusted',
    description: 'A hometown practice proudly serving Vienna families for decades.',
    icon: 'map-pin',
  },
] as const

export const DOCTORS = [
  {
    name: 'Dr. Destiny Corbett',
    title: 'Lead Dentist',
    image: IMAGES.drCorbett,
    philosophy:
      'Every patient deserves ethical, exceptional care delivered with compassion. I believe dentistry should feel personal — never rushed, never impersonal.',
    bio: 'Dr. Corbett grew up in Naples, FL and earned her biology degree from The Ohio State University and her doctorate from the University of Florida College of Dentistry. Her passion for dentistry began through a positive relationship with her own pediatric dentist and years of serving children from underserved communities.',
    expertise: ['Family Dentistry', 'Cosmetic Care', 'Restorative Treatment', 'Patient Education'],
    personal: 'When she\'s not caring for smiles, Dr. Corbett enjoys traveling, roller skating, horseback riding, and spending time with loved ones.',
  },
] as const

export const DIFFERENCE_POINTS = [
  {
    title: 'We Listen First',
    description: 'Your concerns, your goals, and your comfort guide every conversation and every treatment plan.',
  },
  {
    title: 'Honest Recommendations',
    description: 'We never push unnecessary procedures. You\'ll always know your options — clearly and transparently.',
  },
  {
    title: 'Relationships Over Routines',
    description: 'We\'re not here for one visit. We\'re here to be your family\'s dental home for years to come.',
  },
  {
    title: 'Comfort Is Our Standard',
    description: 'From gentle techniques to a welcoming atmosphere, every detail is designed to help you relax.',
  },
] as const

export const GENERATIONS = [
  {
    label: 'Kids',
    age: 'Ages 2–12',
    description: 'Gentle first visits that build positive dental habits for life.',
    image: IMAGES.kidsCare,
  },
  {
    label: 'Teens',
    age: 'Ages 13–19',
    description: 'Invisalign®, preventive care, and confidence-building smile solutions.',
    image: IMAGES.teensCare,
  },
  {
    label: 'Adults',
    age: 'Ages 20–64',
    description: 'Cosmetic enhancements, restorative care, and comprehensive wellness.',
    image: IMAGES.adultsCare,
  },
  {
    label: 'Seniors',
    age: 'Ages 65+',
    description: 'Comfortable, dignified care focused on lasting oral health and function.',
    image: IMAGES.seniorsCare,
  },
] as const

export const SERVICES = [
  {
    outcome: 'Healthy Smiles',
    title: 'Preventive Care',
    description: 'Cleanings, exams, and education to keep your family smiling strong.',
    image: IMAGES.preventive,
  },
  {
    outcome: 'Smile Confidence',
    title: 'Cosmetic Dentistry',
    description: 'Whitening, veneers, and Invisalign® to help you love your reflection.',
    image: IMAGES.cosmetic,
  },
  {
    outcome: 'Restored Function',
    title: 'Restorative Dentistry',
    description: 'Crowns, bridges, and implants that look and feel like natural teeth.',
    image: IMAGES.restorative,
  },
  {
    outcome: 'Emergency Relief',
    title: 'Urgent Care',
    description: 'When pain strikes, our team is here to help you find relief fast.',
    image: IMAGES.emergency,
  },
  {
    outcome: 'Lifetime Oral Health',
    title: 'Family Dentistry',
    description: 'One trusted home for every generation of your family\'s dental needs.',
    image: IMAGES.family,
  },
] as const

export const COMFORT_FEATURES = [
  'Gentle, patient-paced treatment',
  'A calm, welcoming office atmosphere',
  'Clear communication at every step',
  'Flexible scheduling for busy families',
  'A team trained in anxiety-friendly care',
] as const

export const TRANSFORMATIONS = [
  {
    title: 'Invisalign® Transformation',
    description: 'Real patient results — straighter, healthier smiles with clear aligners.',
    image: IMAGES.beforeAfterInvisalign,
  },
  {
    title: 'Professional Whitening',
    description: 'Brighter, more confident smiles with professional teeth whitening.',
    image: IMAGES.beforeAfterWhitening,
  },
  {
    title: 'Cosmetic Enhancement',
    description: 'Comprehensive cosmetic treatment for a naturally beautiful smile.',
    image: IMAGES.beforeAfterCosmetic,
  },
] as const

export const REVIEWS = [
  {
    name: 'Sarah M.',
    location: 'Vienna, GA',
    story: 'I was terrified of the dentist until I found Dental Partners. The team made me feel safe from the very first visit. Now my whole family comes here — and we actually look forward to it.',
    highlight: 'Trust & Comfort',
    rating: 5,
  },
  {
    name: 'James & Linda T.',
    location: 'Cordele, GA',
    story: 'We\'ve been patients for years. They remember our names, our kids\' names, and always take time to explain everything. That\'s the kind of care you can\'t find just anywhere.',
    highlight: 'Long-Term Relationships',
    rating: 5,
  },
  {
    name: 'Marcus W.',
    location: 'Vienna, GA',
    story: 'Dr. Corbett is incredibly thorough and honest. She never recommended anything we didn\'t need, and the results from my crown work were amazing. True professionals.',
    highlight: 'Honest Care',
    rating: 5,
  },
  {
    name: 'Angela R.',
    location: 'Unadilla, GA',
    story: 'Brought my three kids here and they actually enjoy going to the dentist now. The staff is so patient and kind. This practice feels like family.',
    highlight: 'Family Focused',
    rating: 5,
  },
] as const

export const OFFICE_IMAGES = [
  { src: IMAGES.officePractice, alt: 'Young patient smiling in the dental chair at Dental Partners Vienna' },
  { src: IMAGES.officeTreatment, alt: 'Modern dental treatment room at Dental Partners Vienna' },
  { src: IMAGES.officeNewPatients, alt: 'Welcoming new patient experience' },
  { src: IMAGES.community, alt: 'Vienna, Georgia community' },
] as const

export const NEW_PATIENT_STEPS = [
  { step: 1, title: 'Schedule Appointment', description: 'Book online or call — we\'ll find a time that works for you.' },
  { step: 2, title: 'Meet The Team', description: 'Get to know your dentist and our friendly, caring staff.' },
  { step: 3, title: 'Comprehensive Evaluation', description: 'A thorough exam to understand your oral health fully.' },
  { step: 4, title: 'Personalized Treatment Plan', description: 'Clear options tailored to your goals and budget.' },
  { step: 5, title: 'Healthy Confident Smile', description: 'Begin your journey to lasting oral health and confidence.' },
] as const

export const INSURANCE_POINTS = [
  {
    title: 'Insurance-Friendly',
    description: 'We work with most major dental insurance plans and help maximize your benefits.',
  },
  {
    title: 'Flexible Financing',
    description: 'Sunbit and CareCredit® options let you pay over time — up to 72 months.',
  },
  {
    title: 'Transparent Pricing',
    description: 'No surprises. You\'ll always understand costs before treatment begins.',
  },
] as const

export { IMAGES }
