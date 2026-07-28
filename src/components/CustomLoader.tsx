import React from 'react';
import { motion } from 'motion/react';

export const CustomLoader: React.FC = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#2F4858] text-white">
      {/* Animated Brand Logo Icon */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-[#FF6D09] via-[#F6445F] to-[#7E5498] flex items-center justify-center text-white font-extrabold text-2xl shadow-2xl mb-6"
      >
        JV
      </motion.div>

      {/* Brand Text */}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-black text-xl tracking-wider text-white"
      >
        JONATAN<span className="text-[#FF6D09]">.</span>VILLALÓN
      </motion.h2>

      <p className="text-xs text-gray-300 font-medium mt-1">
        Cargando Experiencia Web...
      </p>

      {/* Progress Line */}
      <div className="w-48 h-1 bg-gray-700 rounded-full mt-6 overflow-hidden">
        <motion.div
          animate={{ x: ['-100%', '100%'] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-full h-full bg-gradient-to-r from-[#FF6D09] via-[#F6445F] to-[#7E5498]"
        />
      </div>
    </div>
  );
};
