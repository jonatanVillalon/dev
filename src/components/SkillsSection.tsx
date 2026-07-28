import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SKILLS_DATA, PROFILE_INFO } from '../data/portfolioData';
import { Code2, Zap, Layers, Globe, CheckCircle2 } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'backend' | 'tools' | 'frontend'>('all');

  const categories = [
    { id: 'all', label: 'Todas las Habilidades', icon: Layers },
    { id: 'backend', label: 'Especialidad WordPress & Backend', icon: Globe },
    { id: 'tools', label: 'WPO, Servidores & SEO', icon: Zap },
    { id: 'frontend', label: 'Front-End Development', icon: Code2 },
  ];

  const filteredSkills = activeTab === 'all'
    ? SKILLS_DATA
    : SKILLS_DATA.filter((skill) => skill.category === activeTab);

  return (
    <section id="skills" className="py-20 bg-slate-50 dark:bg-[#2F4858]/80 transition-colors relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#FF6D09] bg-[#FF6D09]/10 px-3.5 py-1.5 rounded-full">
            Ecosistema WordPress & Web
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2F4858] dark:text-white mt-3">
            Habilidades & Especialidad Técnica
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mt-2">
            Desarrollo a medida sobre WordPress, arquitectura PHP 8, WooCommerce y optimizaciones WPO de alto impacto.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#FF6D09] to-[#F6445F] mx-auto mt-3 rounded-full" />
        </div>

        {/* WordPress Highlight Banner */}
        <div className="mb-12 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#2F4858] via-[#1f323f] to-[#2F4858] text-white border border-gray-700/80 shadow-2xl relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none">
            <svg className="w-80 h-80 fill-current text-white" viewBox="0 0 24 24">
              <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 0 1-5.18-1.92l4.13-11.33 3 8.35.88-2.58a33 33 0 0 1 .8 2.65A8 8 0 0 1 12 20zm6.18-4.23a8 8 0 0 1-2.12 2.37l2.25-6.52a7.86 7.86 0 0 1-.13 4.15zM12 4a7.92 7.92 0 0 1 5.3 2.08L14.6 13.8l-2.73-7.58a.8.8 0 0 0-.75-.52h-.17a.8.8 0 0 0-.75.52L7.47 13.8 4.77 6.08A7.92 7.92 0 0 1 12 4zM4.18 8.1l3.52 9.8A8 8 0 0 1 4 12a7.87 7.87 0 0 1 .18-3.9z" />
            </svg>
          </div>

          <div className="relative z-10 max-w-4xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#FF6D09] text-white font-bold text-xs">
              <Globe className="w-3.5 h-3.5" />
              <span>WordPress Specialist Architecture</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              ¿Por qué desarrollar tus proyectos en WordPress conmigo?
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
              No utilizo plantillas genéricas pesadas ni plugins superfluos. Programo temas personalizados en PHP 8, configuro maquetadores visuales limpios (Elementor / Divi) para fácil autogestión de tu equipo, e implemento seguridad y velocidad WPO de estándar profesional.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 pt-2">
              {PROFILE_INFO.wordpressStack.map((item, i) => (
                <div key={i} className="flex items-start gap-2 bg-white/10 p-2.5 rounded-xl backdrop-blur-sm border border-white/10">
                  <CheckCircle2 className="w-4 h-4 text-[#FF6D09] shrink-0 mt-0.5" />
                  <span className="text-xs font-semibold text-gray-100">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id as any)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-[#FF6D09] via-[#F6445F] to-[#C5478D] text-white shadow-md'
                    : 'bg-white dark:bg-[#415481]/50 text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-[#415481]'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`p-6 rounded-2xl border shadow-sm hover:shadow-md transition-all group ${
                skill.featured
                  ? 'bg-white dark:bg-[#415481]/80 border-[#FF6D09]/40 ring-1 ring-[#FF6D09]/30'
                  : 'bg-white dark:bg-[#415481]/60 border-gray-100 dark:border-gray-700/80'
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#FF6D09]/10 to-[#C5478D]/10 text-[#FF6D09] flex items-center justify-center font-bold text-sm group-hover:scale-110 transition-transform">
                    {skill.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-[#2F4858] dark:text-white leading-tight">
                      {skill.name}
                    </h3>
                    <span className="text-xs text-gray-400 font-medium">
                      {skill.yearsExperience} de experiencia
                    </span>
                  </div>
                </div>

                <span className="text-xs font-bold px-2.5 py-1 rounded-md bg-[#FF6D09]/10 text-[#FF6D09] dark:text-orange-300">
                  {skill.level}%
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full bg-gray-100 dark:bg-gray-700 h-2 rounded-full overflow-hidden mb-3">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 }}
                  className="h-full bg-gradient-to-r from-[#FF6D09] via-[#F6445F] to-[#7E5498] rounded-full"
                />
              </div>

              <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed">
                {skill.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
