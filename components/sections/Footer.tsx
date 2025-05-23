'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram } from 'lucide-react';
import { ThemeToggle } from '../ui/ThemeToggle';
import { profile } from '@/config/profile';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border px-4">
     <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
           <a
    href={
      profile.social.find(link => link.platform === 'LinkedIn')?.url || '#'
    }
    target="_blank"
    rel="noopener noreferrer"
    aria-label="GitHub profile"
  >
    <img
      src={profile.image}
      alt={profile.name}
      className="w-12 h-12 rounded-full border hover:ring-2 hover:ring-primary transition"
    />
    
  </a>
            <h2 className="text-2xl font-bold">{profile.name}</h2>
            <p className="text-muted-foreground">{profile.title}</p>
            
          </motion.div>

          <motion.div
            className="flex flex-col items-center md:items-end gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex gap-4">
              {profile.social.map((link) => (
                <motion.a
                  key={link.platform}
                  href={link.url}
                  className="p-2 bg-accent rounded-full hover:bg-primary hover:text-white transition-colors"
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={link.platform}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.platform === 'GitHub' ? (
                    <Github size={20} />
                  ) : link.platform === 'LinkedIn' ? (
                    <Linkedin size={20} />
                  ) : (
                    <Instagram size={20} />
                  )}
                </motion.a>
              ))}
              <ThemeToggle className="bg-accent" />
            </div>

            <div className="flex flex-col md:flex-row gap-2 md:gap-8 items-center">
              <a href={`mailto:${profile.email}`} className="hover:text-primary transition-colors">
                {profile.email}
              </a>
              <a href={`tel:${profile.phone}`} className="hover:text-primary transition-colors">
                {profile.phone}
              </a>
            </div>
          </motion.div>
        </div>

        <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} {profile.name}. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a href="#" className="text-sm hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-sm hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}