'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { ThemeToggle } from '../ui/ThemeToggle';
import AnimatedText from '../ui/AnimatedText';
import { profile } from '@/config/profile';
import FullScreenMenu from '@/components/ui/FullScreenMenu';
import AnimatedBackgroundFallback from '@/components/ui/AnimatedBackgroundFallback';
import Link from 'next/link';

export default function Hero() {
  const [isDark, setIsDark] = useState(false);

  // Detect current theme (Tailwind adds 'dark' class to <html>)
  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };

    // Initial check
    checkTheme();

    // Listen for theme changes
    const observer = new MutationObserver(checkTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative h-screen flex flex-col justify-center items-center px-4">
      {/* Animated Background */}
      <div className="absolute inset-0 z-0">
        <AnimatedBackgroundFallback isDark={isDark} />
      </div>

  
  {/* Logo at top-left inside the Hero section */}
  <motion.div
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.5 }}
    className="absolute top-6 left-6 z-10"
    aria-label="Site logo"
  >
    <img
      src={profile.image} // Public path like "/logo.svg"
      alt="Logo"
      className="w-12 h-12 rounded-full"
    />
  </motion.div>
      {/* FullScreenMenu top-right */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="fixed top-4 right-4 z-50"
        aria-label="Navigation menu"
      >
        <FullScreenMenu />
      </motion.div>

      {/* Theme toggle bottom-right */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="fixed bottom-4 right-4 z-50"
        aria-label="Theme toggle"
      >
        <ThemeToggle />
      </motion.div>

      {/* Centered Text */}
      <div className="max-w-4xl mx-auto text-center z-10">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <AnimatedText text={profile.name} animationType="chars" delay={0.3} />
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <AnimatedText text={`${profile.title} | ${profile.subtitle}`} delay={0.8} />
        </motion.p>
      </div>

      {/* Scroll Down Button */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          delay: 1.5,
          repeat: Infinity,
          repeatType: 'reverse',
          repeatDelay: 0.5,
        }}
        onClick={scrollToAbout}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') scrollToAbout();
        }}
        aria-label="Scroll to about section"
      >
        <ChevronDown size={32} className="animate-bounce" />
      </motion.div>
    </section>
  );
}
