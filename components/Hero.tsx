'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="top" className="relative h-screen flex items-center px-6 overflow-hidden">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 grid-background opacity-20 pointer-events-none" />
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background pointer-events-none"
      />

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col md:flex-row items-center justify-between">
        <motion.div
          initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="flex-1 text-left"
        >
          <span className="font-mono text-accent/80 text-sm tracking-[0.3em] uppercase mb-6 block">
            Welcome to my portfolio
          </span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-8 leading-tight">
            Vinayak Kone
          </h1>
          <p className="text-xl text-text-secondary mb-4 leading-relaxed font-light max-w-3xl">
            System Engineer with experience in developing cloud-native and AI-powered applications on Microsoft Azure. 
            Started with Azure infrastructure and backend API development using Python and FastAPI and specialized in 
            Generative AI and agent-based solutions.
          </p>
          <p className="text-lg text-text-secondary mb-12 leading-relaxed font-light max-w-3xl">
            Experienced in building, orchestrating, and deploying AI agents using Azure AI Foundry, Copilot Studio, 
            Semantic Kernel, AutoGen, and Microsoft Agentic Framework.
          </p>
        </motion.div>

        <div className="flex-1 flex justify-center items-center relative">
          {/* Organic Abstract Patterns - simplified (removed large square) */}
          <div className="relative w-[260px] h-[260px] md:w-[320px] md:h-[320px] lg:w-[380px] lg:h-[380px] bg-accent/8 rounded-full filter blur-sm opacity-60" />
          <div className="absolute w-[320px] h-[320px] md:w-[380px] md:h-[380px] lg:w-[440px] lg:h-[440px] bg-accent/12 rounded-[40%] mix-blend-overlay" />
        </div>
      </div>
    </section>
  );
}
