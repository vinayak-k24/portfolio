'use client';

import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { FileText, ExternalLink, Quote, BookOpen, ChevronLeft, ChevronRight } from 'lucide-react';

const papers = [
  {
    title: "Sharding-Powered Proof of Stake (SPPS): A Scalable and Secure Solution for Blockchain in Supply Chain Management",
    journal: "Springer, Singapore",
    year: "2024",
    link: "https://orcid.org/0000-0001-8238-6960",
    abstract: "A novel sharding-based consensus mechanism designed to enhance scalability and security in supply chain blockchain networks."
  },
  {
    title: "ShardedScale: Empowering Blockchain Transaction Scalability with Scalable Block Consensus",
    journal: "Procedia Computer Science",
    year: "2024",
    link: "https://orcid.org/0000-0001-8238-6960",
    abstract: "Researching block consensus optimizations to achieve high-throughput transaction processing in sharded blockchain environments."
  },
  {
    title: "BLOCK-FEMF: Efficient Forensic Evidence Management Framework Using Blockchain Technology",
    journal: "Springer, Singapore",
    year: "2023",
    link: "https://orcid.org/0000-0001-8238-6960",
    abstract: "A framework for secure and immutable forensic evidence management leveraging decentralized ledger technology."
  },
  {
    title: "Voice-based Gender and Age Recognition System",
    journal: "IEEE",
    year: "2023",
    link: "https://orcid.org/0000-0001-8238-6960",
    abstract: "Implementing deep learning models for accurate demographic classification from acoustic signals."
  },
  {
    title: "Emoji Prediction Using Bi-Directional LSTM",
    journal: "ITM Web of Conferences",
    year: "2023",
    link: "https://orcid.org/0000-0001-8238-6960",
    abstract: "Utilizing Bi-LSTM architectures to predict contextual emojis in natural language processing tasks."
  }
];

export default function Papers() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [focusedIndex, setFocusedIndex] = useState<number>(0);
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);

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
    // determine currently centered index by measuring distances to container center
    const getCenteredIndex = () => {
      if (!scrollRef.current) return focusedIndex;
      const container = scrollRef.current;
      const containerRect = container.getBoundingClientRect();
      const containerCenter = containerRect.left + containerRect.width / 2;
      let closest = 0;
      let minDist = Infinity;
      itemRefs.current.forEach((el, idx) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const elCenter = rect.left + rect.width / 2;
        const dist = Math.abs(elCenter - containerCenter);
        if (dist < minDist) {
          minDist = dist;
          closest = idx;
        }
      });
      return closest;
    };

    const current = getCenteredIndex();
    if (direction === 'left') {
      scrollToIndex(Math.max(0, current - 1));
    } else {
      scrollToIndex(Math.min(papers.length - 1, current + 1));
    }
  };

  const scrollToIndex = (index: number) => {
    const el = itemRefs.current[index];
    if (!el || !scrollRef.current) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    setFocusedIndex(index);
  };

  useEffect(() => {
    const root = scrollRef.current;
    if (!root) return;
    const options: IntersectionObserverInit = {
      root,
      rootMargin: '0px',
      threshold: 0.6
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const index = Number((entry.target as HTMLElement).dataset.index);
        if (entry.isIntersecting) setFocusedIndex(index);
      });
    }, options);

    itemRefs.current.forEach((el) => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  // center initial slide after mount (allow layout)
  useEffect(() => {
    const t = setTimeout(() => scrollToIndex(0), 120);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="papers" className="py-32 bg-secondary/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-20 flex justify-between items-end">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="font-mono text-accent text-sm tracking-widest uppercase mb-4 block">Scientific Contributions</span>
          <h2 className="text-5xl md:text-7xl font-light text-white tracking-tight">
            Research <span className="italic font-serif text-accent">&</span> Publications
          </h2>
        </motion.div>
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
        {/* Side scroll controls */}
        <button 
          onClick={() => scroll('left')}
          disabled={!canScrollLeft}
          className={`absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center transition-all z-40 ${canScrollLeft ? 'text-white hover:border-accent hover:text-accent' : 'text-white/10 cursor-not-allowed'}`}
        >
          <ChevronLeft size={24} />
        </button>
        <button 
          onClick={() => scroll('right')}
          disabled={!canScrollRight}
          className={`absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/10 flex items-center justify-center transition-all z-40 ${canScrollRight ? 'text-white hover:border-accent hover:text-accent' : 'text-white/10 cursor-not-allowed'}`}
        >
          <ChevronRight size={24} />
        </button>

        <div 
          ref={scrollRef}
          onScroll={checkScroll}
          className="overflow-x-auto pb-12 hide-scrollbar snap-x snap-mandatory"
        >
          <div className="flex gap-8 min-w-max px-8 justify-center items-start">
            {/* leading spacer to allow first card to center */}
            <div className="w-[520px] md:w-[720px] h-[460px] md:h-[620px] shrink-0" />
            {papers.map((paper, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="w-[520px] md:w-[720px] h-[460px] md:h-[620px] shrink-0 snap-center flex"
                ref={el => itemRefs.current[i] = el}
                data-index={i}
                onClick={() => scrollToIndex(i)}
              >
                <div className={`group relative bg-background/40 border border-white/5 rounded-[2.5rem] p-8 md:p-10 hover:border-accent/30 transition-all duration-500 h-full flex flex-col ${focusedIndex === i ? 'filter-none scale-100 opacity-100' : 'filter blur-sm scale-95 opacity-70'}`}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-500">
                      <FileText size={24} />
                    </div>
                    <div>
                      <span className="text-accent-soft font-mono text-[10px] uppercase tracking-widest block">{paper.year}</span>
                      <span className="text-text-secondary font-mono text-[10px] uppercase tracking-widest">{paper.journal}</span>
                    </div>
                  </div>

                  <h3 className="text-xl md:text-2xl font-light text-white mb-6 group-hover:text-accent transition-colors leading-tight">
                    {paper.title}
                  </h3>

                  <div className="relative mb-8 flex-1">
                    <Quote size={32} className="absolute -top-2 -left-2 text-white/5 pointer-events-none" />
                    <p className="text-text-secondary text-sm font-light leading-relaxed pl-6 border-l border-white/10 italic">
                      {paper.abstract}
                    </p>
                  </div>

                  <a 
                    href={paper.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-mono text-accent hover:text-accent-soft transition-colors group/link mt-auto"
                  >
                    View Publication
                    <ExternalLink size={12} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
            {/* trailing spacer to allow last card to center */}
            <div className="w-[520px] md:w-[720px] h-[460px] md:h-[620px] shrink-0" />
          </div>
        </div>
        
        {/* Removed faded-edge overlays so cards at edges are fully visible */}
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-16 flex justify-center px-6"
      >
        <a 
          href="https://orcid.org/0000-0001-8238-6960"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 px-8 py-4 rounded-full border border-white/10 text-text-secondary hover:text-white hover:border-accent/50 transition-all group"
        >
          <BookOpen size={18} />
          <span className="font-mono text-xs uppercase tracking-widest">Explore Full ORCID Profile</span>
        </a>
      </motion.div>
    </section>
  );
}
