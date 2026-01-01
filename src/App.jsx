import Header from './components/Header'
import HeroSection from './components/HeroSection'
import WorkflowSection from './components/WorkflowSection'
import FeatureSection from './components/FeatureSection'
import ComparisonSection from './components/ComparisonSection'
import CTASection from './components/CTASection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <WorkflowSection />
        <FeatureSection />
        <ComparisonSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}

export default App
