'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const navLinks = [
  { href: '#inicio', label: 'INICIO' },
  { href: '#la-carrera', label: 'LA CARRERA' },
  { href: '#kit', label: 'KIT' },
  { href: '#remera', label: 'REMERA' },
  { href: '#inscripciones', label: 'INSCRIPCIONES' },
  { href: '#premiacion', label: 'PREMIACIÓN' },
  { href: '#contacto', label: 'CONTACTO' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundImage: scrolled 
          ? "url('/textures/metal-runic.png'), linear-gradient(to bottom, #1a1a1a, #0d0d0d)"
          : "linear-gradient(to bottom, rgba(26, 26, 26, 0.95), rgba(13, 13, 13, 0.9))",
        backgroundSize: scrolled ? 'cover, cover' : 'cover, cover',
        backgroundPosition: 'center, center',
        borderBottom: '2px solid rgba(212, 168, 67, 0.3)',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.6)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo with image */}
          <Link href="#inicio" className="flex items-center gap-3">
            <Image 
              src="/logo-kraken.png" 
              alt="Kraken Logo" 
              width={45}
              height={45}
              className="w-auto h-10"
            />
            <span className="font-cinzel-decorative text-xl font-bold text-orange-500 tracking-widest">
              KRAKEN OCR
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-cinzel font-semibold text-white/80 hover:text-orange-400 transition-colors duration-300 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSe01OK_gxpEGqR-k66WhjM-f-hLsZksB0C_0GfDKTfFnBXsaw/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 bg-orange-600 hover:bg-orange-700 text-white px-6 py-2.5 rounded-md shadow-md transition font-cinzel font-semibold text-sm"
            >
              INSCRÍBETE
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white hover:text-orange-400 transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-current transition-all duration-300 ${
                  isOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`w-full h-0.5 bg-current transition-all duration-300 ${
                  isOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`w-full h-0.5 bg-current transition-all duration-300 ${
                  isOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden"
            style={{
              backgroundImage: "url('/textures/metal-runic.png'), linear-gradient(to bottom, #1a1a1a, #0d0d0d)",
              backgroundSize: 'cover, cover',
              borderTop: '2px solid rgba(212, 168, 67, 0.3)',
            }}
          >
            <div className="px-4 py-6 space-y-2">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 text-white/80 hover:text-orange-400 hover:bg-white/5 rounded transition-all font-cinzel font-semibold"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
              >
                <Link
                  href="https://docs.google.com/forms/d/e/1FAIpQLSe01OK_gxpEGqR-k66WhjM-f-hLsZksB0C_0GfDKTfFnBXsaw/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="block mt-4 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 text-center text-sm rounded-md shadow-md transition font-cinzel font-semibold"
                >
                  INSCRÍBETE
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
