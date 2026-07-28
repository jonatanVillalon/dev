import React from 'react';
import { PROFILE_INFO } from '../data/portfolioData';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1C2D37] text-white pt-16 pb-8 border-t border-gray-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-gray-700/80 items-center">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-[#FF6D09] to-[#F6445F] flex items-center justify-center font-bold text-white text-sm">
                JV
              </div>
              <span className="font-black text-xl tracking-tight">
                JONATAN<span className="text-[#FF6D09]">.</span>VILLALÓN
              </span>
            </div>
            <p className="text-xs text-gray-300 max-w-sm leading-relaxed">
              Desarrollador Web Experto en WordPress, PHP 8 & E-Commerce WooCommerce con +8 años de experiencia en soluciones web de alta velocidad, WPO y diseño de interfaces.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 flex flex-wrap gap-4 text-xs font-semibold text-gray-300">
            <a href="#home" className="hover:text-[#FF6D09] transition-colors">Inicio</a>
            <a href="#about" className="hover:text-[#FF6D09] transition-colors">Acerca de Mí</a>
            <a href="#skills" className="hover:text-[#FF6D09] transition-colors">Skills WordPress</a>
            <a href="#portfolio" className="hover:text-[#FF6D09] transition-colors">Portafolio</a>
            <a href="#contact" className="hover:text-[#FF6D09] transition-colors">Contacto</a>
          </div>

          {/* Socials & Back to Top */}
          <div className="md:col-span-3 flex items-center justify-start md:justify-end gap-3">
            <a
              href={PROFILE_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/10 hover:bg-[#FF6D09] transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={PROFILE_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/10 hover:bg-[#FF6D09] transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PROFILE_INFO.email}`}
              className="p-2.5 rounded-xl bg-white/10 hover:bg-[#FF6D09] transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-[#FF6D09] text-white hover:bg-[#FF6D09]/90 transition-colors shadow-md ml-2"
              title="Volver arriba"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-400 gap-4">
          <p>© {new Date().getFullYear()} Jonatan Villalón. Todos los derechos reservados.</p>
          <p className="flex items-center gap-1">
            <span>Especializado en WordPress & React</span>
            <Heart className="w-3.5 h-3.5 text-[#F6445F] fill-[#F6445F]" />
          </p>
        </div>
      </div>
    </footer>
  );
};
