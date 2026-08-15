'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Award, ShieldCheck, Zap, Cloud, Brain, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const certifications = [
  {
    title: "Azure AI Engineer Associate (AI-102)",
    org: "Microsoft Certified",
    date: "2025",
    link: "https://learn.microsoft.com/",
    icon: () => (
      <svg viewBox="0 0 23 23" className="w-8 h-8">
        <path fill="#f35323" d="M0 0h11v11H0z"/>
        <path fill="#7fb900" d="M12 0h11v11H12z"/>
        <path fill="#00a4ef" d="M0 12h11v11H0z"/>
        <path fill="#ffb900" d="M12 12h11v11H12z"/>
      </svg>
    ),
    color: "bg-white",
    description: "Developed expertise in designing, developing, and deploying AI solutions using Azure AI services, Azure OpenAI, and Microsoft Foundry AI integrations."
  },
  {
    title: "Azure AI Fundamentals (AI-900)",
    org: "Microsoft Certified",
    date: "2025",
    link: "https://learn.microsoft.com/",
    icon: () => (
      <svg viewBox="0 0 23 23" className="w-8 h-8">
        <path fill="#f35323" d="M0 0h11v11H0z"/>
        <path fill="#7fb900" d="M12 0h11v11H12z"/>
        <path fill="#00a4ef" d="M0 12h11v11H0z"/>
        <path fill="#ffb900" d="M12 12h11v11H12z"/>
      </svg>
    ),
    color: "bg-white",
    description: "Built foundational knowledge of Artificial Intelligence, Machine Learning, Generative AI concepts, and Azure AI services."
  },
  {
    title: "Azure Fundamentals (AZ-900)",
    org: "Microsoft Certified",
    date: "2025",
    link: "https://learn.microsoft.com/",
    icon: () => (
      <svg viewBox="0 0 23 23" className="w-8 h-8">
        <path fill="#f35323" d="M0 0h11v11H0z"/>
        <path fill="#7fb900" d="M12 0h11v11H12z"/>
        <path fill="#00a4ef" d="M0 12h11v11H0z"/>
        <path fill="#ffb900" d="M12 12h11v11H12z"/>
      </svg>
    ),
    color: "bg-white",
    description: "Strengthened understanding of cloud computing concepts, Azure services, security, governance, and cloud architecture principles."
  },
  {
    title: "AI Business Professional (AB-731)",
    org: "Microsoft Certified",
    date: "2025",
    link: "https://learn.microsoft.com/",
    icon: () => (
      <svg viewBox="0 0 23 23" className="w-8 h-8">
        <path fill="#f35323" d="M0 0h11v11H0z"/>
        <path fill="#7fb900" d="M12 0h11v11H12z"/>
        <path fill="#00a4ef" d="M0 12h11v11H0z"/>
        <path fill="#ffb900" d="M12 12h11v11H12z"/>
      </svg>
    ),
    color: "bg-white",
    description: "Developed understanding of enterprise AI business value, adoption strategies, change management, and tool evaluation across Microsoft Copilot and Azure AI Foundry platforms."
  },
  {
    title: "AI Transformation Leader (AB-730)",
    org: "Microsoft Certified",
    date: "2025",
    link: "https://learn.microsoft.com/",
    icon: () => (
      <svg viewBox="0 0 23 23" className="w-8 h-8">
        <path fill="#f35323" d="M0 0h11v11H0z"/>
        <path fill="#7fb900" d="M12 0h11v11H12z"/>
        <path fill="#00a4ef" d="M0 12h11v11H0z"/>
        <path fill="#ffb900" d="M12 12h11v11H12z"/>
      </svg>
    ),
    color: "bg-white",
    description: "Developed understanding of Generative AI fundamentals, prompt engineering, conversation management, and AI-powered content drafting using Microsoft 365 Copilot tools."
  },
  {
    title: "Google Cloud Generative AI Leader",
    org: "Google Cloud",
    date: "2025",
    link: "https://www.cloudskillsboost.google/",
    icon: () => (
      <svg viewBox="0 0 24 24" className="w-8 h-8">
        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
      </svg>
    ),
    color: "bg-white",
    description: "Gained knowledge of Generative AI concepts, large language models, responsible AI principles, enterprise AI adoption practices and Google AI Services."
  }
];

export default function Certifications() {
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
      const scrollAmount = 350;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="certifications" className="py-32 bg-background overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 mb-20 flex justify-between items-end">
        <div>
          <span className="font-mono text-accent/80 text-xs tracking-[0.4em] uppercase mb-4 block">Validation</span>
          <h2 className="text-5xl font-light text-white">Professional <span className="italic font-serif text-accent">Certifications</span></h2>
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
        <div 
          ref={scrollRef}
          onScroll={checkScroll}
          className="overflow-x-auto pb-12 hide-scrollbar snap-x snap-mandatory"
        >
          <div className="flex gap-8 min-w-max px-[10vw]">
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="w-[300px] md:w-[350px] group snap-center"
              >
                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="block">
                  <div className="bg-secondary/20 border border-white/5 p-8 rounded-[2rem] hover:bg-secondary/30 transition-all duration-500 hover:border-accent/30 flex flex-col items-center text-center h-full backdrop-blur-sm">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 ${cert.color}`}>
                      {typeof cert.icon === 'function' ? React.createElement(cert.icon, {}) : React.createElement(cert.icon, { className: "w-8 h-8 text-accent" })}
                    </div>
                    <h3 className="text-xl font-light text-white mb-2 group-hover:text-accent transition-colors">{cert.title}</h3>
                    <p className="text-accent-soft font-mono text-[10px] uppercase tracking-widest mb-2">{cert.org}</p>
                    <p className="text-text-secondary text-xs mb-4 leading-relaxed line-clamp-3">{cert.description}</p>
                    <div className="mt-auto pt-4 border-t border-white/5 w-full flex items-center justify-between">
                      <span className="text-text-secondary text-xs font-mono">{cert.date}</span>
                      <ExternalLink size={14} className="text-text-secondary group-hover:text-accent transition-colors" />
                    </div>
                  </div>
                </a>
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
