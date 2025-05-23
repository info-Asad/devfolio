'use client';

import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { profile } from '@/config/profile';

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 px-4">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title="About Me" />
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <motion.div 
            className="md:col-span-3 space-y-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {profile.about.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </motion.div>
          
          <motion.div 
            className="md:col-span-2 bg-muted p-6 rounded-lg"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-4">Tech Focus</h3>
            <ul className="space-y-2">
              {profile.about.techFocus.map((tech, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="h-2 w-2 bg-primary rounded-full"></span>
                  <span>{tech}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}