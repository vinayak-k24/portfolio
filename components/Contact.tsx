'use client';

import React from 'react';
import { motion } from 'motion/react';
import { Mail, Linkedin, Github, BookOpen } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-32 px-6 bg-background relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-accent/3 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-8xl font-light text-white mb-8 tracking-tight leading-[0.9]">
            Let&apos;s build something <span className="italic font-serif text-accent">intelligent</span>.
          </h2>
          <p className="text-2xl text-text-secondary mb-16 font-light">
            Open for research collaborations, architectural consultations, and innovative system design.
          </p>

          <div className="flex flex-col items-center gap-12">
            <div className="flex gap-8">
              {[
                { icon: Github, href: 'https://github.com/vinayak-k24', title: 'GitHub' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/vinayak-kone-8ba631214/', title: 'LinkedIn' },
                { icon: BookOpen, href: 'https://www.researchgate.net/profile/Vinayak-Kone', title: 'ResearchGate' },
                { icon: Mail, href: 'mailto:VSKONENPN@gmail.com', title: 'Email' }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -8, scale: 1.1 }}
                  title={social.title}
                  className="w-14 h-14 rounded-full border border-white/5 flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent/50 transition-all bg-secondary/20"
                >
                  <social.icon size={24} />
                </motion.a>
              ))}
            </div>
            
            <p className="font-mono text-[10px] text-text-secondary uppercase tracking-[0.5em]">
              © 2026 Vinayak Kone. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
