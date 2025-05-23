'use client';

import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { profile } from '@/config/profile';

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32 bg-muted px-4">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title="Skills & Technologies" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {profile.skills.map((category, index) => (
            <motion.div 
              key={category.name}
              className="bg-card p-6 rounded-lg shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-4">{category.name}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <motion.span 
                    key={skill}
                    className="bg-accent px-3 py-1 rounded-full text-sm"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    whileHover={{ scale: 1.05 }}
                    viewport={{ once: true }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}