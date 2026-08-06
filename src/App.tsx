import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutMeSection } from './components/AboutMeSection';
import { SkillsSection } from './components/SkillsSection';
import { PortfolioSection } from './components/PortfolioSection';
import { ProjectDetailPage } from './components/ProjectDetailPage';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CustomLoader } from './components/CustomLoader';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Project } from './types';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isDark, setIsDark] = useState(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeSection, setActiveSection] = useState('home');

  // Page Load Timer Simulation
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  // Theme Syncing with documentElement & body
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  // Section Observer on Scroll
  useEffect(() => {
    const handleScroll = () => {
      if (selectedProject) return;
      const sections = ['home', 'about', 'skills', 'portfolio', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [selectedProject]);

  const handleNavClick = (sectionId: string) => {
    // Clear selected project detail view first
    setSelectedProject(null);

    // Scroll smoothly to target section
    setTimeout(() => {
      if (sectionId === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    }, 50);
  };

  const handleOpenContact = () => {
    handleNavClick('contact');
  };

  if (isLoading) {
    return <CustomLoader />;
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#2F4858] text-gray-900 dark:text-gray-100 font-sans transition-colors duration-300 selection:bg-[#FF6D09] selection:text-white relative">
      {/* Navigation Header */}
      <Navbar
        isDark={isDark}
        setIsDark={setIsDark}
        activeSection={activeSection}
        onNavClick={handleNavClick}
      />

      {/* Main Content Area */}
      <main>
        {selectedProject ? (
          /* Standalone Unique Project Detail View */
          <ProjectDetailPage
            project={selectedProject}
            onBack={() => setSelectedProject(null)}
            onOpenContact={handleOpenContact}
          />
        ) : (
          /* Main Portfolio Sections focused on WordPress */
          <>
            <HeroSection />
            <AboutMeSection />
            <SkillsSection />
            <PortfolioSection onSelectProject={(project) => setSelectedProject(project)} />
            <ContactSection />
          </>
        )}
      </main>

      {/* Floating WhatsApp Widget */}
      <FloatingWhatsApp />

      {/* Footer */}
      <Footer onNavClick={handleNavClick} />
    </div>
  );
}
