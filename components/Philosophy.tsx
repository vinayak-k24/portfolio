'use client';

import React from 'react';
import { motion } from 'motion/react';

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-32 px-6 bg-background relative overflow-hidden">
      {/* Decorative Background SVG */}
      <div className="absolute left-0 top-0 w-full h-full opacity-[0.02] pointer-events-none">
        <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <defs>
            <pattern id="dotPattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="2" cy="2" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dotPattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-1 hidden md:flex justify-center h-full min-h-[400px]">
            <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="w-[2px] bg-gradient-to-b from-accent via-accent/50 to-transparent"
            />
          </div>
          
          <div className="md:col-span-11">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
            >
              <h2 className="text-4xl md:text-7xl font-light text-white mb-16 leading-[1.1] tracking-tight">
                I design systems where <span className="italic font-serif text-accent">intelligence</span>, <br className="hidden md:block" />
                infrastructure, and data converge.
              </h2>
              
              <div className="grid md:grid-cols-2 gap-16 text-xl md:text-2xl text-text-secondary leading-relaxed font-light">
                <div className="space-y-8">
                  <p>
                    In an era of unprecedented data growth, the challenge isn&apos;t just processing information—it&apos;s architecting systems that can reason, adapt, and scale autonomously. My research focuses on the intersection of distributed computing and machine learning.
                  </p>
                  <div className="h-[1px] w-20 bg-accent/30" />
                </div>
                <div className="space-y-8">
                  <p>
                    I believe that the most powerful solutions are those that remain invisible, providing a seamless foundation for complex intelligent behaviors. From low-level infrastructure to high-level cognitive models, my work is driven by a commitment to precision and structural integrity.
                  </p>
                  <div className="flex gap-4">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <div className="w-2 h-2 rounded-full bg-accent/50" />
                    <div className="w-2 h-2 rounded-full bg-accent/20" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
