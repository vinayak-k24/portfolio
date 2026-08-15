'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, Building, GraduationCap, Calendar } from 'lucide-react';

const milestones = [
  {
    year: '2025',
    title: 'System Engineer',
    org: 'TATA Consultancy Services (TCS)',
    description: 'Developing cloud-native applications and backend services on Microsoft Azure using Python and FastAPI. Designing and deploying conversational AI agents using Copilot Studio and Azure AI Foundry. Building Generative AI solutions with Azure OpenAI, developing agent-based applications using Semantic Kernel, AutoGen, and Microsoft Agentic Framework. Working on Supply Chain Management Platform on Microsoft Fabric, Plant Operators AI Advisor with 88% RUL accuracy, and Procurement Advisor Platform processing 60-70 document queries per request.',
    icon: Building,
    period: 'May 2025 - Present'
  },
  {
    year: '2023-24',
    title: 'REU Research Scholar',
    org: 'University Research Lab',
    description: 'Conducted intensive PhD-level research training from Jan 2023 to Jan 2024. Learned research methodology, experimental design, and academic paper writing. Published multiple papers in Springer, IEEE, and other reputed journals. Focused on blockchain scalability, sharding-based consensus mechanisms, and forensic evidence management systems.',
    icon: GraduationCap,
    period: 'Jan 2023 - Jan 2024'
  },
  {
    year: '2024',
    title: 'Graduate Engineer',
    org: 'KLE Technological University',
    description: 'Completed Bachelor of Engineering with CGPA 9.26/10. Studied core subjects: OOP in C++, DSA, OS, CN, DBMS, EDA, ML, NLP, Blockchain, Cloud Computing, and Quantum Computing. Specialized in Intelligent Systems and distributed computing architectures.',
    icon: GraduationCap,
    period: '2020 - 2024'
  },
  {
    year: '2024-25',
    title: 'Career Transition & Skill Development',
    org: 'Self-Directed Learning',
    description: 'Between graduation (Nov 2024) and TCS joining (May 2025), focused on advancing skills in GCP cloud resources, Azure DevOps, Docker, MLOps, and Quantum Computing. Worked on personal projects including Quantum Currency Arbitrage Optimization and Multi-Agent Supply Chain Platform.',
    icon: Building,
    period: 'Nov 2024 - May 2025'
  }
];

export default function Timeline() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 400;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="timeline" className="py-32 bg-secondary/10 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 mb-20 flex justify-between items-end">
        <div>
          <span className="font-mono text-accent/80 text-xs tracking-[0.4em] uppercase mb-4 block">Progression</span>
          <h2 className="text-5xl font-light text-white">Professional Timeline</h2>
        </div>
        <div className="flex gap-4 mb-2">
          <button 
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className={`w-12 h-12 rounded-full border border-white/10 flex items-center justify-center transition-all ${canScrollLeft ? 'text-white hover:border-accent hover:text-accent' : 'text-white/10 cursor-not-allowed'}`}
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className={`w-12 h-12 rounded-full border border-white/10 flex items-center justify-center transition-all ${canScrollRight ? 'text-white hover:border-accent hover:text-accent' : 'text-white/10 cursor-not-allowed'}`}
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      <div className="relative px-6">
        {/* Horizontal Scroll Container */}
        <div 
          ref={scrollRef}
          onScroll={checkScroll}
          className="overflow-x-auto pb-12 hide-scrollbar snap-x snap-mandatory"
        >
          <div className="flex gap-8 min-w-max px-[10vw]">
            {milestones.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="w-[300px] md:w-[450px] shrink-0 snap-center"
              >
                <div className="relative mb-12">
                  <div className="w-3 h-3 rounded-full bg-accent shadow-[0_0_20px_rgba(251,146,60,0.8)] absolute -top-1.5 left-0" />
                  <span className="font-serif italic text-6xl font-light text-white/5 absolute -top-20 left-0">{m.year}</span>
                </div>
                
                <div className="bg-secondary/30 border border-white/5 p-10 rounded-3xl hover:border-accent/20 transition-all group h-full backdrop-blur-sm">
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors">
                    <m.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-2xl font-light text-white mb-2 group-hover:text-accent transition-colors">{m.title}</h3>
                  <p className="text-accent/80 text-sm font-medium mb-3 tracking-wide uppercase">{m.org}</p>
                  <p className="text-text-secondary text-xs font-mono mb-6">{m.period}</p>
                  <p className="text-lg text-text-secondary leading-relaxed font-light">{m.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Glass Faded Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-[15vw] bg-gradient-to-r from-background via-background/80 to-transparent pointer-events-none z-20 backdrop-blur-[2px]" />
        <div className="absolute right-0 top-0 bottom-0 w-[15vw] bg-gradient-to-l from-background via-background/80 to-transparent pointer-events-none z-20 backdrop-blur-[2px]" />
      </div>
    </section>
  );
}
