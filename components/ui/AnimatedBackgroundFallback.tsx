'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface AnimatedBackgroundFallbackProps {
  isDark: boolean;
}

export default function AnimatedBackgroundFallback({ isDark }: AnimatedBackgroundFallbackProps) {
  const [particles, setParticles] = useState<Array<{
    id: number;
    size: number;
    x: number;
    y: number;
    duration: number;
    delay: number;
  }>>([]);

  useEffect(() => {
    // Generate random particles
    const newParticles = Array.from({ length: 40 }, (_, i) => ({
      id: i,
      size: Math.random() * 60 + 20,
      x: Math.random() * 100,
      y: Math.random() * 100,
      duration: Math.random() * 15 + 15,
      delay: Math.random() * 5,
    }));
    
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">      {/* Base gradient */}      <div 
        className={`absolute inset-0 ${
          isDark
            ? 'bg-[#0a0a0a]'
            : 'bg-[#ffffff]'
        }`}
      />
      
      {/* Animated gradient overlay */}
      <div 
        className={`absolute inset-0 ${
          isDark
            ? 'bg-gradient-to-br from-[#0a0a0a] via-[#262626] to-[#0a0a0a] opacity-80'
            : 'bg-gradient-to-br from-[#ffffff] via-[#f5f5f5] to-[#ffffff] opacity-60'
        }`}
      >
        <div className="absolute inset-0 backdrop-blur-3xl"></div>
      </div>
      
      {/* Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}          className={`absolute rounded-full backdrop-blur-md ${
            isDark 
              ? 'bg-primary/10'
              : 'bg-primary/5'
          }`}
          style={{
            width: particle.size,
            height: particle.size,
            top: `${particle.y}%`,
            left: `${particle.x}%`,
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ 
            scale: [0, 1, 0.8, 0],
            opacity: [0, 0.2, 0.1, 0],
            y: [0, -(Math.random() * 200 + 100)],
            x: [0, (Math.random() * 100 - 50)],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            repeatDelay: Math.random() * 5,
            ease: "easeInOut",
          }}
        />
      ))}
        {/* Glow effects */}      <div className={`absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl ${
        isDark 
          ? 'bg-[#262626]/20'
          : 'bg-[#f5f5f5]/20'
      }`}></div>
      <div className={`absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full blur-3xl ${
        isDark 
          ? 'bg-[#262626]/20'
          : 'bg-[#f5f5f5]/20'
      }`}></div>
    </div>
  );
}
