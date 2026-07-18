'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const eventCards = [
  {
    title: 'FECHA',
    content: 'Sábado 5 de Diciembre',
    highlight: '20:00 HS',
    color: 'fire',
  },
  {
    title: 'UBICACIÓN',
    content: 'Balneario Municipal',
    highlight: 'Villa de Soto, Córdoba',
    color: 'gold',
    link: 'https://maps.google.com/?q=Balneario+Municipal+Villa+de+Soto+Córdoba+Argentina',
  },
  {
    title: 'DISTANCIAS',
    content: '8K - 4K',
    highlight: '#OCR - Nuevos obstáculos',
    color: 'ice',
  },
];

const colorMap = {
  fire: { border: '#ff6b35', glow: 'rgba(255, 107, 53, 0.3)' },
  gold: { border: '#d4a843', glow: 'rgba(212, 168, 67, 0.3)' },
  ice: { border: '#4dc9f6', glow: 'rgba(77, 201, 246, 0.3)' },
};

export default function EventInfo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="la-carrera" className="py-32 relative rune-bg z-10">
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
            LA CARRERA
          </h2>
        </motion.div>

        {/* Event Cards */}
        <div className="grid md:grid-cols-3 gap-10 mb-20">
          {eventCards.map((card, index) => {
            const colors = colorMap[card.color as keyof typeof colorMap];
            const Wrapper = card.link ? 'a' : 'div';
            const wrapperProps = card.link
              ? { href: card.link, target: '_blank', rel: 'noopener noreferrer' }
              : {};
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -12, scale: 1.03 }}
              >
                <Wrapper
                  {...wrapperProps}
                  className="block card-stone p-10 text-center cursor-default h-full"
                  style={{
                    boxShadow: `0 0 30px ${colors.glow}`,
                  }}
                >
                  <h3 
                    className="font-cinzel text-2xl font-bold mb-4 tracking-wider"
                    style={{ color: colors.border }}
                  >
                    {card.title}
                  </h3>
                  <p className="text-text-muted text-lg mb-3">{card.content}</p>
                  <p className="text-foreground font-bold text-xl">{card.highlight}</p>
                  {card.link && (
                    <p className="text-sm mt-4 tracking-wider" style={{ color: colors.border }}>
                      VER EN MAPA
                    </p>
                  )}
                </Wrapper>
              </motion.div>
            );
          })}
        </div>

        {/* Race Description - Epic Frame */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="ornate-frame p-10 text-center relative">
            {/* Corner runes */}
            <div className="absolute top-4 left-5 text-gold/40 text-2xl">ᚠ</div>
            <div className="absolute top-4 right-5 text-gold/40 text-2xl">ᚦ</div>
            <div className="absolute bottom-4 left-5 text-gold/40 text-2xl">ᚢ</div>
            <div className="absolute bottom-4 right-5 text-gold/40 text-2xl">ᚨ</div>
            
            <p className="text-foreground text-xl leading-relaxed relative z-10">
              Una carrera nocturna de obstáculos que desafiará tus límites. 
              <span className="fire-glow text-fire-orange font-black"> Enfrenta obstáculos de fuego y agua</span>, 
              muros, lodo y mucho más. 
              <span className="ice-glow text-ice-blue font-black"> ¡Prepárate para la experiencia OCR definitiva!</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
