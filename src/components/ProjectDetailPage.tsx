import React from 'react';
import { motion } from 'motion/react';
import { Project } from '../types';
import { ArrowLeft, ExternalLink, Github, CheckCircle2, Clock, User, Award, Layers, Zap, ShieldCheck } from 'lucide-react';

interface ProjectDetailPageProps {
  project: Project;
  onBack: () => void;
  onOpenContact: () => void;
}

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({
  project,
  onBack,
  onOpenContact
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen pt-28 pb-20 bg-slate-50 dark:bg-[#2F4858] transition-colors"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Top Bar */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white dark:bg-[#415481] text-[#2F4858] dark:text-white font-bold text-sm shadow-sm hover:shadow transition-all border border-gray-200 dark:border-gray-700"
          >
            <ArrowLeft className="w-4 h-4 text-[#FF6D09]" />
            <span>Volver al Portafolio</span>
          </button>

          <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-[#F6445F]/10 text-[#F6445F]">
            {project.categoryLabel}
          </span>
        </div>

        {/* Hero Banner Header */}
        <div className="bg-white dark:bg-[#415481]/70 rounded-3xl p-6 sm:p-10 border border-gray-100 dark:border-gray-700 shadow-xl mb-10 overflow-hidden relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Project Info Column */}
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-semibold text-gray-500 dark:text-gray-300">
              Cliente: {project.client}
                {project.agency && (
                <>
                {' (vía '}
                <a 
                href={project.agency.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="underline hover:opacity-80 transition-opacity font-medium"
                >
                {project.agency.name}
                </a>
                {')'}
                </>
                )} · {project.year}
              </span>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#2F4858] dark:text-white leading-tight">
                {project.title}
              </h1>

              <p className="text-lg text-[#F6445F] font-semibold">
                {project.subtitle}
              </p>

              <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                {project.fullDescription || project.description}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-4">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#FF6D09] to-[#F6445F] text-white font-bold text-sm shadow-md hover:shadow-lg hover:opacity-95 transition-all"
                  >
                    <span>Visitar Sitio Web En Vivo</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-gray-900 text-white font-semibold text-sm hover:bg-gray-800 transition-all"
                  >
                    <Github className="w-4 h-4" />
                    <span>Ver Código en GitHub</span>
                  </a>
                )}

                <button
                  onClick={onOpenContact}
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-[#7E5498]/10 text-[#7E5498] dark:text-purple-300 font-semibold text-sm border border-[#7E5498]/20 hover:bg-[#7E5498]/20 transition-all"
                >
                  <span>Consultar Proyecto Similar</span>
                </button>
              </div>
            </div>

            {/* Project Main Image */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700 relative group">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-72 sm:h-80 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-white text-xs font-semibold">Proyecto ejecutado por Jonatan Villalón</span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Performance Metrics Bar if available */}
        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
            {project.metrics.map((m, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-[#415481]/80 p-5 rounded-2xl border border-orange-100 dark:border-gray-700 shadow-md text-center"
              >
                <div className="text-3xl font-black bg-gradient-to-r from-[#FF6D09] to-[#F6445F] bg-clip-text text-transparent">
                  {m.value}
                </div>
                <div className="text-xs font-semibold text-gray-600 dark:text-gray-300 mt-1">
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Problem vs Solution Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Problem Card */}
          <div className="bg-white dark:bg-[#415481]/60 p-6 sm:p-8 rounded-3xl border border-red-100 dark:border-gray-700/80 shadow-md">
            <div className="w-10 h-10 rounded-xl bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-300 flex items-center justify-center font-bold mb-4">
              !
            </div>
            <h3 className="text-xl font-bold text-[#2F4858] dark:text-white mb-3">
              El Desafío / Problema
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              {project.problem}
            </p>
          </div>

          {/* Solution Card */}
          <div className="bg-white dark:bg-[#415481]/60 p-6 sm:p-8 rounded-3xl border border-green-100 dark:border-gray-700/80 shadow-md">
            <div className="w-10 h-10 rounded-xl bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-300 flex items-center justify-center font-bold mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-bold text-[#2F4858] dark:text-white mb-3">
              Solución Aplicada
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Step-By-Step Development Process */}
        <div className="bg-white dark:bg-[#415481]/60 rounded-3xl p-6 sm:p-10 border border-gray-100 dark:border-gray-700 shadow-xl mb-12">
          <div className="mb-8">
            <span className="text-xs font-bold uppercase text-[#FF6D09]">Metodología de Trabajo</span>
            <h3 className="text-2xl font-bold text-[#2F4858] dark:text-white mt-1">
              Proceso de Desarrollo & Arquitectura
            </h3>
          </div>

          <div className="space-y-6">
            {project.processSteps.map((step, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 dark:bg-[#2F4858]/80 border border-gray-200/60 dark:border-gray-700/60">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#FF6D09] to-[#C5478D] text-white font-bold text-sm flex items-center justify-center shrink-0">
                  {idx + 1}
                </div>
                <div>
                  <h4 className="font-bold text-base text-[#2F4858] dark:text-white">
                    {step.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 mt-1">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies Used Matrix */}
        <div className="bg-white dark:bg-[#415481]/60 rounded-3xl p-6 sm:p-8 border border-gray-100 dark:border-gray-700 shadow-md">
          <h3 className="text-lg font-bold text-[#2F4858] dark:text-white mb-4 flex items-center gap-2">
            <Layers className="w-5 h-5 text-[#FF6D09]" />
            <span>Tecnologías & Herramientas Empleadas</span>
          </h3>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3.5 py-1.5 rounded-xl bg-gray-100 dark:bg-gray-800 text-[#2F4858] dark:text-gray-200 font-semibold text-xs border border-gray-200 dark:border-gray-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Back Button Bottom */}
        <div className="mt-12 text-center">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#FF6D09] to-[#F6445F] text-white font-bold text-sm shadow-lg hover:shadow-xl transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver a la Galería de Proyectos</span>
          </button>
        </div>

      </div>
    </motion.div>
  );
};
