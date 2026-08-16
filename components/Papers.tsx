'use client';

import React from 'react';
import { motion } from 'motion/react';
import { FileText, ExternalLink, BookOpen } from 'lucide-react';

const papers = [
  {
    title: "Sharding-Powered Proof of Stake (SPPS): A Scalable and Secure Solution for Blockchain in Supply Chain Management",
    journal: "Springer",
    year: "Dec 13, 2024",
    link: "https://link.springer.com/chapter/10.1007/978-981-97-5791-6_54",
    abstract: "We proposed a sharding and PoS hybrid consensus mechanism that improved blockchain throughput by 40% and reduced confirmation time by 10% for supply chain applications. We segmented the network into smaller shards to enable simultaneous transaction processing and enhanced inter-shard communication. We validated the approach against traditional PoW and PoS mechanisms, demonstrating superior scalability and security. We also addressed flexibility requirements specific to decentralized supply chain services. Our findings opened new avenues for real-world blockchain deployment in logistics and traceability."
  },
  {
    title: "ShardedScale: Empowering Blockchain Transaction Scalability with Scalable Block Consensus",
    journal: "ScienceDirect",
    year: "Jan 1, 2024",
    link: "https://www.sciencedirect.com/science/article/pii/S1877050924005921",
    abstract: "We designed a hybrid mechanism combining PoW, DPOS, IPFS, and sharding that achieved 60% higher throughput and 40% faster transaction confirmation while reducing gas costs. We integrated IPFS to offload storage and mitigate expanding ledger sizes that plague traditional blockchains. We implemented Dynamic On-demand Proof of Stake to balance energy consumption with validation speed. We benchmarked the system against Ethereum baselines and demonstrated a 30% reduction in gas price consumption. We concluded that hybrid consensus models are essential for next-generation scalable decentralized applications."
  },
  {
    title: "BLOCK-FEMF: Efficient Forensic Evidence Management Framework Using Blockchain Technology",
    journal: "Springer",
    year: "Oct 28, 2023",
    link: "https://link.springer.com/chapter/10.1007/978-981-99-5792-7_6",
    abstract: "We developed a Base64 and IPFS-integrated blockchain framework for digital forensics that optimized memory utilization by 20% and enhanced transaction scalability over existing Base32 systems. We replaced the legacy Base32 encoding algorithm to resolve storage limitations and time delay issues in evidence management. We stored encrypted image evidence on-chain while leveraging IPFS for decentralized off-chain storage to optimize memory. We ensured tamper-proof provenance tracking so only authenticated users could access or migrate evidence. We demonstrated through experiments that our framework reduced gas utilization by 19.5% compared to prior approaches."
  },
  {
    title: "Emoji Prediction Using Bi-Directional LSTM",
    journal: "Semantic Scholar",
    year: "Jun 1, 2023",
    link: "https://pdfs.semanticscholar.org/9959/467fc3f4b1809422b1ab98072e6633858404.pdf",
    abstract: "We implemented a bi-directional LSTM model that achieved 94% accuracy in text-based emoji prediction, outperforming RNN and standard LSTM baselines on Twitter datasets. We trained and evaluated the model on a CodaLab dataset containing 60,000 rows of social media text. We compared multiple NLP architectures including RNN, LSTM, and Bi-LSTM to identify the most effective technique for emoji suggestion. We captured contextual semantics in both forward and backward directions to better understand emotional undertones in text. We concluded that bi-directional LSTMs significantly enhance user texting experience by providing relevant, emotion-aware emoji recommendations."
  },
  {
    title: "Voice-Based Gender and Age Recognition System",
    journal: "IEEE Xplore",
    year: "Jun 8, 2023",
    link: "https://ieeexplore.ieee.org/abstract/document/10141801",
    abstract: "We developed ML-based voice classification using PCA, Logistic Regression, and sequential deep learning models that achieved 91% gender accuracy and 59% age prediction on Common Voice data. We applied RobustScalar and Principal Component Analysis to extract and reduce speech features before feeding them into the grid search pipeline. We built a sequential model with five hidden layers specifically for gender classification to maximize detection accuracy. We used grid search to systematically evaluate multiple algorithms and select the optimal age prediction model for the dataset. We identified key open challenges in voice-based biometrics and outlined future research directions for improving age estimation reliability."
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
