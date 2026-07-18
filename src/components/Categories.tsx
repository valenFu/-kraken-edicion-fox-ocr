'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const categories = [
  {
    name: 'ELITE',
    distance: '8K',
    description: 'Para los corredores más exigentes que buscan superar sus límites en un recorrido extremo.',
    features: ['1°, 2° y 3° General Damas y Caballeros', 'Número de corredor incluido', 'Cronometraje oficial'],
    price: '$85.000',
    slots: '100 CUPOS',
    period: '1º PERIODO',
    borderColor: '#d4a843',
    glowColor: 'rgba(212, 168, 67, 0.4)',
    gradient: 'from-[#d4a843] to-[#9a7a2e]',
  },
  {
    name: 'COMPETITIVO',
    distance: '8K',
    description: 'Especialmente diseñada para atletas que buscan un reto extremo y superar sus propios límites.',
    features: ['Por categorías de edad', 'Número de corredor incluido', 'Cronometraje oficial'],
    price: '$70.000',
    slots: '100 CUPOS',
    period: '1º PERIODO',
    borderColor: '#c0c0c0',
    glowColor: 'rgba(192, 192, 192, 0.4)',
    gradient: 'from-[#c0c0c0] to-[#808080]',
  },
  {
    name: 'DUOS',
    distance: '8K',
    description: 'Compartí la experiencia con un compañero. Juntos superarán cualquier obstáculo!',
    features: ['1°, 2° y 3° Damas, Caballeros, Mixto', 'Número de corredor incluido', 'Cronometraje oficial'],
    price: '$140.000',
    slots: '100 CUPOS',
    period: '1º PERIODO',
    borderColor: '#cd7f32',
    glowColor: 'rgba(205, 127, 50, 0.4)',
    gradient: 'from-[#cd7f32] to-[#8b4513]',
  },
  {
    name: 'PARTICIPATIVO',
    distance: '4K',
    description: 'Perfecta para quienes se inician en las carreras de obstáculos y quieren probarse sin presión.',
    features: ['Para todos los niveles', 'Sin presión de competencia', 'Disfrutá la experiencia'],
    price: '$50.000',
    slots: '50 CUPOS',
    period: '1º PERIODO',
    borderColor: '#4dc9f6',
    glowColor: 'rgba(77, 201, 246, 0.4)',
    gradient: 'from-[#4dc9f6] to-[#2a88b4]',
  },
];

export default function Categories() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="categorias" className="py-32 relative rune-bg z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="rune-divider mb-10" />
          <h2 className="section-title text-gold gold-glow mb-6">
            CATEGORÍAS Y DISTANCIAS
          </h2>
          <p className="text-text-muted text-lg max-w-3xl mx-auto leading-relaxed">
            Descubrí las categorías que tenemos para vos. Elegí la que más se adapte a tu nivel 
            de exigencia y superá tus propios límites en esta competencia extrema.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -12 }}
              className="card-stone overflow-hidden group"
              style={{
                boxShadow: `0 0 40px ${category.glowColor}`,
              }}
            >
              {/* Header with distance */}
              <div 
                className="p-6 flex justify-between items-center"
                style={{
                  background: `linear-gradient(90deg, ${category.borderColor}15, transparent)`,
                  borderBottom: `2px solid ${category.borderColor}40`,
                }}
              >
                <div className="flex items-center gap-4">
                  <span 
                    className="text-sm font-bold px-5 py-2 tracking-wider text-foreground"
                    style={{ 
                      background: `linear-gradient(135deg, ${category.borderColor}30, ${category.borderColor}15)`,
                      border: `2px solid ${category.borderColor}60`,
                    }}
                  >
                    {category.name}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-4xl font-black text-foreground font-cinzel">{category.distance}</span>
                </div>
              </div>

              {/* Body */}
              <div className="p-8">
                <p className="text-text-muted text-lg mb-6 leading-relaxed">{category.description}</p>
                <ul className="space-y-3 mb-8">
                  {category.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-foreground/90">
                      <span 
                        className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                        style={{ 
                          background: category.borderColor,
                          boxShadow: `0 0 10px ${category.glowColor}`,
                        }}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price Footer */}
              <div 
                className="p-6 flex justify-between items-center"
                style={{
                  background: `linear-gradient(90deg, ${category.borderColor}10, transparent)`,
                  borderTop: `1px solid ${category.borderColor}30`,
                }}
              >
                <div>
                  <span className="text-sm text-text-muted block tracking-wider">{category.period}</span>
                  <span className="text-sm text-fire-orange font-bold">{category.slots}</span>
                </div>
                <div className="text-right">
                  <span className="text-3xl font-black gold-glow" style={{ color: category.borderColor }}>
                    {category.price}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
