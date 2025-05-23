'use client';

import { motion } from 'framer-motion';
import { Heart, Users, Star, Award } from 'lucide-react';
import SectionHeading from '../ui/SectionHeading';
import { profile } from '@/config/profile';

export default function Volunteer() {
  return (
    <section id="volunteer" className="py-20 md:py-32 px-4">
      <div className="max-w-5xl mx-auto">
        <SectionHeading title="Volunteer Work" />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 text-xl font-medium">
              <Heart className="text-primary" size={24} />
              <h3>{profile.volunteer.organization}</h3>
            </div>
            
            {profile.volunteer.description.map((paragraph, index) => (
              <p key={index} className="text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-6">
            {profile.volunteer.stats.map((stat, index) => (
              <motion.div 
                key={stat.label}
                className="bg-card p-6 rounded-lg shadow-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4">
                  <div className="bg-primary/10 p-3 rounded-full text-primary">
                    {index === 0 ? <Users /> : index === 1 ? <Star /> : <Award />}
                  </div>
                  <div>
                    <p className="text-3xl font-bold">{stat.value}</p>
                    <h4 className="text-lg font-medium">{stat.label}</h4>
                    <p className="text-sm text-muted-foreground">{stat.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}