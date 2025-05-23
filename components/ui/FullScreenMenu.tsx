'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navSections } from '@/config/profile'; // adjust the path as needed

export default function FullScreenMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <>
      {/* Menu Icon (when closed) */}
      {!menuOpen && (
        <button
          onClick={() => setMenuOpen(true)}
          className="p-2 rounded-full bg-muted hover:bg-muted/70 transition z-50"
        >
          <Menu size={24} />
        </button>
      )}

      {/* Fullscreen Dropdown Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ y: '-100%' }}
            animate={{ y: 0 }}
            exit={{ y: '-100%' }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="fixed inset-0 bg-background/95 backdrop-blur-xl z-50 flex flex-col justify-center items-center"
          >
            {/* X Button inside */}
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 right-6 p-2 rounded-full bg-muted hover:bg-muted/70 transition"
            >
              <X size={28} />
            </button>

            <ul className="space-y-6 text-center">
              {navSections.map((section, i) => (
                <motion.li
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className="text-3xl md:text-5xl font-semibold cursor-pointer text-muted-foreground hover:text-primary transition duration-300"
                  whileHover={{ scale: 1.1, y: -4 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  {section.label}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
