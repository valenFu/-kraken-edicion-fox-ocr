'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section className="py-16 sm:py-32 relative overflow-hidden z-10">
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
