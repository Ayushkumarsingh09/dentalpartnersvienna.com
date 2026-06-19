import { Header } from './components/layout/Header'
import { Footer } from './components/layout/Footer'
import { StickyMobile } from './components/layout/StickyMobile'
import { Hero } from './components/sections/Hero'
import { WhyUs } from './components/sections/WhyUs'
import { Team } from './components/sections/Team'
import { Difference } from './components/sections/Difference'
import { Generations } from './components/sections/Generations'
import { Services } from './components/sections/Services'
import { Comfort } from './components/sections/Comfort'
import { Gallery } from './components/sections/Gallery'
import { PatientStories } from './components/sections/PatientStories'
import { OfficeShowcase } from './components/sections/OfficeShowcase'
import { NewPatients } from './components/sections/NewPatients'
import { Insurance } from './components/sections/Insurance'
import { Community } from './components/sections/Community'
import { Contact } from './components/sections/Contact'
import { FinalCTA } from './components/sections/FinalCTA'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhyUs />
        <Team />
        <Difference />
        <Generations />
        <Services />
        <Comfort />
        <Gallery />
        <PatientStories />
        <OfficeShowcase />
        <NewPatients />
        <Insurance />
        <Community />
        <Contact />
        <FinalCTA />
      </main>
      <Footer />
      <StickyMobile />
    </>
  )
}

export default App
