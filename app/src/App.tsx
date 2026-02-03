import './App.css';
import Navigation from './components/Navigation';
import HeroSection from './sections/HeroSection';
import EducationSection from './sections/EducationSection';
import ResearchSection from './sections/ResearchSection';
import PublicationsSection from './sections/PublicationsSection';
import InternshipSection from './sections/InternshipSection';
import HonorsSection from './sections/HonorsSection';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <HeroSection />
        <div className="section-divider"></div>
        <EducationSection />
        <ResearchSection />
        <PublicationsSection />
        <InternshipSection />
        <HonorsSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
