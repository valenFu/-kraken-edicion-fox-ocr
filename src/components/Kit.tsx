'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const kitIncludes = [
  { text: 'Medalla finisher a todos los participantes' },
  { text: 'Remera oficial (Solo 1º y 2º PERIODO - Todas las Distancias)' },
  { text: 'Número de Corredor (ELITE - COMPETITIVO - DUOS)' },
  { text: 'Calcomanía (para todos los participantes)' },
  { text: 'Seguro de corredor' },
  { text: 'Médico en llegada y ambulancia de rescate' },
  { text: 'Servicio de paramédicos en el recorrido' },
  { text: 'Derecho a participar' },
  { text: 'Hidratación en el recorrido' },
  { text: 'Sistema de cronometraje' },
  { text: 'Locución y Animación' },
];

export default function Kit() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="kit" className="py-16 sm:py-32 relative rune-bg z-10">
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
            KIT DEL CORREDOR
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-10">
          {/* Kit Includes */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="card-stone p-6 sm:p-10"
          >
            <h3 className="font-cinzel text-xl sm:text-2xl font-bold text-gold mb-6 sm:mb-8 text-center">
              LA INSCRIPCIÓN INCLUYE:
            </h3>
            <ul className="space-y-2 sm:space-y-4">
              {kitIncludes.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                  className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 transition-all hover:bg-stone-medium/50 rounded"
                >
                  <span className="text-gold text-lg sm:text-xl flex-shrink-0">+</span>
                  <span className="text-foreground/90 text-base sm:text-lg">{item.text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Requirements */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6 sm:space-y-8"
          >
            <div className="card-stone p-5 sm:p-8">
              <h4 className="font-cinzel font-bold text-foreground mb-4 sm:mb-5 flex items-center gap-2 sm:gap-3 text-base sm:text-xl">
                <span className="text-fire-orange font-cinzel-decorative text-base sm:text-lg">I</span>
                Todos los participantes:
              </h4>
              <ul className="space-y-2 sm:space-y-3">
                <li className="flex items-start gap-2 sm:gap-3 text-text-muted text-base sm:text-lg">
                  <span className="text-gold mt-1 text-lg sm:text-xl">•</span>
                  Presentar DNI (o Fotocopia)
                </li>
                <li className="flex items-start gap-2 sm:gap-3 text-text-muted text-base sm:text-lg">
                  <span className="text-gold mt-1 text-lg sm:text-xl">•</span>
                  Deslinde de responsabilidad firmado digitalmente
                </li>
                <li className="flex items-start gap-2 sm:gap-3 text-text-muted text-base sm:text-lg">
                  <span className="text-gold mt-1 text-lg sm:text-xl">•</span>
                  Certificado médico apto para actividad física 2026 (VIGENTE)
                </li>
              </ul>
            </div>

            <div className="card-stone p-5 sm:p-8">
              <h4 className="font-cinzel font-bold text-foreground mb-4 sm:mb-5 flex items-center gap-2 sm:gap-3 text-base sm:text-xl">
                <span className="text-ice-blue font-cinzel-decorative text-base sm:text-lg">II</span>
                Si retira un tercero:
              </h4>
              <ul className="space-y-2 sm:space-y-3">
                <li className="flex items-start gap-2 sm:gap-3 text-text-muted text-base sm:text-lg">
                  <span className="text-gold mt-1 text-lg sm:text-xl">•</span>
                  Fotocopia de DNI del corredor
                </li>
                <li className="flex items-start gap-2 sm:gap-3 text-text-muted text-base sm:text-lg">
                  <span className="text-gold mt-1 text-lg sm:text-xl">•</span>
                  Deslinde firmado
                </li>
                <li className="flex items-start gap-2 sm:gap-3 text-text-muted text-base sm:text-lg">
                  <span className="text-gold mt-1 text-lg sm:text-xl">•</span>
                  Certificado médico 2026
                </li>
              </ul>
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-4 sm:p-6 text-center"
              style={{
                background: 'linear-gradient(90deg, rgba(255, 107, 53, 0.15), rgba(255, 69, 0, 0.1))',
                border: '2px solid rgba(255, 107, 53, 0.4)',
                boxShadow: '0 0 30px rgba(255, 107, 53, 0.2)',
              }}
            >
              <p className="text-foreground font-bold text-lg">
                Remera Oficial SOLO 1º Y 2º PERIODO
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
