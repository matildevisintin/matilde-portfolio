import { CaseStudiesSection } from './components/CaseStudiesSection'
import { ContactSection } from './components/ContactSection'
import { CredibilityStrip } from './components/CredibilityStrip'
import { Footer } from './components/Footer'
import { HeroSection } from './components/HeroSection'
import { HowIWorkSection } from './components/HowIWorkSection'
import { Navbar } from './components/Navbar'
import { StrategicFitSection } from './components/StrategicFitSection'

function App() {
  return (
    <div className="min-h-svh">
      <Navbar />
      <main>
        <HeroSection />
        <CredibilityStrip />
        <HowIWorkSection />
        <StrategicFitSection />
        <CaseStudiesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
