'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const milestones = [
  {
    year: '2025',
    title: 'Systems Engineer',
    org: 'TATA Consultancy Services',
    description: 'Joined TCS in May 2025, focusing on enterprise-scale cloud architectures and intelligent system integration.',
    icon: () => (
      <svg viewBox="0 0 24 24" className="w-6 h-6 text-white">
        <path fill="currentColor" d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    )
  },
  {
    year: '2024',
    title: 'Graduate Engineer',
    org: 'KLE Technological University',
    description: 'Completed Bachelor of Engineering with a focus on Intelligent Systems and Distributed Computing.',
    icon: () => (
      <svg viewBox="0 0 100 100" className="w-6 h-6 text-white">
        <path fill="currentColor" d="M50 10L10 30l40 20 40-20-40-20zm0 30L20 25l30-15 30 15-30 15z" />
        <path fill="currentColor" d="M10 40v30l40 20 40-20V40L50 60 10 40z" />
      </svg>
    )
  },
  {
    year: '2023',
    title: 'Research Intern',
    org: 'AI Research Lab',
    description: 'Developed and optimized deep learning models for edge devices, focusing on quantization techniques.',
    icon: Brain
  },
  {
    year: '2022',
    title: 'Full Stack Developer',
    org: 'Tech Solutions',
    description: 'Built scalable web applications using modern frameworks and cloud-native architectures.',
    icon: Cpu
  },
  {
    year: '2021',
    title: 'Systems Engineering Intern',
    org: 'Infrastructure Group',
    description: 'Assisted in managing distributed server clusters and optimizing network protocols.',
    icon: Network
  },
  {
    year: '2020',
    title: 'Commenced B.E.',
    org: 'KLE Tech',
    description: 'Started academic journey in Computer Science and Engineering.',
    icon: GraduationCap
  }
];

import { Brain, Cpu, Network, GraduationCap } from 'lucide-react';

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
                  <p className="text-accent/80 text-sm font-medium mb-6 tracking-wide uppercase">{m.org}</p>
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
