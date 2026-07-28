import React from 'react';
import { motion } from 'motion/react';
import { Clock, CheckCircle, Users, Zap, Award, ExternalLink, ArrowRight } from 'lucide-react';
import { PROFILE_INFO } from '../data/portfolioData';

export const AboutMeSection: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-[#2F4858] transition-colors relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#F6445F] bg-[#F6445F]/10 px-3.5 py-1.5 rounded-full">
            Perfil Profesional
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2F4858] dark:text-white mt-3">
            Acerca de Mí
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#FF6D09] to-[#C5478D] mx-auto mt-3 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Story & Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <h3 className="text-2xl font-bold text-[#2F4858] dark:text-white">
              Combinando la precisión del <span className="text-[#FF6D09]">Diseño Gráfico</span> con la potencia del <span className="text-[#F6445F]">Código Full-Stack</span>
            </h3>

            <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
              Soy un Desarrollador Web Full-Stack radicado en Río Tercero, Córdoba (Argentina) con más de 8 años de trayectoria profesional. Inicié mi camino en el mundo del diseño gráfico corporativo (2011), lo que me otorgó una sensibilidad visual única para maquetar interfaces web estéticas, accesibles e intachables.
            </p>

            <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
              Desde 2016, me he dedicado al desarrollo web freelance y en colaboración activa con agencias de marketing digital líderes como <strong>JJLBRO</strong> y <strong>La Generatriz</strong>. Especializado en arquitectura de sitios en <strong>WordPress (Custom PHP)</strong> y aplicaciones dinámicas en <strong>React.js</strong>.
            </p>

            <div className="bg-gray-50 dark:bg-[#415481]/40 p-5 rounded-2xl border border-gray-100 dark:border-gray-700/60 space-y-3">
              <h4 className="text-sm font-bold text-[#2F4858] dark:text-white flex items-center gap-2">
                <Award className="w-4 h-4 text-[#FF6D09]" />
                <span>¿Qué me diferencia?</span>
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                  <span>Enfoque en WPO (-80% velocidad)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                  <span>Código limpio PHP 8 & React ES6+</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                  <span>Criterio UI/UX de Diseñador Gráfico</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                  <span>Soporte técnico directo & ágil</span>
                </li>
              </ul>
            </div>

            <div className="pt-2">
              <a
                href="#portfolio"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#FF6D09] to-[#F6445F] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5"
              >
                <span>Ver mi Portafolio</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Right Column: Key Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {/* Stat Card 1 */}
            <div className="bg-gradient-to-br from-white to-orange-50/50 dark:from-[#415481]/60 dark:to-[#2F4858] p-6 rounded-2xl border border-orange-100 dark:border-gray-700 shadow-md hover:shadow-lg transition-all group">
              <div className="w-12 h-12 rounded-xl bg-[#FF6D09]/10 text-[#FF6D09] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Clock className="w-6 h-6" />
              </div>
              <p className="text-3xl font-black text-[#2F4858] dark:text-white">8+ Años</p>
              <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mt-1">Experiencia Laboral</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">Desarrollo web constante desde 2016.</p>
            </div>

            {/* Stat Card 2 */}
            <div className="bg-gradient-to-br from-white to-pink-50/50 dark:from-[#415481]/60 dark:to-[#2F4858] p-6 rounded-2xl border border-pink-100 dark:border-gray-700 shadow-md hover:shadow-lg transition-all group">
              <div className="w-12 h-12 rounded-xl bg-[#F6445F]/10 text-[#F6445F] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <CheckCircle className="w-6 h-6" />
              </div>
              <p className="text-3xl font-black text-[#2F4858] dark:text-white">30+ Sitios</p>
              <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mt-1">Proyectos Completados</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">Portales, e-commerce & landing pages.</p>
            </div>

            {/* Stat Card 3 */}
            <div className="bg-gradient-to-br from-white to-purple-50/50 dark:from-[#415481]/60 dark:to-[#2F4858] p-6 rounded-2xl border border-purple-100 dark:border-gray-700 shadow-md hover:shadow-lg transition-all group">
              <div className="w-12 h-12 rounded-xl bg-[#7E5498]/10 text-[#7E5498] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6" />
              </div>
              <p className="text-3xl font-black text-[#2F4858] dark:text-white">25+ Clientes</p>
              <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mt-1">Satisfechos</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">Empresas locales, agencias y clientes int.</p>
            </div>

            {/* Stat Card 4 */}
            <div className="bg-gradient-to-br from-white to-blue-50/50 dark:from-[#415481]/60 dark:to-[#2F4858] p-6 rounded-2xl border border-blue-100 dark:border-gray-700 shadow-md hover:shadow-lg transition-all group">
              <div className="w-12 h-12 rounded-xl bg-[#415481]/10 text-[#415481] dark:bg-blue-400/20 dark:text-blue-300 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6" />
              </div>
              <p className="text-3xl font-black text-[#2F4858] dark:text-white">80% WPO</p>
              <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mt-1">Reducción de Carga</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">Optimización demostrada en PageSpeed.</p>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
