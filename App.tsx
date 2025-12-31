
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import TechEngagement from './components/TechEngagement';
import Certificates from './components/Certificates';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AIAssistant from './components/AIAssistant';

const App: React.FC = () => {
  // Smooth scroll implementation for hash links
  useEffect(() => {
    const handleHashChange = () => {
      const { hash } = window.location;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-blue-500/30 selection:text-blue-200">
      {/* Dynamic Background */}
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_50%_50%,#1a1a1a_0%,#0a0a0a_100%)]"></div>
      
      {/* Components */}
      <Navbar />
      <main>
        <Hero />
        <section id="about">
           {/* About section is essentially part of Hero and initial content, but could be expanded */}
        </section>
        <Skills />
        <Projects />
        <Education />
        <TechEngagement />
        <Certificates />
        <Contact />
      </main>
      <Footer />
      
      {/* Interactive AI Floating Chat */}
      <AIAssistant />
    </div>
  );
};

export default App;
