'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from 'next-themes';

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorHidden, setCursorHidden] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setIsMounted(true);

    const mouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const mouseEnter = () => setCursorHidden(false);
    const mouseLeave = () => setCursorHidden(true);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest('button') ||
        target.closest('a') ||
        target.closest('[data-cursor="small"]')
      ) {
        setIsHovered(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest('button') ||
        target.closest('a') ||
        target.closest('[data-cursor="small"]')
      ) {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', mouseMove);
    document.addEventListener('mouseenter', mouseEnter);
    document.addEventListener('mouseleave', mouseLeave);
    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      document.removeEventListener('mouseenter', mouseEnter);
      document.removeEventListener('mouseleave', mouseLeave);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  if (!isMounted) return null;

  // Theme-based cursor color
  const cursorColor = resolvedTheme === 'dark' ? '#F5F5F5' : '#B6B09F';

  return (
    <AnimatePresence>
      <motion.div
        className="hidden md:block fixed top-0 left-0 rounded-full pointer-events-none z-[9999]"
        style={{
          width: isHovered ? '16px' : '32px',
          height: isHovered ? '16px' : '32px',
          backgroundColor: 'transparent',
          border: `2px solid ${cursorColor}`,
        }}
        animate={{
          x: mousePosition.x - (isHovered ? 8 : 16),
          y: mousePosition.y - (isHovered ? 8 : 16),
          opacity: cursorHidden ? 0 : 1,
          scale: 1,
        }}
        transition={{
          type: 'spring',
          stiffness: 150,
          damping: 15,
          mass: 0.1,
        }}
      />
    </AnimatePresence>
  );
}
