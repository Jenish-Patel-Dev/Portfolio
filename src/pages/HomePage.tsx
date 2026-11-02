import React, { useState, useEffect } from 'react';
import { Preloader } from '@/components/layout/Preloader';
import { ScrollProgress } from '@/components/layout/ScrollProgress';
import { CustomCursor } from '@/components/layout/CustomCursor';
import { Navbar } from '@/components/layout/Navbar';
import { Hero } from '@/components/hero/Hero';
import { About } from '@/components/about/About';
import { Skills } from '@/components/skills/Skills';
import { Services } from '@/components/services/Services';
import { Projects } from '@/components/projects/Projects';
import { Experience } from '@/components/experience/Experience';
import { Process } from '@/components/process/Process';
import { WhyMe } from '@/components/whyMe/WhyMe';
import { InteractiveTerminal } from '@/components/terminal/InteractiveTerminal';
import { Contact } from '@/components/contact/Contact';
import { Footer } from '@/components/layout/Footer';

export const HomePage: React.FC = () => {
  const [preloaderComplete, setPreloaderComplete] = useState(false);

  useEffect(() => {
    // Force start at the very top of the page on load
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-theme-bg text-theme-primary selection:bg-[#9B6DFF]/30 selection:text-white transition-colors duration-300">
      {/* Initial Animated Preloader */}
      {!preloaderComplete && (
        <Preloader onComplete={() => setPreloaderComplete(true)} />
      )}

      {/* Trailing Custom Cursor for Desktop */}
      <CustomCursor />

      {/* Top Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Sticky Navigation */}
      <Navbar />

      <main>
        {/* Hero Section with 3D Experience */}
        <Hero />

        {/* About Section */}
        <About />

        {/* Skills Section with 3D Tilt Cards */}
        <Skills />

        {/* Services Section with 6 Offerings */}
        <Services />

        {/* Selected Projects Portfolio Gallery */}
        <Projects />

        {/* Professional Experience & Education Timeline */}
        <Experience />

        {/* Development Process 5-Stage Framework */}
        <Process />

        {/* Why Choose Jenish Patel */}
        <WhyMe />

        {/* Interactive Developer Terminal */}
        <InteractiveTerminal />

        {/* Contact & Freelance Inquiries */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};
