import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, ArrowRight, Globe } from 'lucide-react';

interface NavbarProps {
  isDark: boolean;
  setIsDark: (val: boolean) => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  isDark,
  setIsDark,
  activeSection
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'Inicio' },
    { href: '#about', label: 'Acerca de Mí' },
    { href: '#skills', label: 'Especialidad WordPress & Skills' },
    { href: '#portfolio', label: 'Portafolio' },
    { href: '#contact', label: 'Contacto' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 dark:bg-[#2F4858]/95 backdrop-blur-md shadow-lg py-3 border-b border-gray-100 dark:border-gray-800'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#FF6D09] via-[#F6445F] to-[#7E5498] flex items-center justify-center text-white font-black text-xl shadow-md group-hover:scale-105 transition-transform">
            JV
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-lg tracking-tight text-[#2F4858] dark:text-white leading-none">
              JONATAN<span className="text-[#FF6D09]">.</span>VILLALÓN
            </span>
            <span className="text-[11px] text-[#FF6D09] font-bold mt-0.5 flex items-center gap-1">
              <Globe className="w-3 h-3 inline" /> WordPress & Full-Stack
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.replace('#', '');
            return (
              <a
                key={link.href}
                href={link.href}
                className={`px-3.5 py-2 rounded-xl text-sm font-semibold transition-colors ${
                  isActive
                    ? 'text-[#F6445F] bg-[#F6445F]/10 font-bold'
                    : 'text-[#2F4858] dark:text-gray-200 hover:text-[#FF6D09] dark:hover:text-[#FF6D09]'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="hidden md:flex items-center space-x-3">
          {/* Theme Toggle */}
          <button
            onClick={() => setIsDark(!isDark)}
            aria-label="Cambiar tema"
            className="p-2.5 rounded-xl bg-gray-100 dark:bg-[#415481]/50 text-[#2F4858] dark:text-yellow-400 hover:bg-gray-200 dark:hover:bg-[#415481] transition-colors"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5 text-[#2F4858]" />}
          </button>

          {/* Contact CTA */}
          <a
            href="#contact"
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-gradient-to-r from-[#FF6D09] to-[#F6445F] text-white font-bold text-xs shadow-md hover:shadow-lg hover:opacity-95 transition-all transform hover:-translate-y-0.5"
          >
            <span>Hablemos</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center space-x-2">
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-yellow-400"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-[#2F4858] border-b border-gray-200 dark:border-gray-700 px-4 pt-2 pb-6 space-y-3 shadow-xl">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-base font-medium text-[#2F4858] dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-[#415481]"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-2 border-t border-gray-100 dark:border-gray-700 flex flex-col gap-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 rounded-xl bg-gradient-to-r from-[#FF6D09] to-[#F6445F] text-white font-bold text-sm shadow-md"
            >
              Hablemos de tu Proyecto
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
