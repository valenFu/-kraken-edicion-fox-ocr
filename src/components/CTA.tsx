'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

const FIRE_POSITIONS = [
  { left: 3, duration: 2.2, delay: 0.1 },
  { left: 8, duration: 3.0, delay: 0.8 },
  { left: 13, duration: 2.5, delay: 0.3 },
  { left: 18, duration: 3.3, delay: 1.2 },
  { left: 23, duration: 2.8, delay: 0.6 },
  { left: 28, duration: 3.5, delay: 1.5 },
  { left: 33, duration: 2.3, delay: 0.2 },
  { left: 38, duration: 3.2, delay: 1.0 },
  { left: 43, duration: 2.6, delay: 0.4 },
  { left: 48, duration: 3.4, delay: 1.3 },
  { left: 53, duration: 2.4, delay: 0.7 },
  { left: 58, duration: 3.6, delay: 1.6 },
  { left: 63, duration: 2.1, delay: 0.5 },
  { left: 68, duration: 3.1, delay: 1.1 },
  { left: 73, duration: 2.7, delay: 0.9 },
  { left: 78, duration: 3.7, delay: 1.4 },
  { left: 83, duration: 2.9, delay: 0.0 },
  { left: 88, duration: 3.8, delay: 1.7 },
  { left: 93, duration: 2.0, delay: 0.3 },
  { left: 97, duration: 3.0, delay: 1.0 },
];

function EpicFireParticles() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute bottom-0 left-0 right-0 h-48 overflow-hidden pointer-events-none">
      {FIRE_POSITIONS.map((particle, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            left: `${particle.left}%`,
            bottom: 0,
            width: `${3 + (i % 3)}px`,
            height: `${3 + (i % 3)}px`,
            background: `radial-gradient(circle, #ff6b35, #ff4500, transparent)`,
            boxShadow: '0 0 10px #ff6b35',
          }}
          animate={{
            y: [0, -180],
            opacity: [1, 0],
            scale: [1, 0.2],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: 'easeOut',
          }}
        />
      ))}
    </div>
  );
}

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-16 sm:py-32 relative overflow-hidden z-10">
      {/* Epic background - sutil */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-[#ff6b35]/10 via-transparent to-[#4dc9f6]/10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/30 to-background/60" />
      </div>

      {/* Fire particles */}
      <EpicFireParticles />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-cinzel-decorative text-3xl sm:text-4xl lg:text-6xl font-black text-foreground mb-6 sm:mb-8 leading-tight">
            ¡ÚNETE A LA{' '}
            <span className="fire-glow text-fire-orange">KRAKEN</span>{' '}
            EDICIÓN <span className="ice-glow text-ice-blue">FOX</span> OCR!
          </h2>
          <p className="text-text-muted text-base sm:text-xl mb-6 sm:mb-10">
            No pierdas tu lugar. ¡Inscribite ahora!
          </p>
          <motion.a
            href="https://docs.google.com/forms/d/e/1FAIpQLSe01OK_gxpEGqR-k66WhjM-f-hLsZksB0C_0GfDKTfFnBXsaw/viewform"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="btn-metallic btn-fire px-8 sm:px-14 py-4 sm:py-6 text-sm sm:text-lg inline-block"
          >
            INSCRÍBETE AHORA
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
