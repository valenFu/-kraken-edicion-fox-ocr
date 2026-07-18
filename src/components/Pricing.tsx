'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const pricingItems = [
  { category: '8 KM - ELITE', slots: '100 CUPOS', price: '$85.000', color: '#d4a843' },
  { category: '8 KM - COMPETITIVO', slots: '100 CUPOS', price: '$70.000', color: '#c0c0c0' },
  { category: '8 KM - DUOS', slots: '100 CUPOS', price: '$140.000', color: '#cd7f32' },
  { category: '4 KM - RECREATIVO', slots: '50 CUPOS', price: '$50.000', color: '#4dc9f6' },
];

const notices = [
  {
    icon: '!',
    title: 'IMPORTANTE',
    content: 'La inscripción incluye la Remera Oficial SOLO EL PRIMER Y SEGUNDO PERIODO DE INSCRIPCIÓN',
    color: '#ff6b35',
  },
  {
    icon: 'X',
    title: 'POLÍTICA DE REEMBOLSOS',
    content: 'NO se realizarán reembolsos de inscripciones bajo ningún motivo, incluyendo inasistencias, cambios de planes, problemas personales o cualquier otra circunstancia.',
    color: '#ff4500',
  },
  {
    icon: '~',
    title: 'CAMBIOS',
    content: 'Solo se podrá cambiar a un corredor por otro, manteniendo la misma distancia y el horario de salida, siempre y cuando se realice antes del día 20 de NOVIEMBRE de 2026.',
    color: '#4dc9f6',
  },
];

const policies = [
  {
    title: 'BAJAS Y CAMBIOS DE DISTANCIAS',
    color: '#ff6b35',
    items: [
      'Las inscripciones NO tienen devolución para los corredores que desistan de participar, cualquiera sea el motivo.',
      'Solo se podrá cambiar a un corredor por otro, manteniendo la misma distancia y el horario de salida, siempre y cuando se realice antes del día 20 de NOVIEMBRE de 2026.',
      'Si un miembro del equipo o dúo NO puede asistir por diferentes motivos, NO se pueden cambiar a ninguna salida de forma INDIVIDUAL, PERO SI pueden buscar un reemplazo para que puedan participar.',
    ],
  },
  {
    title: 'IMPORTANTE',
    color: '#d4a843',
    items: [
      'LOS CAMBIOS DE TITULARIDAD SÓLO SE PODRÁN EFECTUAR A PERSONAS QUE NO ESTÉN INSCRIPTAS A LA CARRERA.',
      'Tiempo límite para solicitar la baja o cambio de distancia es hasta el 15 de NOVIEMBRE 2026.',
    ],
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="inscripciones" className="py-32 relative rune-bg z-10">
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
            INSCRIPCIONES
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 mb-16">
          {/* Pricing Table */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="card-stone p-10"
          >
            <h3 className="font-cinzel text-2xl font-bold text-gold mb-3 text-center">
              COSTOS DE INSCRIPCIÓN
            </h3>
            <p className="text-text-muted text-sm text-center mb-8 tracking-wider">1º PERIODO - HASTA COMPLETAR LOS CUPOS</p>

            <div className="grid sm:grid-cols-2 gap-5">
              {pricingItems.map((item, index) => (
                <motion.div
                  key={item.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  whileHover={{ scale: 1.04 }}
                  className="overflow-hidden"
                  style={{
                    background: 'linear-gradient(180deg, #12100d 0%, #0a0908 100%)',
                    border: `2px solid ${item.color}30`,
                  }}
                >
                  <div 
                    className="p-4"
                    style={{
                      background: `linear-gradient(90deg, ${item.color}40, ${item.color}20)`,
                    }}
                  >
                    <span className="font-cinzel text-sm font-bold text-foreground tracking-wider">{item.category}</span>
                  </div>
                  <div className="p-5 text-center">
                    <p className="text-xs text-text-muted mb-1 tracking-wider">{item.slots}</p>
                    <p className="text-xs text-text-muted mb-3">En 1 cuota</p>
                    <p className="text-3xl font-black gold-glow" style={{ color: item.color }}>{item.price}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Payment Info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="card-stone p-10"
          >
            <h3 className="font-cinzel text-2xl font-bold text-gold mb-8 text-center">
              FORMAS DE PAGO
            </h3>

            <div 
              className="p-6 mb-8"
              style={{
                background: 'linear-gradient(90deg, rgba(212, 168, 67, 0.1), transparent)',
                borderLeft: '4px solid #d4a843',
              }}
            >
              <h4 className="font-cinzel font-bold text-foreground mb-4 text-lg">TRANSFERENCIA BANCARIA</h4>
              <div className="space-y-3 text-base">
                <p><span className="text-text-muted">Alias:</span> <span className="text-foreground font-bold">wolfkraken</span></p>
                <p><span className="text-text-muted">CVU:</span> <span className="text-foreground font-bold">0000003100054408051205</span></p>
                <p><span className="text-text-muted">Nombre:</span> <span className="text-foreground font-bold">Jorge Roberto Burgos</span></p>
              </div>
            </div>

            <div className="text-center">
              <h4 className="font-cinzel font-bold text-foreground mb-4 text-lg">ENVÍA TU COMPROBANTE</h4>
              <p className="text-text-muted text-base mb-6">
                Incluí: NOMBRE DEL CORREDOR, DNI y talle elegido
              </p>
              <motion.a
                href="https://wa.me/543549478677"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-foreground text-lg"
                style={{
                  background: 'linear-gradient(135deg, #25d366 0%, #128c7e 100%)',
                  boxShadow: '0 6px 30px rgba(37, 211, 102, 0.5)',
                }}
              >
                WHATSAPP AL 3549 478677
              </motion.a>
              <p className="text-text-muted text-sm mt-4">
                En caso que pagues por otro/s, indicá el nombre de la cuenta
              </p>
            </div>
          </motion.div>
        </div>

        {/* Important Notices */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {notices.map((notice, index) => (
            <motion.div
              key={notice.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
              className="card-stone p-6"
              style={{
                borderTopColor: notice.color,
                boxShadow: `0 0 20px ${notice.color}20`,
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <span 
                  className="w-8 h-8 rounded flex items-center justify-center text-sm font-bold"
                  style={{ 
                    background: `${notice.color}20`,
                    border: `1px solid ${notice.color}50`,
                    color: notice.color,
                  }}
                >
                  {notice.icon}
                </span>
                <h4 className="font-cinzel font-bold text-sm tracking-wider" style={{ color: notice.color }}>
                  {notice.title}
                </h4>
              </div>
              <p className="text-text-muted leading-relaxed">{notice.content}</p>
            </motion.div>
          ))}
        </div>

        {/* Full Policies */}
        <div className="grid md:grid-cols-2 gap-8">
          {policies.map((policy, index) => (
            <motion.div
              key={policy.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.9 + index * 0.15 }}
              className="card-stone p-8"
              style={{
                borderTop: `3px solid ${policy.color}`,
              }}
            >
              <h4 
                className="font-cinzel font-bold text-lg tracking-wider mb-5"
                style={{ color: policy.color }}
              >
                {policy.title}
              </h4>
              <ul className="space-y-4">
                {policy.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-text-muted leading-relaxed">
                    <span className="text-gold mt-1 flex-shrink-0">-</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
