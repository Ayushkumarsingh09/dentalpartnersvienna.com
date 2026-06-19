import logo from '../assets/images/logo-header.png'
import logoWhite from '../assets/images/logo-white.png'
import hero from '../assets/images/37header-min.png'
import heroPatient from '../assets/images/hero-patient.jpg'
import drCorbett from '../assets/images/IMG_2216.jpeg'
import officePractice from '../assets/images/Our-Practice-min.png'
import officeTreatment from '../assets/images/office-treatment.jpg'
import officeNewPatients from '../assets/images/new-patients.jpg'
import community from '../assets/images/Vienna.jpeg'
import teensCare from '../assets/images/invisalign-aligners.jpg'
import adultsCare from '../assets/images/adults-care.jpg'
import seniorsCare from '../assets/images/patient-smiling.jpg'
import cosmetic from '../assets/images/teeth-whitening.webp'
import restorative from '../assets/images/comfort-care.jpg'
import emergency from '../assets/images/surgical-care.jpg'
import technology from '../assets/images/technology.jpg'
import beforeAfterInvisalign from '../assets/images/before-after-invisalign.jpg'
import beforeAfterWhitening from '../assets/images/before-after-whitening.jpg'
import beforeAfterCosmetic from '../assets/images/before-after-cosmetic.jpg'
import sunbit from '../assets/images/sunbit.png'
import invisalignLogo from '../assets/images/invisalign-logo.png'

/** Bundled image URLs — avoids OneDrive public/ folder lock issues */
export const IMAGES = {
  logo,
  logoWhite,
  hero,
  heroPatient,
  drCorbett,
  officePractice,
  officeTreatment,
  officeNewPatients,
  community,
  kidsCare: officePractice,
  teensCare,
  adultsCare,
  seniorsCare,
  preventive: officePractice,
  cosmetic,
  restorative,
  emergency,
  family: heroPatient,
  comfort: officeTreatment,
  technology,
  beforeAfterInvisalign,
  beforeAfterWhitening,
  beforeAfterCosmetic,
  sunbit,
  invisalignLogo,
} as const
