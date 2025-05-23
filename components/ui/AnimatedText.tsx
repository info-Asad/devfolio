'use client';

import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  once?: boolean;
  animationType?: 'words' | 'chars' | 'lines';
}

export default function AnimatedText({
  text,
  className,
  delay = 0,
  once = true,
  animationType = 'words',
}: AnimatedTextProps) {
  const getTextContent = () => {
    if (animationType === 'words') {
      return text.split(' ').map((word, index) => (
        <motion.span
          key={index}
          className="inline-block whitespace-nowrap mr-[0.25em]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: delay + index * 0.05,
            duration: 0.7,
            ease: [0.2, 0.65, 0.3, 0.9],
          }}
          viewport={{ once }}
        >
          {word}
        </motion.span>
      ));
    } else if (animationType === 'chars') {
      return text.split('').map((char, index) => (
        <motion.span
          key={index}
          className="inline-block"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: delay + index * 0.02,
            duration: 0.5,
            ease: [0.2, 0.65, 0.3, 0.9],
          }}
          viewport={{ once }}
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ));
    } else {
      return (
        <motion.span
          className="inline-block"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: delay,
            duration: 0.7,
            ease: [0.2, 0.65, 0.3, 0.9],
          }}
          viewport={{ once }}
        >
          {text}
        </motion.span>
      );
    }
  };

  return <div className={cn('', className)}>{getTextContent()}</div>;
}