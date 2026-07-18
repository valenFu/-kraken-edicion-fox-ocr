'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const awards = [
  {
    modalidad: 'MODALIDAD ELITE',
    prizes: '1°, 2° y 3° General',
    categories: 'Damas y Caballeros',
    color: '#d4a843',
    glowColor: 'rgba(212, 168, 67, 0.4)',
  },
  {
    modalidad: 'MODALIDAD COMPETITIVA',
    prizes: '1°, 2° y 3° por Categorías',
    categories: ['16 a 29 años', '30 a 39 años', '40 a 49 años', '50+ años'],
    subtext: 'Damas y Caballeros',
    color: '#c0c0c0',
    glowColor: 'rgba(192, 192, 192, 0.4)',
  },
  {
    modalidad: 'MODALIDAD DUOS',
    prizes: '1°, 2° y 3°',
    categories: ['Damas', 'Caballeros', 'Mixto'],
    color: '#cd7f32',
    glowColor: 'rgba(205, 127, 50, 0.4)',
  },
];

export default function Awards() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="premiacion" className="py-32 relative rune-bg z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="rune-divider mb-10" />
          <h2 className="section-title text-gold gold-glow">
            PREMIACIÓN
          </h2>
        </motion.div>

        {/* Awards Grid */}
        <div className="grid md:grid-cols-3 gap-10">
          {awards.map((award, index) => (
            <motion.div
              key={award.modalidad}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -12, scale: 1.03 }}
              className="card-stone p-10 text-center"
              style={{
                boxShadow: `0 0 40px ${award.glowColor}`,
              }}
            >
              <div 
                className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center"
                style={{
                  background: `linear-gradient(135deg, ${award.color}30, ${award.color}10)`,
                  border: `2px solid ${award.color}50`,
                }}
              >
                <span className="font-cinzel-decorative text-3xl font-black" style={{ color: award.color }}>
                  {award.modalidad === 'MODALIDAD ELITE' ? 'I' : award.modalidad === 'MODALIDAD COMPETITIVA' ? 'II' : 'III'}
                </span>
              </div>
              
              <h3 
                className="font-cinzel text-xl font-bold mb-5 tracking-wider"
                style={{ color: award.color }}
              >
                {award.modalidad}
              </h3>
              
              <p className="text-foreground font-bold text-xl mb-5">{award.prizes}</p>
              
              {Array.isArray(award.categories) ? (
                <div className="flex flex-wrap justify-center gap-3">
                  {award.categories.map((cat) => (
                    <span
                      key={cat}
                      className="text-sm px-4 py-2 text-foreground/90"
                      style={{
                        background: `linear-gradient(135deg, ${award.color}25, ${award.color}10)`,
                        border: `2px solid ${award.color}50`,
                      }}
                    >
                      {cat}
                    </span>
                  ))}
                </div>
              ) : (
                <p className="text-text-muted text-lg">{award.categories}</p>
              )}
              
              {award.subtext && (
                <p className="text-text-muted text-base mt-4">{award.subtext}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
