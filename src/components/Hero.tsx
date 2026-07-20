'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden rune-bg z-10 pt-20">
      {/* Epic Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Fire vortex left - sutil */}
        <div className="absolute top-0 left-0 w-2/3 h-full">
          <div className="absolute inset-0 bg-gradient-to-r from-[#ff6b35]/10 via-[#ff4500]/05 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-[#8b4513]/15 to-transparent" />
        </div>
        {/* Ice vortex right - sutil */}
        <div className="absolute top-0 right-0 w-2/3 h-full">
          <div className="absolute inset-0 bg-gradient-to-l from-[#4dc9f6]/08 via-[#2a88b4]/04 to-transparent" />
          <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-[#1a5a8a]/10 to-transparent" />
        </div>
      </div>

      {/* Epic Floating Runes */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-gold text-7xl"
            style={{
              left: `${8 + i * 8}%`,
              top: `${10 + (i % 4) * 22}%`,
              opacity: 0.04,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 8, -8, 0],
              opacity: [0.03, 0.07, 0.03],
            }}
            transition={{
              duration: 5 + i * 0.5,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          >
            {['ᚠ', 'ᚢ', 'ᚦ', 'ᚨ', 'ᚱ', 'ᚲ', 'ᚷ', 'ᚹ', 'ᚺ', 'ᚾ', 'ᛁ', 'ᛃ'][i]}
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="text-center lg:text-left"
          >
            {/* Epic Distance Buttons */}
            <div className="flex gap-4 justify-center lg:justify-start mb-10">
              <motion.a
                href="#categorias"
                whileHover={{ scale: 1.08, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="relative group"
                style={{ clipPath: 'polygon(12% 0%, 100% 0%, 88% 100%, 0% 100%)' }}
              >
                <div className="btn-metallic px-7 py-3 text-center">
                  <span className="text-2xl font-bold font-cinzel-decorative block">8K</span>
                  <span className="block text-[10px] text-text-muted tracking-[0.3em] mt-0.5">COMPETITIVA</span>
                </div>
              </motion.a>
              <motion.a
                href="#categorias"
                whileHover={{ scale: 1.08, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="relative group"
                style={{ clipPath: 'polygon(12% 0%, 100% 0%, 88% 100%, 0% 100%)' }}
              >
                <div className="btn-metallic btn-ice px-7 py-3 text-center">
                  <span className="text-2xl font-bold font-cinzel-decorative block">4K</span>
                  <span className="block text-[10px] text-text-muted tracking-[0.3em] mt-0.5">PARTICIPATIVA</span>
                </div>
              </motion.a>
            </div>

            {/* Epic Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="font-cinzel-decorative text-4xl sm:text-5xl lg:text-7xl font-black text-foreground leading-[1.1] mb-6 sm:mb-8"
            >
              <span className="block">¿ESTÁS</span>
              <span className="block">LISTO PARA</span>
              <span className="block fire-glow text-fire-orange">ENFRENTAR</span>
              <span className="block">EL DESAFÍO?</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-text-muted text-base sm:text-xl mb-6 sm:mb-10 max-w-lg leading-relaxed"
            >
              Preparate para la Kraken Edición Fox OCR, una carrera nocturna de obstáculos 
              que pondrá a prueba tu límite.
            </motion.p>

            {/* Epic CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-5 justify-center lg:justify-start"
            >
              <a href="https://docs.google.com/forms/d/e/1FAIpQLSe01OK_gxpEGqR-k66WhjM-f-hLsZksB0C_0GfDKTfFnBXsaw/viewform" target="_blank" rel="noopener noreferrer" className="btn-metallic btn-fire px-6 sm:px-10 py-4 sm:py-5 text-xs sm:text-sm">
                PARTICIPA EN LA CARRERA
              </a>
              <a href="#la-carrera" className="btn-metallic px-6 sm:px-10 py-4 sm:py-5 text-xs sm:text-sm">
                MÁS INFORMACIÓN
              </a>
            </motion.div>
          </motion.div>

          {/* Right - Epic Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
            className="relative flex justify-center"
          >
            {/* Epic glowing rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <motion.div
                animate={{
                  boxShadow: [
                    '0 0 60px rgba(255, 107, 53, 0.4), 0 0 120px rgba(77, 201, 246, 0.3), 0 0 180px rgba(212, 168, 67, 0.2)',
                    '0 0 80px rgba(255, 107, 53, 0.6), 0 0 160px rgba(77, 201, 246, 0.4), 0 0 240px rgba(212, 168, 67, 0.3)',
                    '0 0 60px rgba(255, 107, 53, 0.4), 0 0 120px rgba(77, 201, 246, 0.3), 0 0 180px rgba(212, 168, 67, 0.2)',
                  ],
                }}
                transition={{ duration: 5, repeat: Infinity }}
                className="w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] rounded-full border-2 border-gold/30"
              />
            </div>

            {/* Multiple decorative rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
                className="w-[280px] h-[280px] sm:w-[450px] sm:h-[450px] rounded-full border border-gold/15"
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 45, repeat: Infinity, ease: 'linear' }}
                className="absolute w-[320px] h-[320px] sm:w-[500px] sm:h-[500px] rounded-full border border-fire-orange/10"
              />
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
                className="absolute w-[360px] h-[360px] sm:w-[550px] sm:h-[550px] rounded-full border border-ice-blue/10"
              />
            </div>

            {/* Logo Image - Epic floating */}
            <motion.div
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, 1, -1, 0],
              }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              className="relative"
            >
              <Image
                src="/logo-kraken.png"
                alt="Kraken Edition Fox OCR Logo"
                width={420}
                height={420}
                className="relative z-10 drop-shadow-[0_0_60px_rgba(212,168,67,0.4)] w-[200px] sm:w-[300px] lg:w-[420px] h-auto"
                priority
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Epic Location Badge */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-12 sm:mt-20 flex justify-center"
        >
          <div className="relative">
            {/* Top ornamental line */}
            <div className="absolute -top-4 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />
            
            {/* Main badge - Epic style */}
            <div 
              className="relative px-8 sm:px-20 py-5 sm:py-8 text-center"
              style={{
                background: 'linear-gradient(180deg, #1a1815 0%, #0a0908 50%, #060504 100%)',
                borderTop: '3px solid #d4a843',
                borderBottom: '3px solid #d4a843',
                boxShadow: '0 0 50px rgba(212, 168, 67, 0.3), inset 0 0 30px rgba(0, 0, 0, 0.5)',
              }}
            >
              {/* Corner ornaments */}
              <div className="absolute top-3 left-4 text-gold/70 text-xl hidden sm:block">◆</div>
              <div className="absolute top-3 right-4 text-gold/70 text-xl hidden sm:block">◆</div>
              <div className="absolute bottom-3 left-4 text-gold/70 text-xl hidden sm:block">◆</div>
              <div className="absolute bottom-3 right-4 text-gold/70 text-xl hidden sm:block">◆</div>
              
              {/* Side ornaments */}
              <div className="absolute top-1/2 -left-3 -translate-y-1/2 text-gold/50 text-2xl hidden sm:block">⚔</div>
              <div className="absolute top-1/2 -right-3 -translate-y-1/2 text-gold/50 text-2xl rotate-180 hidden sm:block">⚔</div>
              
              <h3 className="font-cinzel-decorative text-xl sm:text-3xl font-black text-gold gold-glow tracking-[0.1em] sm:tracking-[0.2em]">
                VILLA DE SOTO
              </h3>
              <p className="text-text-muted tracking-[0.2em] sm:tracking-[0.5em] mt-1 sm:mt-2 text-xs sm:text-sm">5 DE DICIEMBRE</p>
            </div>
            
            {/* Bottom ornamental line */}
            <div className="absolute -bottom-4 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />
          </div>
        </motion.div>
      </div>

      {/* Epic Fire Bottom */}
      <div className="fire-bottom" />
    </section>
  );
}
