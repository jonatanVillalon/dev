import React, { useState } from 'react';
import { motion } from 'motion/react';
import confetti from 'canvas-confetti';
import { PROFILE_INFO } from '../data/portfolioData';
import { Mail, Phone, MapPin, Send, CheckCircle2, Linkedin, Github, MessageSquare, ArrowUpRight } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'wordpress',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [lastMethod, setLastMethod] = useState<'email' | 'whatsapp'>('email');
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.name.trim() || !formData.message.trim()) {
      setErrorMsg('Por favor ingresa tu Nombre y los detalles de tu Consulta para enviar por WhatsApp.');
      return;
    }

    setLastMethod('whatsapp');
    setIsSubmitting(true);

    const waText = encodeURIComponent(
      `Hola Jonatan, soy ${formData.name}.\n` +
      `Email: ${formData.email || 'No especificado'}\n` +
      `Teléfono: ${formData.phone || 'No especificado'}\n` +
      `Tipo de proyecto: ${formData.projectType}\n` +
      `Mensaje: ${formData.message}`
    );

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 }, colors: ['#25D366', '#FF6D09', '#F6445F'] });
      window.open(`https://wa.me/543571354416?text=${waText}`, '_blank');
    }, 600);
  };

  const handleSendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg('');

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMsg('Por favor completa Nombre, Email y Detalles de la consulta.');
      return;
    }

    setLastMethod('email');
    setIsSubmitting(true);

    const mailSubject = encodeURIComponent(`Consulta Web: ${formData.projectType} - ${formData.name}`);
    const mailBody = encodeURIComponent(
      `Nombre: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Teléfono: ${formData.phone}\n` +
      `Tipo de proyecto: ${formData.projectType}\n\n` +
      `Mensaje:\n${formData.message}`
    );

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 }, colors: ['#FF6D09', '#F6445F', '#C5478D'] });
      window.location.href = `mailto:${PROFILE_INFO.email}?subject=${mailSubject}&body=${mailBody}`;
    }, 600);
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-[#2F4858] transition-colors relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-[#FF6D09] bg-[#FF6D09]/10 px-3.5 py-1.5 rounded-full">
            Inicia tu Proyecto
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2F4858] dark:text-white mt-3">
            ¡Hablemos de tu Proyecto!
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mt-2">
            Puedes enviar tu mensaje directamente a mi correo electrónico (<strong>villalonjonatan@gmail.com</strong>) o escribirme al instante por <strong>WhatsApp</strong>.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-[#FF6D09] to-[#F6445F] mx-auto mt-3 rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="bg-gradient-to-br from-[#2F4858] to-[#415481] p-8 rounded-3xl text-white shadow-xl space-y-6">
              <h3 className="text-2xl font-bold">
                Información de Contacto Directo
              </h3>
              <p className="text-xs text-gray-200 leading-relaxed">
                Elige la vía de comunicación de tu preferencia. Respondo activamente todas las consultas en menos de 24 horas.
              </p>

              <div className="space-y-4 pt-2">
                {/* Email Direct */}
                <a
                  href={`mailto:${PROFILE_INFO.email}`}
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-white/10 hover:bg-white/20 transition-all border border-white/10 group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#FF6D09] flex items-center justify-center text-white shrink-0 shadow-md">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[11px] text-gray-300 font-medium">Correo Electrónico Directo</p>
                      <p className="text-sm font-bold">{PROFILE_INFO.email}</p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-gray-300 group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                {/* WhatsApp Direct */}
                <a
                  href={`https://wa.me/543571354416?text=Hola%20Jonatan,%20vi%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20consultarte%20por%20un%20proyecto.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-[#25D366]/20 hover:bg-[#25D366]/30 transition-all border border-[#25D366]/40 group"
                >
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#25D366] flex items-center justify-center text-white shrink-0 shadow-md">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[11px] text-emerald-200 font-medium">WhatsApp Inmediato</p>
                      <p className="text-sm font-bold text-white">{PROFILE_INFO.phone}</p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-emerald-300 group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                {/* Location */}
                <div className="flex items-center gap-3.5 p-3.5 rounded-2xl bg-white/10 border border-white/5">
                  <div className="w-10 h-10 rounded-xl bg-[#7E5498] flex items-center justify-center text-white shrink-0 shadow-md">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[11px] text-gray-300 font-medium">Ubicación</p>
                    <p className="text-sm font-bold">{PROFILE_INFO.location}</p>
                  </div>
                </div>
              </div>

              {/* Social Networks */}
              <div className="pt-4 border-t border-white/10 flex items-center gap-3">
                <a
                  href={PROFILE_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/10 hover:bg-[#FF6D09] transition-colors"
                  title="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href={PROFILE_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/10 hover:bg-[#FF6D09] transition-colors"
                  title="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 bg-slate-50 dark:bg-[#415481]/60 p-8 sm:p-10 rounded-3xl border border-gray-200 dark:border-gray-700 shadow-xl"
          >
            {isSuccess ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 mx-auto flex items-center justify-center animate-bounce">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-[#2F4858] dark:text-white">
                  ¡Consulta Lista para Enviar!
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm max-w-md mx-auto">
                  {lastMethod === 'whatsapp'
                    ? 'Tu mensaje se ha abierto en WhatsApp para enviarlo al instante.'
                    : `Tu consulta se ha preparado hacia ${PROFILE_INFO.email}. Responderé a la brevedad.`}
                </p>
                <button
                  onClick={() => {
                    setIsSuccess(false);
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      projectType: 'wordpress',
                      message: ''
                    });
                  }}
                  className="px-6 py-2.5 rounded-xl bg-[#FF6D09] text-white font-bold text-xs hover:bg-[#FF6D09]/90 transition-colors"
                >
                  Escribir otra consulta
                </button>
              </div>
            ) : (
              <div className="space-y-5">
                <h3 className="text-xl font-bold text-[#2F4858] dark:text-white mb-2">
                  Completa tus datos y elige cómo enviarlo
                </h3>

                {errorMsg && (
                  <div className="p-3 rounded-xl bg-red-100 text-red-700 text-xs font-semibold">
                    {errorMsg}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 dark:text-gray-200 mb-1">
                      Tu Nombre *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Ej. Juan Pérez"
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#2F4858] border border-gray-200 dark:border-gray-700 text-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-[#FF6D09] outline-none"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 dark:text-gray-200 mb-1">
                      Correo Electrónico *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="tuemail@empresa.com"
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#2F4858] border border-gray-200 dark:border-gray-700 text-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-[#FF6D09] outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 dark:text-gray-200 mb-1">
                      Teléfono / WhatsApp (Opcional)
                    </label>
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+54 9 3571..."
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#2F4858] border border-gray-200 dark:border-gray-700 text-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-[#FF6D09] outline-none"
                    />
                  </div>

                  {/* Project Type */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 dark:text-gray-200 mb-1">
                      Tipo de Proyecto
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#2F4858] border border-gray-200 dark:border-gray-700 text-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-[#FF6D09] outline-none"
                    >
                      <option value="wordpress">Sitio WordPress / PHP a Medida</option>
                      <option value="speed">Optimización de Velocidad WPO (-80%)</option>
                      <option value="ecommerce">Tienda E-Commerce WooCommerce / Cotizador</option>
                      <option value="react">Aplicación Frontend / Custom Web</option>
                      <option value="full-time">Contratación Remota / Freelance</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-bold text-gray-700 dark:text-gray-200 mb-1">
                    Detalles de tu Consulta *
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Cuéntame sobre tu sitio web, objetivos o requisitos del proyecto..."
                    className="w-full px-4 py-3 rounded-xl bg-white dark:bg-[#2F4858] border border-gray-200 dark:border-gray-700 text-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-[#FF6D09] outline-none resize-none"
                  />
                </div>

                {/* Action Buttons: WhatsApp & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <button
                    type="button"
                    onClick={handleSendWhatsApp}
                    disabled={isSubmitting}
                    className="py-3.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Enviar por WhatsApp</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleSendEmail}
                    disabled={isSubmitting}
                    className="py-3.5 px-4 rounded-xl bg-gradient-to-r from-[#FF6D09] to-[#F6445F] hover:opacity-95 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Enviar a villalonjonatan@gmail.com</span>
                  </button>
                </div>
              </div>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
};
