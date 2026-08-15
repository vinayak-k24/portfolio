'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Brain, Cpu, Database, Network, Search, ChevronRight, Cloud, Code, Shield } from 'lucide-react';

const categories = [
  {
    id: 'ai',
    title: 'Gen AI & Agentic Systems',
    icon: Brain,
    description: 'Specializing in Generative AI, agent-based solutions, and multi-agent orchestration using Azure AI Foundry, Copilot Studio, Semantic Kernel, AutoGen, and Microsoft Agentic Framework.',
    skills: ['Copilot Studio', 'Azure AI Foundry', 'Semantic Kernel', 'AutoGen', 'Microsoft Agentic Framework', 'Model Context Protocol (MCP)', 'Multi-Agent Systems', 'Azure OpenAI', 'RAG', 'Prompt Engineering']
  },
  {
    id: 'cloud',
    title: 'Cloud Computing (Azure & GCP)',
    icon: Cloud,
    description: 'Expert in Microsoft Azure (primary) and Google Cloud Platform. Proficient in Azure App Services, Azure Functions, Azure AI services, Azure SQL, Cosmos DB, and GCP cloud resources.',
    skills: ['Microsoft Azure', 'Azure App Services', 'Azure Functions', 'Azure AI Foundry', 'Azure OpenAI', 'Azure SQL', 'Azure Cosmos DB', 'Google Cloud Platform', 'Cloud Native', 'Serverless']
  },
  {
    id: 'devops',
    title: 'DevOps & MLOps',
    icon: Cpu,
    description: 'Streamlining development and deployment with Azure DevOps CI/CD pipelines, Docker containerization, and ML operations for production-ready AI solutions.',
    skills: ['Azure DevOps', 'CI/CD Pipelines', 'Docker', 'Git', 'MLOps', 'Containerization', 'Automated Deployment', 'Build Automation', 'Release Management']
  },
  {
    id: 'backend',
    title: 'Backend Development',
    icon: Code,
    description: 'Building scalable REST APIs and backend services using Python and FastAPI for enterprise applications and AI-powered capabilities.',
    skills: ['Python', 'FastAPI', 'REST APIs', 'Backend Services', 'API Integration', 'Microservices', 'Enterprise Applications']
  },
  {
    id: 'security',
    title: 'DevSecOps & Security',
    icon: Shield,
    description: 'Incorporating security practices with SonarQube, SAST, DAST, and OWASP-aligned reviews for secure SDLC and vulnerability remediation.',
    skills: ['SonarQube', 'SAST', 'DAST', 'OWASP', 'Secure SDLC', 'Vulnerability Assessment', 'Security Reviews']
  },
  {
    id: 'quantum',
    title: 'Quantum Computing',
    icon: Search,
    description: 'Exploring quantum algorithms and hybrid quantum-classical systems using Qiskit and IBM Quantum Runtime for optimization problems.',
    skills: ['Qiskit', 'IBM Quantum', 'Quantum Algorithms', 'Hybrid Quantum-Classical Systems', 'Quantum Optimization', 'Error Mitigation']
  },
  {
    id: 'core',
    title: 'Core CS Fundamentals',
    icon: Database,
    description: 'Strong foundation from academic coursework: OOP in C++, DSA, OS, CN, DBMS, EDA, ML, NLP, Blockchain, and Cloud Computing.',
    skills: ['OOP in C++', 'Data Structures', 'Algorithms', 'Operating Systems', 'Computer Networks', 'DBMS', 'EDA', 'ML', 'NLP', 'Blockchain']
  }
];

export default function TechDepth() {
  const [activeId, setActiveId] = useState<string | null>('ai');

  return (
    <section id="systems" className="py-32 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <span className="font-mono text-accent/80 text-xs tracking-[0.4em] uppercase mb-4 block">Technical Depth</span>
          <h2 className="text-5xl font-light text-white">Systems & Technologies</h2>
        </div>

        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4 space-y-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveId(cat.id)}
                className={`w-full text-left p-8 rounded-2xl border transition-all flex items-center justify-between group ${activeId === cat.id ? 'bg-accent/5 border-accent/30' : 'bg-secondary/20 border-white/5 hover:border-white/10'}`}
              >
                <div className="flex items-center gap-5">
                  <cat.icon size={24} className={activeId === cat.id ? 'text-accent' : 'text-text-secondary group-hover:text-white'} />
                  <span className={`text-lg font-light ${activeId === cat.id ? 'text-white' : 'text-text-secondary group-hover:text-white'}`}>
                    {cat.title}
                  </span>
                </div>
                <ChevronRight size={18} className={`transition-transform duration-500 ${activeId === cat.id ? 'rotate-90 text-accent' : 'text-text-secondary'}`} />
              </button>
            ))}
          </div>

          <div className="md:col-span-8">
            <AnimatePresence mode="wait">
              {activeId ? (
                <motion.div
                  key={activeId}
                  initial={{ opacity: 0, x: 20, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, x: -20, filter: 'blur(10px)' }}
                  className="bg-secondary/20 border border-white/5 p-12 md:p-16 rounded-3xl h-full relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 blur-[100px] rounded-full -mr-32 -mt-32" />
                  {categories.find(c => c.id === activeId) && (
                    <>
                      <div className="flex items-center gap-6 mb-10">
                        {React.createElement(categories.find(c => c.id === activeId)!.icon, { size: 40, className: "text-accent" })}
                        <h3 className="text-4xl font-light text-white">{categories.find(c => c.id === activeId)!.title}</h3>
                      </div>
                      <p className="text-2xl text-text-secondary mb-16 leading-relaxed font-light">
                        {categories.find(c => c.id === activeId)!.description}
                      </p>
                      
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                        {categories.find(c => c.id === activeId)!.skills.map((skill) => (
                          <div key={skill} className="flex items-center gap-3">
                            <div className="w-1 h-1 rounded-full bg-accent" />
                            <span className="font-mono text-xs text-text-secondary tracking-wider">{skill}</span>
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </motion.div>
              ) : (
                <div className="bg-secondary/10 border border-dashed border-white/10 p-12 rounded-sm h-full flex flex-col items-center justify-center text-center">
                  <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-6">
                    <Cpu size={32} className="text-text-secondary opacity-50" />
                  </div>
                  <h3 className="text-xl font-medium text-white mb-2">Select a Category</h3>
                  <p className="text-text-secondary max-w-xs">Explore the specific technical domains and methodologies I specialize in.</p>
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
