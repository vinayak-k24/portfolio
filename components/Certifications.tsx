'use client';

import React, { useRef, useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';

// Direct image URLs for all providers
const providerIcons: Record<string, string> = {
  Microsoft: 'https://cdn-icons-png.flaticon.com/512/732/732221.png',
  'Google Cloud': 'https://cdn-icons-png.flaticon.com/512/300/300221.png',
  GitHub: 'https://cdn-icons-png.flaticon.com/512/2111/2111432.png',
  NVIDIA: 'https://cdn-icons-png.flaticon.com/512/732/732230.png',
  Credly: 'https://img.icons8.com/?size=100&id=imamZukNSZr3&format=png&color=000000',
  Anthropic: 'https://cdn.brandfetch.io/idmJWF3N06/theme/dark/symbol.svg?c=1dxbfHSJFAPEGdCLU4o5B',
};

const certifications = [
  {
    title: 'NVIDIA-Certified Associate: Accelerated Data Science',
    org: 'NVIDIA',
    date: 'Active',
    link: 'https://www.nvidia.com/en-in/training/',
  },
  {
    title: 'IBM DevOps Essentials',
    org: 'Credly',
    date: 'Active',
    link: 'https://www.credly.com/users/vinayak-sudhakar-kone/badges/credly',
  },
  {
    title: 'IBM Git and GitHub Essentials',
    org: 'Credly',
    date: 'Active',
    link: 'https://www.credly.com/users/vinayak-sudhakar-kone/badges/credly',
  },
  {
    title: 'Generative AI Leader Certification',
    org: 'Google Cloud',
    date: 'Active',
    link: 'https://www.cloudskillsboost.google/',
  },
  {
    title: 'Intelligent Search Technical Expert Badge',
    org: 'Google Cloud',
    date: 'Active',
    link: 'https://www.cloudskillsboost.google/',
  },
  {
    title: 'Professional Cloud Developer Certification',
    org: 'Google Cloud',
    date: 'Active',
    link: 'https://www.cloudskillsboost.google/',
  },
  {
    title: 'Claude Certified Associate - Foundations',
    org: 'Anthropic',
    date: 'Active',
    link: 'https://www.anthropic.com/',
  },
  {
    title: 'Claude Certified Developer - Foundations',
    org: 'Anthropic',
    date: 'Active',
    link: 'https://www.anthropic.com/',
  },
  {
    title: 'Microsoft Certified: Azure AI Engineer Associate (AI-102)',
    org: 'Microsoft Certified',
    date: 'Expires Apr 10, 2027',
    link: 'https://learn.microsoft.com/en-us/credentials/certifications/azure-ai-engineer/',
  },
  {
    title: 'Microsoft Certified: Fabric Analytics Engineer Associate (DP-600)',
    org: 'Microsoft Certified',
    date: 'Expires Jun 13, 2027',
    link: 'https://learn.microsoft.com/en-us/users/vinayakkone-7258/credentials/certifications?tab=credentials-tab',
  },
  {
    title: 'Microsoft Certified: Agentic AI Business Solutions Architect (AB-100)',
    org: 'Microsoft Certified',
    date: 'Expires Aug 13, 2027',
    link: 'https://learn.microsoft.com/en-us/users/vinayakkone-7258/credentials/certifications?tab=credentials-tab',
  },
  {
    title: 'Microsoft Certified: Azure Data Fundamentals (DP-900)',
    org: 'Microsoft Certified',
    date: 'Active (No Expiry Listed)',
    link: 'https://learn.microsoft.com/en-us/users/vinayakkone-7258/credentials/certifications?tab=credentials-tab',
  },
  {
    title: 'Microsoft Certified: AI Transformation Leader (AB-731)',
    org: 'Microsoft Certified',
    date: 'Active (No Expiry Listed)',
    link: 'https://learn.microsoft.com/en-us/users/vinayakkone-7258/credentials/certifications?tab=credentials-tab',
  },
  {
    title: 'Microsoft Certified: AI Business Professional (AB-730)',
    org: 'Microsoft Certified',
    date: 'Active (No Expiry Listed)',
    link: 'https://learn.microsoft.com/en-us/users/vinayakkone-7258/credentials/certifications?tab=credentials-tab',
  },
  {
    title: 'Microsoft Certified: Azure Fundamentals (AZ-900)',
    org: 'Microsoft Certified',
    date: 'Active (No Expiry Listed)',
    link: 'https://learn.microsoft.com/en-us/credentials/certifications/azure-fundamentals/',
  },
  {
    title: 'Microsoft Certified: Azure AI Fundamentals (AI-900)',
    org: 'Microsoft Certified',
    date: 'Earned Sep 24, 2025',
    link: 'https://learn.microsoft.com/en-us/users/vinayakkone-7258/credentials/certifications?tab=credentials-tab',
  },
  {
    title: 'GitHub Foundations (GH-900)',
    org: 'GitHub',
    date: 'Expires May 9, 2028',
    link: 'https://learn.microsoft.com/en-us/users/vinayakkone-7258/credentials/certifications?tab=credentials-tab',
  },
  {
    title: 'GitHub Copilot (GH-300)',
    org: 'GitHub',
    date: 'Expires Aug 14, 2028',
    link: 'https://learn.microsoft.com/en-us/users/vinayakkone-7258/credentials/certifications?tab=credentials-tab',
  },
];

// --- Helper Components ---

function ProviderIcon({
  url,
  initials,
  alt,
}: {
  url?: string;
  initials: string;
  alt: string;
}) {
  const [imgError, setImgError] = useState(false);

  // Reset error state if URL changes
  React.useEffect(() => {
    setImgError(false);
  }, [url]);

  if (!url || imgError) {
    return <span className="text-white/70 font-medium text-sm select-none">{initials}</span>;
  }

  return (
    <img
      src={url}
      alt={alt}
      loading="eager"
      decoding="async"
      className="w-10 h-10 object-contain"
      onError={() => setImgError(true)}
    />
  );
}

function CertificationCard({
  provider,
  certs,
  isExpanded,
  onToggle,
}: {
  provider: string;
  certs: typeof certifications;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const initials = provider.split(' ').map((s) => s[0]).slice(0, 2).join('').toUpperCase();
  const sortedCerts = [...certs].sort((a, b) => parseInt(b.date || '0') - parseInt(a.date || '0'));
  const iconUrl = providerIcons[provider];

  return (
    <div className="flex flex-col gap-4 h-full">
      <div className="bg-secondary/30 border border-white/5 p-8 rounded-3xl h-full flex flex-col justify-between transition-all hover:border-accent/20 group">
        <div>
          <div className="flex items-center gap-5 mb-6">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-white/5 overflow-hidden box-border shrink-0 relative">
              <ProviderIcon url={iconUrl} initials={initials} alt={`${provider} logo`} />
            </div>
            <h3 className="text-2xl md:text-3xl font-light text-white leading-tight">{provider}</h3>
          </div>

          <div className="space-y-3">
            {sortedCerts.map((c, i) => (
              <div key={`${c.title}-full-${i}`} className="flex items-start gap-4">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                <div className="flex-1">
                  <h4 className="text-lg text-white font-light font-serif leading-snug">{c.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-end pt-6 mt-6 border-t border-white/5">
          <a
            href={sortedCerts[0]?.link || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary text-sm inline-flex items-center gap-2 hover:text-white transition-colors z-10"
            onClick={(e) => e.stopPropagation()}
          >
            See provider <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}

// --- Main Component ---

export default function Certifications() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [expandedProvider, setExpandedProvider] = useState<string | null>(null);

  // Group certifications by provider
  const groupedCerts = useMemo(() => {
    const groups: Record<string, { certs: typeof certifications }> = {};

    certifications.forEach((c) => {
      let key = 'Other';
      const org = (c.org || '').toLowerCase();
      if (org.includes('microsoft')) key = 'Microsoft';
      else if (org.includes('google')) key = 'Google Cloud';
      else if (org.includes('anthropic') || org.includes('claude')) key = 'Anthropic';
      else if (org.includes('github')) key = 'GitHub';
      else if (org.includes('nvidia')) key = 'NVIDIA';
      else if (org.includes('credly')) key = 'Credly';

      groups[key] = groups[key] || { certs: [] };
      groups[key].certs.push(c);
    });

    const priority = ['Microsoft', 'Anthropic', 'Google Cloud', 'GitHub', 'NVIDIA', 'Credly', 'Other'];
    return Object.entries(groups).sort(([a], [b]) => {
      const diff = groups[b].certs.length - groups[a].certs.length;
      if (diff !== 0) return diff;
      const ia = priority.indexOf(a);
      const ib = priority.indexOf(b);
      if (ia === -1 && ib === -1) return a.localeCompare(b);
      if (ia === -1) return 1;
      if (ib === -1) return -1;
      return ia - ib;
    });
  }, []);

  return (
    <section id="certifications" className="py-32 bg-secondary/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 flex justify-between items-end">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="font-mono text-accent text-sm tracking-widest uppercase mb-2 block">Credentials</span>
          <h2 className="text-4xl md:text-6xl font-light text-white tracking-tight">Certifications &amp; Badges</h2>
        </motion.div>
      </div>

      <div className="relative px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 auto-rows-fr">
          {groupedCerts.map(([provider, data], index) => (
            <motion.div
              key={provider}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5, ease: 'easeOut' }}
              className="h-full"
            >
              <CertificationCard
                provider={provider}
                certs={data.certs}
                isExpanded={expandedProvider === provider}
                onToggle={() => setExpandedProvider(prev => (prev === provider ? null : provider))}
              />
            </motion.div>
          ))}
        </div>

        {/* Glass Faded Edges */}
        <div className="absolute left-0 top-0 bottom-0 w-[8vw] bg-gradient-to-r from-background via-background/80 to-transparent pointer-events-none z-10 md:hidden" />
        <div className="absolute right-0 top-0 bottom-0 w-[8vw] bg-gradient-to-l from-background via-background/80 to-transparent pointer-events-none z-10 md:hidden" />

        {/* Attribution for free icons */}
        <p className="max-w-7xl mx-auto mt-8 text-xs text-text-secondary/60">
          Icons by{' '}
          <a href="https://www.flaticon.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors">Flaticon</a>
          {' & '}
          <a href="https://icons8.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors">Icons8</a>
        </p>
      </div>
    </section>
  );
}