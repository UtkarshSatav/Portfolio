"use client";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './blocks/Navbar/Navbar';
import ThermaText from './blocks/ThermaText/ThermaText';
import Showcase from './blocks/Showcase/Showcase';
import Services from './blocks/Services/Services';
import AboutSection from './blocks/AboutSection/AboutSection';
import WorkSection from './blocks/WorkSection/WorkSection';
import SkillsSection from './blocks/SkillsSection/SkillsSection';
import ContactSection from './blocks/ContactSection/ContactSection';
import Footer from './blocks/Footer/Footer';
import './index.css';

function App() {
  return (
    <Router>
      <div className="bg-black">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              {/* Hero Section */}
              <div className="relative w-full" style={{ height: '100vh', overflow: 'hidden' }}>
                <div className="relative w-full h-full">
                  <div className="fixed inset-0 flex items-center justify-center pointer-events-none">
                    <ThermaText />
                  </div>
                </div>
              </div>
              
              {/* Showcase Section */}
              <Showcase />
              
              {/* Services Section */}
              <Services />
              
              {/* About Section with Cubes Animation */}
              <AboutSection />
              
              {/* Work Section */}
              <WorkSection />
              
              {/* Skills Section */}
              <SkillsSection />
              <ContactSection />
              {/* Footer Section */}
              <Footer />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;