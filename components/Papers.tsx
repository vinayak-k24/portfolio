'use client';

import React from 'react';
import { motion } from 'motion/react';
import { FileText, ExternalLink, BookOpen } from 'lucide-react';

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
  return (
    <section id="papers" className="py-32 px-6 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="font-mono text-accent/80 text-xs tracking-[0.4em] uppercase mb-4 block">Scientific Contributions</span>
          <h2 className="text-5xl font-light text-white tracking-tight">
            Research <span className="italic font-serif text-accent">&</span> Publications
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {papers.map((paper, i) => (
            <motion.article
              key={paper.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="group relative bg-background/40 border border-white/5 rounded-3xl p-8 hover:border-accent/30 transition-all duration-300 h-full flex flex-col"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-11 h-11 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent">
                  <FileText size={20} />
                </div>
                <div>
                  <span className="text-accent-soft font-mono text-[10px] uppercase tracking-widest block">{paper.year}</span>
                  <span className="text-text-secondary font-mono text-[10px] uppercase tracking-widest">{paper.journal}</span>
                </div>
              </div>

              <h3 className="text-xl font-light text-white mb-4 group-hover:text-accent transition-colors leading-tight">
                {paper.title}
              </h3>

              <p className="text-text-secondary text-sm font-light leading-relaxed mb-6 flex-1">
                {paper.abstract}
              </p>

              <a
                href={paper.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono text-accent hover:text-accent-soft transition-colors mt-auto"
              >
                View Publication
                <ExternalLink size={12} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </motion.article>
          ))}
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="mt-14 flex justify-center px-6"
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
