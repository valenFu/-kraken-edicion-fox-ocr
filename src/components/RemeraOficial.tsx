'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

export default function RemeraOficial() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="remera" className="py-16 sm:py-32 relative rune-bg z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-20"
        >
          <div className="rune-divider mb-6 sm:mb-10" />
          <h2 className="section-title text-gold gold-glow">
            REMERA OFICIAL
          </h2>
        </motion.div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center max-w-5xl mx-auto">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <Image
                src="/remeraOficial.webp"
                alt="Remera Oficial Kraken Edición Fox OCR"
                width={500}
                height={500}
                className="w-full max-w-[300px] sm:max-w-[400px] h-auto drop-shadow-[0_0_30px_rgba(212,168,67,0.3)]"
              />
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="card-stone p-6 sm:p-8">
              <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-gold mb-5 sm:mb-6">
                INCLUSIÓN DEL KIT
              </h3>
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex items-start gap-3 text-text-muted text-base sm:text-lg">
                  <span className="text-fire-orange mt-1 flex-shrink-0">+</span>
                  <span>Solo para inscriptos en <span className="text-foreground font-bold">1º y 2º periodo</span></span>
                </li>
                <li className="flex items-start gap-3 text-text-muted text-base sm:text-lg">
                  <span className="text-fire-orange mt-1 flex-shrink-0">+</span>
                  <span>Vale para <span className="text-foreground font-bold">todas las distancias</span></span>
                </li>
                <li className="flex items-start gap-3 text-text-muted text-base sm:text-lg">
                  <span className="text-fire-orange mt-1 flex-shrink-0">+</span>
                  <span>Diseño exclusivo de la edición Kraken Fox OCR</span>
                </li>
              </ul>

              <div 
                className="mt-6 sm:mt-8 p-4 text-center"
                style={{
                  background: 'linear-gradient(90deg, rgba(255, 107, 53, 0.15), rgba(255, 69, 0, 0.1))',
                  border: '2px solid rgba(255, 107, 53, 0.4)',
                }}
              >
                <p className="text-foreground font-bold text-sm sm:text-base">
                  IMPORTANTE: Se entregan SOLO en 1º y 2º periodo de inscripción
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
