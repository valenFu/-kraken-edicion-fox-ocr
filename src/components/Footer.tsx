'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer 
      className="py-10 sm:py-16 relative z-10"
      style={{
        background: 'linear-gradient(180deg, rgba(10, 9, 8, 0.95) 0%, rgba(6, 5, 4, 1) 100%)',
        borderTop: '2px solid #d4a84330',
        marginBottom: '-1px',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-10 mb-8 sm:mb-10">
          {/* Logo */}
          <div className="text-center md:text-left">
            <Link href="#inicio" className="inline-block">
              <span className="font-cinzel-decorative text-3xl font-black text-gold gold-glow">
                KRAKEN
              </span>
            </Link>
            <p className="text-text-muted text-base mt-3 tracking-wider">EDICIÓN FOX OCR</p>
          </div>

          {/* Info */}
          <div className="text-center">
            <p className="text-text-muted text-lg">Villa de Soto, Córdoba</p>
            <p className="text-text-muted text-lg">5 de Diciembre 2026</p>
          </div>

          {/* Social */}
          <div className="flex justify-center md:justify-end gap-5">
            <motion.a
              href="https://www.instagram.com/kraken_ocr/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -3 }}
              className="px-6 py-3 text-text-muted hover:text-gold transition-all text-center"
              style={{
                border: '2px solid #2a2520',
                background: 'linear-gradient(180deg, #1a1815 0%, #0a0908 100%)',
              }}
            >
              <span className="block text-sm">Instagram</span>
              <span className="block text-xs text-gold/60 mt-1">@kraken_ocr</span>
            </motion.a>
            <motion.a
              href="https://www.instagram.com/fox.ocr/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -3 }}
              className="px-6 py-3 text-text-muted hover:text-gold transition-all text-center"
              style={{
                border: '2px solid #2a2520',
                background: 'linear-gradient(180deg, #1a1815 0%, #0a0908 100%)',
              }}
            >
              <span className="block text-sm">Instagram</span>
              <span className="block text-xs text-gold/60 mt-1">@fox.ocr</span>
            </motion.a>
          </div>
        </div>

        {/* Bottom */}
        <div 
          className="pt-8 text-center"
          style={{ borderTop: '1px solid #2a2520' }}
        >
          <p className="text-text-muted text-base">
            © 2026 Kraken Edición Fox OCR. Todos los derechos reservados.
          </p>
        </div>
      </div>

      {/* Fire glow at the very bottom */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: 'linear-gradient(0deg, rgba(180, 80, 20, 0.2) 0%, rgba(139, 69, 19, 0.1) 40%, transparent 100%)',
        }}
      />
    </footer>
  );
}
