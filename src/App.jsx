import Header from './components/Header';
import HeroSection from './components/HeroSection';
import WorkflowSection from './components/WorkflowSection';
import SolveSection from './components/SolveSection';
import FeatureSection from './components/FeatureSection';
import ComparisonSection from './components/ComparisonSection';
import TrustSection from './components/TrustSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <WorkflowSection />
        <SolveSection />
        <FeatureSection />
        <ComparisonSection />
        <TrustSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
