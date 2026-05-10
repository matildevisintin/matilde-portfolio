import { CaseStudiesSection } from './components/CaseStudiesSection'
import { ContactSection } from './components/ContactSection'
import { Footer } from './components/Footer'
import { HeroSection } from './components/HeroSection'
import { HowIWorkSection } from './components/HowIWorkSection'
import { InsightsSection } from './components/InsightsSection'
import { Navbar } from './components/Navbar'
import { StrategicFitSection } from './components/StrategicFitSection'

function App() {
  return (
    <div className="min-h-svh">
      <Navbar />
      <main>
        <HeroSection />
        <HowIWorkSection />
        <StrategicFitSection />
        <CaseStudiesSection />
        <InsightsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
