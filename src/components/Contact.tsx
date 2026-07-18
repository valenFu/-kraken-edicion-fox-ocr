'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contacto" className="py-16 sm:py-32 relative rune-bg z-10">
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
            CONTACTO
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="card-stone p-6 sm:p-12 text-center"
          >
            <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-gold mb-4 sm:mb-5">
              ¿TENÉS DUDAS?
            </h3>
            <p className="text-text-muted text-base sm:text-xl mb-6 sm:mb-10">Contactanos por WhatsApp</p>

            {/* WhatsApp Large Button */}
            <motion.a
              href="https://wa.me/543549478677"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 sm:gap-4 px-6 sm:px-10 py-4 sm:py-5 rounded-full font-bold text-foreground text-lg sm:text-2xl mb-6 sm:mb-10"
              style={{
                background: 'linear-gradient(135deg, #25d366 0%, #128c7e 100%)',
                boxShadow: '0 8px 40px rgba(37, 211, 102, 0.5)',
              }}
            >
              <span>3549 478677</span>
            </motion.a>

            {/* Discount Info */}
            <div 
              className="p-8 text-left"
              style={{
                background: 'linear-gradient(90deg, rgba(212, 168, 67, 0.1), transparent)',
                borderLeft: '4px solid #d4a843',
              }}
            >
              <h4 className="font-cinzel font-bold text-foreground mb-3 text-xl">
                DESCUENTOS GRUPOS ESPECIALES
              </h4>
              <p className="text-text-muted text-lg mb-1">Fuerzas Especiales, Bomberos, Policías</p>
              <p className="text-text-muted text-lg">Comunicarse al mismo número</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
