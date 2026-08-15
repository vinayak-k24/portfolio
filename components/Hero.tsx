'use client';

import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center px-6 overflow-hidden">
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
          {/* Organic Abstract Patterns - No Profile Image */}
          <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] bg-accent/10 clip-path-[polygon(50%_0%,_100%_38%,_82%_100%,_18%_100%,_0%_38%)]"></div>
          <div className="absolute w-[350px] h-[350px] md:w-[450px] md:h-[450px] lg:w-[550px] lg:h-[550px] bg-accent/20 clip-path-[polygon(20%_0%,_80%_0%,_100%_50%,_80%_100%,_20%_100%,_0%_50%)]"></div>
          <div className="absolute w-[400px] h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] bg-accent/5 clip-path-[polygon(50%_0%,_100%_25%,_75%_100%,_25%_100%,_0%_25%)]"></div>
        </div>
      </div>
    </section>
  );
}
