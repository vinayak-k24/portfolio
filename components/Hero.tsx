'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center px-6 overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 grid-background opacity-10 pointer-events-none" />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background pointer-events-none"
      />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <span className="font-mono text-accent/80 text-sm tracking-[0.3em] uppercase mb-6 block">
              Vinayak Kone
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-white mb-8 leading-tight">
              Building systems where <span className="italic font-serif text-accent">data</span>, intelligence, and decentralized technologies converge.
            </h1>
            <p className="text-xl text-text-secondary mb-12 leading-relaxed max-w-2xl font-light">
              Focused on machine learning, distributed systems, and research-driven engineering.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-wrap gap-6"
          >
            <a 
              href="#projects" 
              className="px-10 py-4 bg-white text-black hover:bg-accent hover:text-white font-medium rounded-full transition-all flex items-center gap-2 group"
            >
              View Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Decorative SVG Art */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/3 h-2/3 opacity-20 pointer-events-none hidden lg:block">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path fill="var(--color-accent)" d="M44.7,-76.4C58.1,-69.2,69.2,-58.1,76.4,-44.7C83.7,-31.3,87.1,-15.7,85.8,-0.8C84.4,14.1,78.3,28.2,69.2,40.1C60.1,52,48,61.7,34.7,68.9C21.4,76.1,6.9,80.8,-7.4,79.5C-21.7,78.2,-35.8,70.9,-48.1,61.2C-60.4,51.5,-70.9,39.4,-76.8,25.5C-82.7,11.6,-84,0.1,-80.7,-10.4C-77.4,-20.9,-69.5,-30.4,-59.9,-38.8C-50.3,-47.2,-39.1,-54.5,-27.4,-62.7C-15.7,-70.9,-3.5,-80.1,10.4,-81.9C24.3,-83.7,31.3,-83.6,44.7,-76.4Z" transform="translate(100 100)" />
        </svg>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] text-text-secondary uppercase tracking-widest">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-accent to-transparent" />
      </motion.div>
    </section>
  );
}
