'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ExternalLink, Github, Briefcase, User } from 'lucide-react';

const professionalProjects = [
  {
    id: 'p1',
    title: "Plant Operators AI Advisor",
    subtitle: "Azure AI Foundry & Machine Learning",
    description: "Built an AI advisor using Azure Machine Learning Studio and Azure AI Foundry implementing Root Cause Analysis with Remaining Useful Life prediction and Anomaly Detection.",
    problem: "Industrial equipment failures were causing unplanned downtime and maintenance costs.",
    architecture: "Azure ML Studio for model training, Azure AI Foundry for deployment, custom LSTM models for RUL prediction.",
    metrics: "Achieved 88% accuracy on RUL validation dataset and 93% accuracy on anomaly detection.",
    tech: ["Azure ML", "Azure AI Foundry", "Python", "LSTM", "Anomaly Detection"],
    // image removed - visuals simplified
    category: 'professional'
  },
  {
    id: 'p2',
    title: "Procurement Advisor Platform",
    subtitle: "Azure AI Foundry Agents",
    description: "Developed a procurement advisor platform using Azure AI Foundry agents with enhanced AI Search capabilities for document processing and ambiguity resolution.",
    problem: "Manual procurement processes were slow and prone to errors in document interpretation.",
    architecture: "Azure AI Foundry agents, Azure AI Search, custom RAG pipeline for document querying.",
    metrics: "Processes 60-70 document queries per request compared to previous 7-8, significantly improving ambiguity resolution.",
    tech: ["Azure AI Foundry", "AI Search", "RAG", "Python", "Agents"],
    // image removed - visuals simplified
    category: 'professional'
  },
  {
    id: 'p3',
    title: "FTE Matching Automation",
    subtitle: "AI Agents & Process Automation",
    description: "Automated Full Time Equivalent matching process using AI agents that compare new requirements against hundreds of historical IPs and generate complete documents.",
    problem: "Manual FTE matching was time-consuming, taking weeks to complete.",
    architecture: "Multi-agent system with Azure OpenAI, automated document generation, historical data comparison.",
    metrics: "Reduced process time from weeks to minutes with zero manual intervention.",
    tech: ["Azure OpenAI", "AI Agents", "Automation", "Python", "Document Generation"],
    // image removed - visuals simplified
    category: 'professional'
  },
  {
    id: 'p4',
    title: "Supply Chain Management Platform",
    subtitle: "Microsoft Fabric & Backend Development",
    description: "Working on Supply Chain Management Platform on Microsoft Fabric developing backend logic for complex data merging, routing, modification, division and synchronization across systems.",
    problem: "Enterprise supply chain data was fragmented across multiple systems requiring manual synchronization.",
    architecture: "Microsoft Fabric, Python backend services, data orchestration pipelines, Azure SQL Database.",
    metrics: "Enables real-time data synchronization across enterprise systems with automated routing.",
    tech: ["Microsoft Fabric", "Python", "Azure SQL", "Data Orchestration"],
    // image removed - visuals simplified
    category: 'professional'
  }
];

const personalProjects = [
  {
    id: '1',
    title: "KCET KEA College Predictor",
    subtitle: "Full Stack Web Application",
    description: "Built complete full stack web application simulating Karnataka CET option entry and mock seat allocation process using AI tools.",
    problem: "Students needed an accurate college prediction tool based on historical cutoff data and reservation rules.",
    architecture: "React 18, TypeScript, Vite, Tailwind CSS for frontend; Node.js, Express for backend; OpenAI, Google Generative AI, Puppeteer for PDF generation.",
    metrics: "Processes 18,716 historical cutoff ranks across 224 colleges, 1,707 programs, and 137 courses. Implemented RAG-inspired pipeline for intelligent extraction from student PDFs including Kannada language documents.",
    tech: ["React", "TypeScript", "Node.js", "OpenAI", "Google AI", "RAG"],
    // image removed - visuals simplified
    category: 'personal'
  },
  {
    id: '2',
    title: "Quantum Currency Arbitrage",
    subtitle: "Hybrid Quantum-Classical System",
    description: "Architected hybrid quantum-classical system for detecting optimal multi-hop currency arbitrage cycles using IBM Quantum Runtime.",
    problem: "Classical brute-force approaches would take 30,000+ years to find optimal arbitrage cycles across multiple currencies.",
    architecture: "Python, Qiskit, IBM Quantum Runtime on Eagle r3 backend with binary node encoding for qubit efficiency.",
    metrics: "Achieved 71% qubit efficiency improvement (70 to 20 qubits). Reduced computational time to ~3 minutes. Validated globally optimal cycle delivering 0.175% profit against 240,240 exhaustive paths.",
    tech: ["Python", "Qiskit", "IBM Quantum", "Quantum Algorithms"],
    // image removed - visuals simplified
    category: 'personal'
  },
  {
    id: '3',
    title: "Multi-Agent Supply Chain Platform",
    subtitle: "Fraud Intelligence & Supply Chain",
    description: "Designed unified multi-agent system merging quick commerce, e-commerce and traditional supply chains with intelligent inventory and fraud detection.",
    problem: "Traditional supply chain systems lacked real-time fraud detection and cross-network optimization capabilities.",
    architecture: "Python, PydanticAI, MCP Protocol, AMD MI300X GPU stack, cuGraph, vLLM, XGBoost, LSTM, Qwen3 4B with 5 specialized agents.",
    metrics: "Achieved 91% token reduction through hybrid GPU and LLM reasoning. 56x speedup on 100K node fraud graph traversal. Real-time 1.4ms inventory scan. Detected complex cross-network fraud rings projecting ₹8.5L+ daily business impact.",
    tech: ["Python", "PydanticAI", "MCP", "AMD MI300X", "cuGraph", "vLLM", "Multi-Agent Systems"],
    // image removed - visuals simplified
    category: 'personal'
  }
];

export default function WorkGrid() {
  // No expand/collapse — show details for every project
  // Default to professional first as requested
  const [activeFilter, setActiveFilter] = useState<'all' | 'professional' | 'personal'>('professional');

  const filteredProjects = activeFilter === 'all' 
    ? [...professionalProjects, ...personalProjects]
    : activeFilter === 'professional'
      ? professionalProjects
      : personalProjects;

  return (
    <section id="projects" className="py-32 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <span className="font-mono text-accent/80 text-xs tracking-[0.4em] uppercase mb-4 block">Portfolio</span>
          <h2 className="text-5xl font-light text-white mb-8">Projects</h2>
          
          {/* Filter Buttons */}
          <div className="flex gap-4 flex-wrap justify-center">
            <button
              onClick={() => setActiveFilter('professional')}
              className={`px-6 py-3 rounded-full border transition-all text-sm font-mono uppercase tracking-wider flex items-center gap-2 ${
                activeFilter === 'professional'
                  ? 'bg-accent/20 border-accent text-accent'
                  : 'bg-secondary/20 border-white/10 text-text-secondary hover:border-accent/50'
              }`}
            >
              <Briefcase size={16} />
              Professional
            </button>
            <button
              onClick={() => setActiveFilter('personal')}
              className={`px-6 py-3 rounded-full border transition-all text-sm font-mono uppercase tracking-wider flex items-center gap-2 ${
                activeFilter === 'personal'
                  ? 'bg-accent/20 border-accent text-accent'
                  : 'bg-secondary/20 border-white/10 text-text-secondary hover:border-accent/50'
              }`}
            >
              <User size={16} />
              Personal
            </button>
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-6 py-3 rounded-full border transition-all text-sm font-mono uppercase tracking-wider ${
                activeFilter === 'all'
                  ? 'bg-accent/20 border-accent text-accent'
                  : 'bg-secondary/20 border-white/10 text-text-secondary hover:border-accent/50'
              }`}
            >
              All Projects
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-stretch auto-rows-fr">
          {filteredProjects.map((project, index) => {
            const isExpanded = true; // always show
            return (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`group relative bg-secondary/40 border border-white/5 rounded-3xl transition-all hover:border-accent/30 md:min-h-[420px] h-full`} 
              >
                <div className={`flex flex-col md:flex-row h-full`}>
                  <div className={`p-10 flex flex-col justify-between w-full md:w-1/2 h-full`}>
                    <div>
                      <div className="flex justify-between items-start mb-6">
                        <div>
                          <span className={`inline-flex items-center mb-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-wider border ${project.category === 'professional' ? 'border-accent text-accent' : 'border-accent text-accent'}`}>
                            {project.category === 'professional' ? 'Professional' : 'Personal'}
                          </span>
                          <h3 className="text-3xl font-light text-white group-hover:text-accent transition-colors">{project.title}</h3>
                          <p className="font-mono text-[10px] text-text-secondary uppercase tracking-[0.2em] mt-2">{project.subtitle}</p>
                        </div>
                        <div className="flex gap-4">
                          <Github size={20} className="text-text-secondary hover:text-white cursor-pointer transition-colors" />
                          <ExternalLink size={20} className="text-text-secondary hover:text-white cursor-pointer transition-colors" />
                        </div>
                      </div>

                      <p className="text-text-secondary mb-8 leading-relaxed font-light">{project.description}</p>

                      <div className="flex flex-wrap gap-3 mb-10">
                        {project.tech.map(t => (
                          <span key={t} className="px-3 py-1 bg-white/5 text-[10px] font-mono text-text-secondary rounded-full border border-white/5">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Details are always visible on the right */}
                  </div>
                  <motion.div className={`w-full md:w-1/2 p-8 border-l border-white/5 rounded-r-3xl bg-background/5 flex flex-col justify-between h-full`}>
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-mono text-[10px] text-accent uppercase tracking-widest mb-3">The Problem</h4>
                        <p className="text-sm text-text-secondary leading-relaxed">{project.problem}</p>
                      </div>
                      <div>
                        <h4 className="font-mono text-[10px] text-accent uppercase tracking-widest mb-3">Architecture</h4>
                        <p className="text-sm text-text-secondary leading-relaxed mb-3">{project.architecture}</p>
                        <p className="text-sm text-text-secondary leading-relaxed">System Design Highlights: components (data ingestion, model training, model serving), infra (AKS/VMs, storage, message queues), security (managed identities, RBAC), and deployment pipelines.</p>
                      </div>
                      <div>
                        <h4 className="font-mono text-[10px] text-accent uppercase tracking-widest mb-3">Key Metrics</h4>
                        <p className="text-sm text-text-secondary leading-relaxed">{project.metrics}</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
