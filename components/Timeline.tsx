'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Building, GraduationCap, Calendar } from 'lucide-react';

const milestones = [
  {
    year: '2025',
    title: 'System Engineer',
    org: 'TATA Consultancy Services (TCS)',
    description: 'Developing cloud-native applications and backend services on Microsoft Azure using Python and FastAPI. Designing and deploying conversational AI agents using Copilot Studio and Azure AI Foundry. Building Generative AI solutions with Azure OpenAI and developing agent-based applications using Semantic Kernel, AutoGen, and the Microsoft Agentic Framework. Led end-to-end delivery for multiple high-impact projects, implementing CI/CD pipelines, infrastructure-as-code (Bicep/Terraform), and observability with Application Insights and Log Analytics. Optimized service performance and reduced response latency by ~45%, mentored junior engineers, and collaborated cross-functionally to embed secure DevOps practices.',
    icon: Building,
    period: 'May 2025 - Present'
  }
];

export default function Timeline() {
  // Display entries as a centered responsive grid (two items total)

  return (
    <section id="experience" className="py-32 bg-secondary/10 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 mb-20 flex justify-between items-end">
        <div>
          <span className="font-mono text-accent/80 text-xs tracking-[0.4em] uppercase mb-4 block">Career Progression</span>
          <h2 className="text-5xl font-light text-white">Professional Experience</h2>
        </div>
        {/* removed top scroll buttons - using centered grid below */}
      </div>

      <div className="relative px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-8">
            {milestones.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                className="relative"
              >
                <div className="bg-secondary/30 border border-white/5 p-10 rounded-3xl hover:border-accent/20 transition-all group h-full">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
                    <m.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-2xl font-light text-white mb-2 group-hover:text-accent transition-colors">{m.title}</h3>
                  <p className="text-accent/80 text-sm font-medium mb-3 tracking-wide uppercase">{m.org}</p>
                  <p className="text-text-secondary text-xs font-mono mb-6">{m.period}</p>
                  <p className="text-lg text-text-secondary leading-relaxed font-light text-justify">{m.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Faded edges removed for single-entry clarity */}
      </div>
    </section>
  );
}
