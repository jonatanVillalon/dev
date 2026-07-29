import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Zap, Award, Globe, Code2, Server } from 'lucide-react';
import { PROFILE_INFO } from '../data/portfolioData';
import { JonatanAvatar } from './JonatanAvatar';
import miFotoPerfil from '../../assets/FotoCVNuevaRec.png';

export const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-slate-50 dark:bg-[#2F4858]">
      {/* Subtle Motion Background Particles & Glow Gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-gradient-to-r from-[#FF6D09] to-[#F6445F] blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full bg-gradient-to-r from-[#C5478D] to-[#7E5498] blur-3xl"
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#415481]/10 via-transparent to-transparent pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 dark:bg-[#415481]/80 border border-[#F6445F]/30 text-xs font-semibold text-[#2F4858] dark:text-gray-200 shadow-sm backdrop-blur-md">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Disponible para proyectos WordPress, desarrollo custom & WPO</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#2F4858] dark:text-white leading-[1.12]">
              Desarrollador Experto en{' '}
              <span className="bg-gradient-to-r from-[#FF6D09] via-[#F6445F] to-[#C5478D] bg-clip-text text-transparent">
                WordPress & PHP
              </span>{' '}
              de Alto Rendimiento
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-gray-700 dark:text-gray-200 font-normal max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {PROFILE_INFO.heroSubtitle}
            </p>

            {/* Key Skill Highlights Pills */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 pt-1">
              {['WordPress Custom Themes', 'Plugins PHP 8', 'WooCommerce E-Commerce', 'Elementor / Divi / Gutenberg', 'WPO Speed 90+'].map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-semibold px-3 py-1 rounded-md bg-[#FF6D09]/10 text-[#FF6D09] dark:bg-gray-800 dark:text-[#FF6D09] border border-[#FF6D09]/20"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#FF6D09] via-[#F6445F] to-[#C5478D] text-white font-bold text-base shadow-lg hover:shadow-xl hover:opacity-95 transition-all transform hover:-translate-y-0.5"
              >
                <span>Hablemos de tu Proyecto</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="#portfolio"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white dark:bg-[#415481]/80 text-[#2F4858] dark:text-white font-semibold text-base border border-gray-200 dark:border-gray-700 shadow-sm hover:bg-gray-50 dark:hover:bg-[#415481] transition-all"
              >
                <Globe className="w-4 h-4 text-[#FF6D09]" />
                <span>Ver Portafolio WordPress</span>
              </a>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-gray-200 dark:border-gray-700/60">
              {PROFILE_INFO.stats.map((stat, idx) => (
                <div key={idx} className="text-center lg:text-left">
                  <div className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-[#FF6D09] to-[#C5478D] bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-600 dark:text-gray-300 font-medium mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Image / Jonatan Avatar Card */}
        {/* Right Image / Jonatan Avatar Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center relative"
          >
            <div className="relative flex flex-col items-center">
              
              {/* Tu Fotografía Real */}
              <img 
                src={miFotoPerfil} 
                alt="Jonatan Villalón" 
                className="w-64 h-64 sm:w-80 sm:h-80 object-cover object-center rounded-3xl shadow-2xl border-4 border-white/50 dark:border-gray-700/50 relative z-10"
              />

              {/* Floating Badge 1: Speed Optimization */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-2 sm:-right-6 bg-white dark:bg-[#415481] p-3 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 flex items-center gap-2.5 z-20"
              >
                <div className="w-9 h-9 rounded-xl bg-[#FF6D09]/10 flex items-center justify-center text-[#FF6D09]">
                  <Zap className="w-5 h-5 fill-[#FF6D09]" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-900 dark:text-white">-80% Carga</p>
                  <p className="text-[10px] text-gray-500 dark:text-gray-300">Optimización WPO</p>
                </div>
              </motion.div>

              {/* Floating Badge 2: Certified Experience */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 -left-2 sm:-left-6 bg-white dark:bg-[#415481] p-3 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700 flex items-center gap-2.5 z-20"
              >
                <div className="w-9 h-9 rounded-xl bg-[#7E5498]/10 flex items-center justify-center text-[#7E5498]">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-900 dark:text-white">+8 Años Exp.</p>
                  <p className="text-[10px] text-gray-500 dark:text-gray-300">Desarrollador WordPress</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
