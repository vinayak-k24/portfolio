'use client';

import React, { useState } from 'react';
import { Brain, Cpu, Database, Network, Search, ChevronRight, Cloud, Code, Shield } from 'lucide-react';

const categories = [
  {
    id: 'ai',
    title: 'Gen AI & Agentic Systems',
    icon: Brain,
    description: 'Specializing in Generative AI, agent-based solutions, and multi-agent orchestration using Azure AI Foundry, Copilot Studio, Semantic Kernel, AutoGen, and Microsoft Agentic Framework.',
    skills: ['Copilot Studio', 'Azure AI Foundry', 'Semantic Kernel', 'AutoGen', 'Microsoft Agentic Framework', 'Model Context Protocol (MCP)', 'Multi-Agent Systems', 'Azure OpenAI', 'RAG', 'Prompt Engineering'],
    projects: ['Plant Operators AI Advisor', 'Procurement Advisor Platform']
  },
  {
    id: 'cloud',
    title: 'Cloud Computing (Azure & GCP)',
    icon: Cloud,
    description: 'Expert in Microsoft Azure (primary) and Google Cloud Platform. Proficient in Azure App Services, Azure Functions, Azure AI services, Azure SQL, Cosmos DB, and GCP cloud resources.',
    skills: ['Microsoft Azure', 'Azure App Services', 'Azure Functions', 'Azure AI Foundry', 'Azure OpenAI', 'Azure SQL', 'Azure Cosmos DB', 'Google Cloud Platform', 'Cloud Native', 'Serverless'],
    projects: ['Supply Chain Management Platform', 'Plant Operators AI Advisor']
  },
  {
    id: 'devops',
    title: 'DevOps & MLOps',
    icon: Cpu,
    description: 'Streamlining development and deployment with Azure DevOps CI/CD pipelines, Docker containerization, and ML operations for production-ready AI solutions.',
    skills: ['Azure DevOps', 'CI/CD Pipelines', 'Docker', 'Git', 'MLOps', 'Containerization', 'Automated Deployment', 'Build Automation', 'Release Management'],
    projects: ['FTE Matching Automation', 'Supply Chain Management Platform']
  },
  {
    id: 'backend',
    title: 'Backend Development',
    icon: Code,
    description: 'Building scalable REST APIs and backend services using Python and FastAPI for enterprise applications and AI-powered capabilities.',
    skills: ['Python', 'FastAPI', 'REST APIs', 'Backend Services', 'API Integration', 'Microservices', 'Enterprise Applications'],
    projects: ['FTE Matching Automation', 'Supply Chain Management Platform']
  },
  {
    id: 'security',
    title: 'DevSecOps & Security',
    icon: Shield,
    description: 'Incorporating security practices with SonarQube, SAST, DAST, and OWASP-aligned reviews for secure SDLC and vulnerability remediation.',
    skills: ['SonarQube', 'SAST', 'DAST', 'OWASP', 'Secure SDLC', 'Vulnerability Assessment', 'Security Reviews'],
    projects: ['Supply Chain Management Platform']
  },
  {
    id: 'quantum',
    title: 'Quantum Computing',
    icon: Search,
    description: 'Exploring quantum algorithms and hybrid quantum-classical systems using Qiskit and IBM Quantum Runtime for optimization problems.',
    skills: ['Qiskit', 'IBM Quantum', 'Quantum Algorithms', 'Hybrid Quantum-Classical Systems', 'Quantum Optimization', 'Error Mitigation'],
    projects: ['Quantum Currency Arbitrage']
  },
  {
    id: 'core',
    title: 'Core CS Fundamentals',
    icon: Database,
    description: 'Strong foundation from academic coursework: OOP in C++, DSA, OS, CN, DBMS, EDA, ML, NLP, Blockchain, and Cloud Computing.',
    skills: ['OOP in C++', 'Data Structures', 'Algorithms', 'Operating Systems', 'Computer Networks', 'DBMS', 'EDA', 'ML', 'NLP', 'Blockchain'],
    projects: ['Sharding-Powered Proof of Stake', 'BLOCK-FEMF']
  }
];

export default function TechDepth() {
  const [activeId, setActiveId] = useState<string | null>('ai');

  const active = categories.find(c => c.id === activeId) || categories[0];

  return (
    <section id="systems" className="py-16 px-4 bg-background min-h-0">
      <div className="max-w-7xl mx-auto">
        <div className="mb-4 sticky top-3 z-30 bg-background/0 py-2">
          <span className="font-mono text-accent/80 text-[11px] tracking-widest uppercase mb-1 block">Technical Depth</span>
          <h2 className="text-3xl md:text-4xl font-light text-white">Skills</h2>
        </div>

        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-4 space-y-3 md:sticky md:top-24 self-start">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveId(cat.id)}
                className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center justify-between group ${activeId === cat.id ? 'bg-accent/5 border-accent/30' : 'bg-secondary/20 border-white/5 hover:border-white/10'}`}
              >
                <div className="flex items-center gap-4">
                  <cat.icon size={18} className={activeId === cat.id ? 'text-accent' : 'text-text-secondary group-hover:text-white'} />
                  <span className={`text-sm font-light ${activeId === cat.id ? 'text-white' : 'text-text-secondary group-hover:text-white'}`}>
                    {cat.title}
                  </span>
                </div>
                <ChevronRight size={16} className={`transition-transform duration-300 ${activeId === cat.id ? 'rotate-90 text-accent' : 'text-text-secondary'}`} />
              </button>
            ))}
          </div>

          <div className="md:col-span-8">
            <div className="pr-4">
              <div className="bg-secondary/20 border border-white/5 p-4 md:p-6 rounded-3xl h-full relative">
                <div className="absolute top-0 right-0 w-56 h-56 bg-accent/5 blur-xl rounded-full -mr-28 -mt-28" />
                <div className="flex items-center gap-4 mb-4">
                  {React.createElement(active.icon, { size: 28, className: 'text-accent' })}
                  <h3 className="text-2xl md:text-3xl font-light text-white">{active.title}</h3>
                </div>

                <p className="text-sm md:text-base text-text-secondary mb-6 leading-tight font-light">{active.description}</p>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 mb-4">
                  {active.skills.map(skill => (
                    <div key={skill} className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-accent" />
                      <span className="font-mono text-[11px] md:text-xs text-text-secondary tracking-wider">{skill}</span>
                    </div>
                  ))}
                </div>
                <div>
                  <h4 className="font-mono text-[9px] text-accent uppercase tracking-widest mb-2">Used In</h4>
                  <div className="flex flex-wrap gap-2">
                    {active.projects.map(p => (
                      <span key={p} className="px-2 py-0.5 bg-white/5 text-[9px] font-mono text-text-secondary rounded-full border border-white/5">{p}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
