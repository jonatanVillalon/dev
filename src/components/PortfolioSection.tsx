import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Project, ProjectCategory } from '../types';
import { ExternalLink, Github, ArrowRight, Layers, Zap, Eye, CheckCircle2 } from 'lucide-react';

interface PortfolioSectionProps {
  onSelectProject: (project: Project) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onSelectProject }) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');

  const categories = [
    { id: 'all', label: 'Todos los Proyectos' },
    { id: 'wordpress', label: 'WordPress & PHP' },
    { id: 'react', label: 'React.js & Custom' },
    { id: 'ecommerce', label: 'E-Commerce' },
    { id: 'performance', label: 'Performance & WPO' },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 bg-white dark:bg-[#2F4858] transition-colors relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#FF6D09] bg-[#FF6D09]/10 px-3.5 py-1.5 rounded-full">
            Casos de Éxito
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2F4858] dark:text-white mt-3">
            Mi Portafolio
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mt-2">
            Explora una selección de proyectos reales desarrollados para agencias, medios y empresas.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#FF6D09] to-[#F6445F] mx-auto mt-3 rounded-full" />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id as ProjectCategory)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-[#FF6D09] via-[#F6445F] to-[#C5478D] text-white shadow-md'
                    : 'bg-gray-100 dark:bg-[#415481]/50 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-[#415481]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Projects Interactive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="bg-white dark:bg-[#415481]/60 rounded-2xl border border-gray-100 dark:border-gray-700/80 shadow-md hover:shadow-xl transition-all overflow-hidden flex flex-col group"
            >
              {/* Image Preview Container */}
              <div className="relative h-52 overflow-hidden bg-gray-100 dark:bg-gray-800">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay Badge */}
                <div className="absolute top-3 left-3 bg-white/90 dark:bg-[#2F4858]/90 backdrop-blur-md px-3 py-1 rounded-lg text-[11px] font-bold text-[#FF6D09] shadow-sm">
                  {project.categoryLabel}
                </div>

                {/* Direct External Links Overlay */}
                <div className="absolute top-3 right-3 flex items-center gap-1.5 opacity-90">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Visitar sitio web en vivo"
                      onClick={(e) => e.stopPropagation()}
                      className="p-2 rounded-lg bg-white/90 dark:bg-gray-900/90 text-gray-800 dark:text-white hover:text-[#FF6D09] shadow-md transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Ver repositorio GitHub"
                      onClick={(e) => e.stopPropagation()}
                      className="p-2 rounded-lg bg-white/90 dark:bg-gray-900/90 text-gray-800 dark:text-white hover:text-[#FF6D09] shadow-md transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

                {/* Hover Quick Action */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2F4858]/90 via-[#2F4858]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-4">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="px-4 py-2 rounded-xl bg-white text-[#2F4858] font-bold text-xs shadow-lg flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform"
                  >
                    <Eye className="w-4 h-4 text-[#FF6D09]" />
                    <span>Ver Proceso & Detalle</span>
                  </button>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-lg text-[#2F4858] dark:text-white group-hover:text-[#FF6D09] transition-colors leading-snug">
                    {project.title}
                  </h3>
                  <p className="text-xs text-[#F6445F] font-semibold mt-0.5">
                    {project.subtitle}
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-300 mt-2 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Tech Pills */}
                <div className="pt-4 mt-4 border-t border-gray-100 dark:border-gray-700/60">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="text-[10px] font-semibold px-1.5 py-0.5 text-gray-400">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Card Footer Button */}
                  <button
                    onClick={() => onSelectProject(project)}
                    className="w-full flex items-center justify-between text-xs font-bold text-[#FF6D09] hover:text-[#F6445F] transition-colors pt-1"
                  >
                    <span>Ver caso completo</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
