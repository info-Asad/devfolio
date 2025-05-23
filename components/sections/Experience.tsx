'use client';

import { motion } from 'framer-motion';
import { Calendar, Briefcase } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { profile } from '@/config/profile';

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-32 px-4">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title="Work Experience" />
        
        <div className="space-y-12">
          {profile.experience.map((job, index) => (
            <motion.div 
              key={job.title}
              className="relative grid grid-cols-1 md:grid-cols-8 gap-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Timeline connector */}
              {index < profile.experience.length - 1 && (
                <div className="absolute left-3.5 md:left-[3.75rem] top-16 bottom-0 w-px bg-border md:mx-auto" />
              )}
              
              <div className="md:col-span-2 flex flex-col">
                <div className="flex items-center gap-4 md:flex-col md:items-start">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground z-10">
                    <Briefcase size={16} />
                  </div>
                  <motion.time 
                    className="text-sm text-muted-foreground"
                    whileHover={{ x: 2 }}
                  >
                    <Calendar className="inline-block mr-1 h-4 w-4" /> 
                    {job.period}
                  </motion.time>
                </div>
              </div>
              
              <div className="md:col-span-6">
                <h3 className="text-xl font-semibold">{job.title}</h3>
                <h4 className="text-lg text-muted-foreground mb-2">{job.company}</h4>
                <p className="mb-4">{job.description}</p>
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill) => (
                    <span key={skill} className="bg-accent px-3 py-1 rounded-full text-xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}