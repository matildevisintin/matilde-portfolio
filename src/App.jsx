import { CaseStudiesSection } from './components/CaseStudiesSection'
import { ContactSection}  from './components/ContactSection'
import { Footer } from './components/Footer'
import { HeroSection } from './components/HeroSection'
import { ValuePropositionSection } from './components/ValuePropositionSection'
import { LearningSection } from './components/LearningSection'
import { InsightsSection } from './components/InsightsSection'; 
import { LinkedInSection } from './components/LinkedInSection'
//import { CookieBanner } from './components/CookieBanner'
import  Navbar from './components/Navbar'

function App() {
  return (
    <div className="min-h-svh bg-[var(--color-surface)]">
      <Navbar />
      <main>
        <HeroSection />
        <ValuePropositionSection />
        <LearningSection />
        <CaseStudiesSection />
        <InsightsSection />
        <LinkedInSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
